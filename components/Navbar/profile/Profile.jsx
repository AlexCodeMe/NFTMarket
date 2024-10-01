import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff } from "react-icons/tb";

import Link from "next/link";
import Image from "next/image";

import Style from "./Profile.module.css";
import images from "../../../img";

export default function Profile() {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user2}
          alt="profile"
          width={50}
          height={50}
          onClick={() => {}}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>Alexander Moyer</p>
          <small>0x12345678901234567890</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={"/profile"}>My Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={"/my-items"}>My Items</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={"/edit-profile"}>Edit profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={"/help"}>Help Center</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownloadOff />
            <p>
              <Link href={"/disconnect"}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
