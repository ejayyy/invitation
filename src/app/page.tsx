"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Title from "./components/Title";
import Greeting from "./components/Greeting";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import CongratulatoryMoney from "./components/CongratulatoryMoney";
import Share from "./components/Share";
import ThemeToggle from "./components/ThemeToggle";
import { usePreventZoom } from "./hooks/usePreventZoom";

export default function Home() {
  // Custom hook for preventing zoom
  usePreventZoom();

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
      <footer className="mb-10 mt-25 px-2 text-center">
        <p className="mb-3 text-sm font-light font-(family-name:--font-ibm-plex-sans-kr)">ⓒ 2025. EJ n John All rights reserved.</p>
        <ThemeToggle />
      </footer>
    </div>
  );
}
