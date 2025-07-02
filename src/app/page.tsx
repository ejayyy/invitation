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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    // 줌 방지 이벤트 리스너
    const preventZoom = (e: Event) => {
      if ((e as any).touches && (e as any).touches.length > 1) {
        e.preventDefault();
      }
    };

    const preventDoubleClickZoom = (e: Event) => {
      e.preventDefault();
    };

    const preventKeyboardZoom = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    const preventWheelZoom = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('dblclick', preventDoubleClickZoom);
    document.addEventListener('keydown', preventKeyboardZoom);
    document.addEventListener('wheel', preventWheelZoom, { passive: false });

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // 이벤트 리스너 제거
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('dblclick', preventDoubleClickZoom);
      document.removeEventListener('keydown', preventKeyboardZoom);
      document.removeEventListener('wheel', preventWheelZoom);
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
        <p className="mb-4">ⓒ 2025. EJ n John All rights reserved.</p>
        <ThemeToggle />
      </footer>
    </div>
  );
}
