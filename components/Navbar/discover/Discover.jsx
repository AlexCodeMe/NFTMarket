import React from 'react'

import Style from "./Discover.module.css";
import Link from 'next/link';

export default function Discover() {
  const discover = [
    {
      name: "Collection",
      link: "/collection",
    },
    {
      name: "Search",
      link: "/search",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "NFT Details",
      link: "/nft-details",
    },
    {
      name: "Account Settings",
      link: "/account-settings",
    },
    {
      name: "Connect Wallet",
      link: "/connect-wallet",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ]
  
  return (
    <div>
      {discover.map((item, index) => (
        <div key={index} className={Style.discover}>
          <Link href={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}
