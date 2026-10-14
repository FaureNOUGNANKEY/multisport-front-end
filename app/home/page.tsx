"use client";


import { useState } from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats"

// page d'accueil

export default function HomeClient() {
  
  return (
    <main>
      <section>
        <HomeHero/>
      </section>
      <section>
        <HomeStats/>
      </section>
    </main>
  );
}