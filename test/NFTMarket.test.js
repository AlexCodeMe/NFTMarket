const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  let nftMarket, owner, seller, buyer, listingPrice, price;
  
  beforeEach(async () => {
    console.log("Running beforeEach...");
    [owner, seller, buyer] = await ethers.getSigners();
    
    const NFTMarket = await ethers.getContractFactory("NFTMarket");
    nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();
    
    listingPrice = await nftMarket.getListingPrice();
    price = ethers.utils.parseUnits('1', 'ether'); // 1 ether price for NFT
  });

  it("Should create and list an NFT", async function () {
    // Seller creates a new token
    const tokenURI = "https://test-nft.com/metadata/1";
    await nftMarket.connect(seller).createToken(tokenURI, price, { value: listingPrice });
    
    const listedItem = await nftMarket.fetchMarketItems();
    expect(listedItem.length).to.equal(1);
    expect(listedItem[0].price).to.equal(price);
    expect(listedItem[0].seller).to.equal(seller.address);
  });

  it("Should allow a buyer to purchase an NFT", async function () {
    // Seller creates a new token
    const tokenURI = "https://test-nft.com/metadata/2";
    await nftMarket.connect(seller).createToken(tokenURI, price, { value: listingPrice });

    // Buyer makes the purchase
    await nftMarket.connect(buyer).createMarketSale(1, { value: price });
    
    const newOwner = await nftMarket.ownerOf(1);
    expect(newOwner).to.equal(buyer.address);

    const listedItems = await nftMarket.fetchMarketItems();
    expect(listedItems.length).to.equal(0); // NFT is no longer listed
  });

  it("Should allow a token to be resold", async function () {
    // Seller creates a new token
    const tokenURI = "https://test-nft.com/metadata/3";
    await nftMarket.connect(seller).createToken(tokenURI, price, { value: listingPrice });

    // Buyer purchases it
    await nftMarket.connect(buyer).createMarketSale(1, { value: price });

    // Buyer resells the token
    const resalePrice = ethers.utils.parseUnits('2', 'ether'); // Set higher price for resale
    await nftMarket.connect(buyer).resellToken(1, resalePrice, { value: listingPrice });

    const listedItems = await nftMarket.fetchMarketItems();
    expect(listedItems.length).to.equal(1); // NFT is back on sale
    expect(listedItems[0].price).to.equal(resalePrice);
  });

  it("Should fetch only my NFTs", async function () {
    // Seller creates two tokens
    const tokenURI1 = "https://test-nft.com/metadata/4";
    const tokenURI2 = "https://test-nft.com/metadata/5";
    await nftMarket.connect(seller).createToken(tokenURI1, price, { value: listingPrice });
    await nftMarket.connect(seller).createToken(tokenURI2, price, { value: listingPrice });

    // Buyer purchases one of them
    await nftMarket.connect(buyer).createMarketSale(1, { value: price });

    const myNFTs = await nftMarket.connect(buyer).fetchMyNFTs();
    expect(myNFTs.length).to.equal(1);
    expect(myNFTs[0].tokenId).to.equal(1); // Buyer owns the first token
  });
});
