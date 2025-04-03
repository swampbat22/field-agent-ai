import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-6 bg-gradient-to-br from-emerald-500 to-green-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Field Agent AI</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Built with AI. Tuned for blue-collar pros. Claim more leads, respond faster, and let Turfie do the talking.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup"><Button className="text-lg">Start Free Trial</Button></Link>
          <Link href="/demo"><Button variant="secondary">Watch Demo</Button></Link>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Choose Your Hustle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Realtors", path: "/realtor" },
            { name: "Home Services", path: "/home-services" },
            { name: "Tech Installers", path: "/tech-installers" },
            { name: "Auto Detailers", path: "/auto-detailers" },
            { name: "Junk Haulers", path: "/junk-haulers" },
            { name: "Pool Service", path: "/pool-service" }
          ].map(v => (
            <Link href={v.path} key={v.name}>
              <div className="p-6 rounded-xl border shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-center">{v.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Starter", price: 29, features: ["Turfie Alerts", "Keyword Matching"] },
            { name: "Pro Agent", price: 49, features: ["+1 Vertical", "AI Templates"] },
            { name: "Hustler", price: 69, features: ["+3 Verticals", "Priority Claim"] },
            { name: "Empire", price: 99, features: ["All Verticals", "White Label Turfie"] }
          ].map(p => (
            <div key={p.name} className="border p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-2xl font-bold mb-4">${p.price}/mo</p>
              <ul className="text-sm space-y-1 mb-4">
                {p.features.map(f => <li key={f}>✅ {f}</li>)}
              </ul>
              <Link href="/signup"><Button className="w-full">Select</Button></Link>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Field Agent AI. All rights reserved.
      </footer>
    </main>
  );
}
