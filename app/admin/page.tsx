"use client";


import Sidebar from "@/components/admin/sidebar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Download } from "lucide-react";

import { useState, useEffect } from "react";


export default function DashboardPage() {
  

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <main className="p-6">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Bienvenue dans votre centre de gestion SportHub.
            </p>
          </div>
          {/* <div className="flex gap-2">
            <Button
              variant={"outline"}
              type="button"
              className="px-4 py-5 border border-slate-200 rounded-lg text-sm font-semibold flex items-center gap-2 bg-white"
            >
              <CalendarDays size={18} />
              Last 30 Days
            </Button>
            <button
              type="button"
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <Download size={18} />
              Export Report
            </button>
          </div> */}
        </header>

        {/* KPI Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"> */}
        <div className=" mx-auto">
          {/* <KpiCard statistics={statistics} /> */}
        </div>

        {/* Chart + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* <ActivityChart statistics={statistics} /> */}
          {/* <AlertsList /> */}
        </div>

        {/* TopCars Table */}
        {/* <TopCarsTable topCars={topCars}  /> */}
      </main>
    </div>
  );
}
