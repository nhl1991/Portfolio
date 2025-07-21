'use client'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      snap: 1 / (document.querySelectorAll(".section").length - 1), // 각 섹션으로 스냅
      // optional
    });
  }, []);

  return (
    <>
      <div className="section" style={{ height: "100vh", background: "red" }} />
      <div className="section" style={{ height: "100vh", background: "blue" }} />
      <div className="section" style={{ height: "100vh", background: "green" }} />
    </>
  );
}
