"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between items-center bg-slate-300 shadow-sm">
    <h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1>
    <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
      <Link href="/">Home</Link>
    </div>
  </nav>
  )
}

export default Navbar