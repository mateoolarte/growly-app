"use client";

import { useEffect } from "react";

import { Info } from "./Info";
import { Asset } from "./Asset";
import { Features } from "./Features";

import "./Hero.scss";

export function Hero() {
  useEffect(() => {
    const bgCircleElm = document.createElement("span");
    bgCircleElm.classList.add("hero-bg");

    document.body.prepend(bgCircleElm);
  }, []);

  return (
    <section className="hero">
      <div className="container-box">
        <div className="hero-container">
          <Info />
          <Asset />
        </div>
        <Features />
      </div>
    </section>
  );
}
