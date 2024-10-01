import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import Style from "./Sidebar.module.css";
import images from "../../../img";
import Button from "../../button/Button";

export default function Sidebar({ setOpenSidebar }) {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
  ];

  const helpCenter = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Sign up",
      link: "/signup",
    },
    {
      name: "Sign in",
      link: "/signin",
    },
    {
      name: "Subscription",
      link: "/subscription",
    },
  ]

function closeSidebar() {
  setOpenSidebar(false);
}

  return (
    <div className={Style.sidebar}>
      <GrClose
        className={Style.sidebar_closeBtn}
        onClick={() => closeSidebar()}
      />
      <div className={Style.sidebar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover unique and exclusive NFTs</p>
        <div className={Style.sidebar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sidebar_menu}>
        <div>
          <div
            className={Style.sidebar_menu_box}
            onClick={() => setOpenDiscover(!openDiscover)}
          >
            <p>Discover</p>
            {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          <div
            className={Style.sidebar_menu_box}
            onClick={() => setOpenHelp(!openHelp)}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sidebar_menu_discover}>
              {discover.map((item, index) => (
                <p key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className={Style.sidebar_menu_box} onClick={() => setOpenHelp(!openHelp)}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sidebar_discover}>
              {helpCenter.map((item, index) => (
                <p key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sidebar_button}>
        <Button btnText="Create" handleClick={() => {}} />
        <Button btnText="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
}
