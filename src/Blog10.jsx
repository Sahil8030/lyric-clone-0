
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import blog01 from "./assets/blog01.png";      
import blog0001 from "./assets/blog0001.png";  
import Navbar from "./components/Navbar";



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
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="14" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeDasharray="1 5" />
            <g fill="rgba(255,255,255,0.9)">
              <circle cx="22" cy="22" r="1.2"/>
              <circle cx="26" cy="22" r="1.2"/>
              <circle cx="18" cy="22" r="1.2"/>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default function Blog10() {
  const moreBlogs = [
    { title: "Built for Builders. Backed to Scale.", date: "AUG 5, 2025", author: "Ganesh Ramakrishna", href: "/learn/1" },
    { title: "The Dying Art of Supply Chain Modeling", date: "APR 15, 2025", author: "Milind Kanetkar", href: "/learn/2" },
    { title: "Traffic, Trade Wars and the Road to Resilience", date: "JUN 2, 2025", author: "S. Author", href: "/learn/3" },
    { title: "Lyric Leverages NVIDIA cuOpt to Elevate Supply Chain AI", date: "MAR 1, 2025", author: "Team Lyric", href: "/learn/4" },
    { title: "Why Fast Modeling Wins", date: "FEB 20, 2025", author: "Data Team", href: "/learn/5" },
    { title: "From Heuristics to Learning Systems", date: "JAN 10, 2025", author: "Lead Researcher", href: "/learn/6" },
    { title: "Practical Forecasting at Scale", date: "DEC 5, 2024", author: "Ops Lead", href: "/learn/7" },
    { title: "Bringing Context into Time Series", date: "NOV 11, 2024", author: "Research", href: "/learn/8" },
    { title: "Feature Engineering for Real Demand", date: "OCT 2, 2024", author: "Data Eng", href: "/learn/9" },
    { title: "Model Evaluation: Metrics that Matter", date: "SEP 14, 2024", author: "ML Engineer", href: "/learn/10" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
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

      <main className="ml-[25%] w-[75%] bg-white text-black p-10">
        <h1 className="text-4xl font-bold mb-8">The Dying Art of Supply Chain Modeling</h1>

        <div className="text-lg text-gray-700 mb-20">
          <p>
Has supply chain modeling lost its edge? This blog explores how off-the-shelf tools have shaped the field—for better and worse—and why it might be time to rekindle the creativity and critical thinking that once defined great models.          </p>
        </div>

        <div className="mb-10">
          <img
            src="https://framerusercontent.com/images/tEktd8APaoAWso3KQ9jZDikHoRI.png?scale-down-to=512"
            alt="Blog"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="text-lg text-gray-800 mb-16">
          <p>
            It’s happening. Generative AI is now changing the game in time series forecasting...
          </p>

          <div className="mb-10 mt-8">
            <img
              src="https://framerusercontent.com/images/yZHv1GgN1fUstOzwOIAsCSL8Y.png"
              alt="Blog graphic"
              className="mx-auto w-[600px] h-[250px] object-cover rounded-lg"
            />
          </div>

          <h2 className="text-4xl mb-6">What Is This All About?</h2>
          <p className="mb-6">
            Just like ChatGPT learned to write by reading tons of books and websites, we now have models trained on massive amounts of time-based data like sales, electricity consumption, and traffic data.
          </p>

          <img className="w-full h-[500px] object-cover mt-8" src={blog0001} alt="Illustration" />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8">Read more</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moreBlogs.map((b, idx) => (
              <article
                key={idx}
                className="border border-dashed border-gray-300 p-6 min-h-[220px] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs tracking-wider px-2 py-1 border border-gray-300 mb-4">
                    {idx % 2 === 0 ? "THOUGHT LEADERSHIP" : "SCIENCE"}
                  </span>

                  <h3 className="text-2xl font-semibold mb-3">
                    <a href={b.href} className="hover:underline text-black">{b.title}</a>
                  </h3>

                  <div className="text-xs text-gray-500 mb-4">{b.date}</div>

                  <div className="text-lg text-gray-500">{b.author}</div>
                </div>

                <div className="mt-6">
                  <a
                    href={b.href}
                    className="inline-flex items-center px-5 py-2 border border-black text-sm hover:bg-black hover:text-white transition"
                  >
                    READ MORE <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div aria-hidden="true" style={{ height: "48px" }} />
      </main>

      <Footer />
    </div>
  );
}

