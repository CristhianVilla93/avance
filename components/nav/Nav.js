"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./nav.css";

function IconMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="black"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}

export default function Nav() {
  const [navBar, setNavBar] = useState(false);

  const handleNav = () => {
    console.log("handled");
    setNavBar(!navBar);
  };

  return (
    <>
      <nav onClick={handleNav}>
        <h3>Edie</h3>
        <IconMenu />
        {navBar ? (
          <div id="navSecondary" onClick={handleNav}>
            <ul>
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>Services</Link>
              </li>
              <li>
                <Link href={"#"}>Our Works</Link>
              </li>
              <li>
                <Link href={"#"}>Clients</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <ul>
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Our Works</Link>
          </li>
          <li>
            <Link href={"#"}>Clients</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <section>
        <div className="cuadro1">
          <p>Unhappy with your website?</p>
          <h1>We create beautiful <br /> and  fast web services</h1>
        </div>
        <div className="image1">
          <img className="gente" src="/heroImage.jpg" alt="gente" />
        </div>
        <div className="cuadro2">
          <h1>Story, emotion <br /> and purpose</h1>
          <p>We help transform your ideas into real
            world applications that will outperform
            your toughest competition and help you 
            achieve your strategic goals in short period of time.</p>
          
          <img className="email" src="/email.png" alt="email" />
        </div>
      </section>
    </>
  );
}
