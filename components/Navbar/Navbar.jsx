import React, { useState } from "react";

import Style from "./Navbar.module.css";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import images from "../../img";
import Discover from "./discover/Discover";
import Help from "./help-center/HelpCenter";
import Profile from "./profile/Profile";
import Button from "../button/Button";
import Sidebar from "./sidebar/Sidebar";
import Notification from "./notification/Notification";

export default function Navbar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  function openMenu(e) {
    const btnText = e.target.innerText;
    switch (btnText) {
      case "Discover":
        setDiscover(true);
        setHelp(false);
        setNotification(false);
        setProfile(false);
        break;
      case "Help Center":
        setDiscover(false);
        setHelp(true);
        setNotification(false);
        setProfile(false);
        break;
      default:
        setDiscover(false);
        setHelp(false);
        setNotification(false);
        setProfile(false);
    }
  }

  function openNotification() {
    if (!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  }

  function openProfile() {
    if (!profile) {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/** Left */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="logo" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/** Right */}
        <div className={Style.navbar_container_right}>
          {/** Discover */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/** Help Center */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <Help />
              </div>
            )}
          </div>
          {/** Notification */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && (
              <div className={Style.navbar_container_right_notification_box}>
                <Notification />
              </div>
            )}
          </div>
          {/** Create Button Section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" handleClick={() => {}} />
          </div>
          {/** Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user2}
                alt="profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/** Menu button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          </div>
        </div>
      </div>
      {/** Sidebar */}
      {openSidebar && (
        <div className={Style.sidebar}>
          <Sidebar setOpenSidebar={setOpenSidebar} />
        </div>
      )}
    </div>
  );
}
