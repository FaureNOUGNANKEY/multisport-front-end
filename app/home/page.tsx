"use client";


import { useState } from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats"
import HomeNews from "@/components/home/HomeNews";
import statsData from "@/lib/data/stats.json";
import NewsData from "@/lib/data/news.json"
import HomeServices from "@/components/home/HomeServices";

// page d'accueil

export default function HomeClient() {
  
  return (
    <main>
      <section>
        <HomeHero/>
      </section>
      <section>
        <HomeStats stats={statsData} />
      </section>
      <section>
       <HomeNews news={NewsData.slice(0, 3)} />
      </section>
      <section>
        <HomeServices/>
      </section>
    </main>
  );
}