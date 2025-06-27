"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Title from "./components/Title";
import Greeting from "./components/Greeting";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Quote from "./components/Quote";
import CongratulatoryMoney from "./components/CongratulatoryMoney";
import Share from "./components/Share";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-3">
      <Title />
      <Greeting />
      <Location />
      <Gallery />
      <CongratulatoryMoney />
      <Share />
      <footer className="my-10 px-2 text-center">
        <p>ⓒ 2025. EJ n John All rights reserved.</p>
      </footer>
    </div>
  );
}
