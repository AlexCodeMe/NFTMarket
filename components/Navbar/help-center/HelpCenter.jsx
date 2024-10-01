import React from 'react'
import Link from 'next/link';

import Style from "./HelpCenter.module.css";


export default function HelpCenter() {
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

  return (
    <div className={Style.box}>
      {helpCenter.map((item, index) => (
        <div key={index} className={Style.helpCenter}>
          <Link href={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}
