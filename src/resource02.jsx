

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import ConnectRes from "./components/ConnectRes"; 
import R1 from "./assets/R1.png"; 

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-white">
      <div className="relative">
        <div className="ml-[25%] max-w-7xl mx-auto py-16 px-8">
          <div className="flex">
            <div className="w-1/2">
              <nav className="flex flex-col gap-8 text-lg">
                <a href="/home" className="hover:underline">Home</a>
                <a href="/company" className="hover:underline">Company</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/careers" className="hover:underline">Careers</a>
              </nav>
              <div className="mt-12 text-gray-400">
                <a href="/privacy" className="mr-6 hover:underline">Privacy Policy</a>
                <a href="/security" className="mr-6 hover:underline">Security</a>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-end">
              <div className="text-xl font-semibold mb-6">A New Era in Supply Chain</div>
              <div className="flex-1" />
              <div className="text-gray-400">© 2025 Lyric. All rights reserved.</div>
            </div>
          </div>
        </div>
        <div className="absolute" style={{ right: "5.5rem", top: "3.5rem" }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle
              cx="22"
              cy="22"
              r="14"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.6"
              strokeDasharray="1 5"
            />
            <g fill="rgba(255,255,255,0.9)">
              <circle cx="22" cy="22" r="1.2" />
              <circle cx="26" cy="22" r="1.2" />
              <circle cx="18" cy="22" r="1.2" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default function resource02() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* LEFT FIXED COLUMN */}
      <aside className="w-1/4 fixed left-0 top-0 h-screen bg-black p-6 border-r border-gray-800 z-40 text-white">
        <h2 className="text-2xl font-bold mb-6">All Blogs</h2>
        <p className="text-gray-400 mb-4">14 min</p>
        <p className="text-gray-400 mb-6">PUBLISHED AUG 8, 2025</p>

        <div>
          <p className="mb-2">Share this post</p>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://lyric.tech/blog/the-technology-behind-modeling-at-scale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:text-blue-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="ml-[25%] w-[75%] bg-white text-black">
        {/* FULL-WIDTH IMAGE */}
        <div className="w-full">
          <img
            src={R1}
            alt="Supply Chain"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* TEXT + FORM SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* TEXT */}
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              Supply chain leaders have always known that better data means
              better decisions, but the path from raw data to real impact has
              radically transformed.
            </p>
            <p className="mb-4">
              In this webinar, we’ll unpack what’s changed, what still holds
              true, and how to navigate the complexities of today’s data
              landscape with confidence.
            </p>
            <p className="mb-4">
              Join us as we explore the shift from static data lakes to dynamic,
              supply chain–specific data catalogs. We’ll break down the speed vs.
              scale tradeoff, the rise of editable datasets, and the real
              strategy behind making data actionable, not just organized.
            </p>
            <p>
              Whether you're building forecasts, optimizing networks, or
              planning across silos, this session will help you rethink what’s
              possible with your data in 2025.
            </p>
          </div>

          {/* FORM */}
          <div>
            <ConnectRes />
          </div>
        </div>
      </main>
      <section className="bg-[#1E1EFF] text-white flex flex-col items-end justify-center py-20 pr-12 text-right">
  <h1 className="text-3xl md:text-5xl font-bold mb-6">
    Deliver Better Decisions Faster.
  </h1>
  <a
    href="/book-a-demo"
    className="bg-white text-black font-medium px-6 py-3 hover:bg-gray-200 transition"
  >
    BOOK A DEMO
  </a>
</section>


      <Footer />
    </div>
  );
}

