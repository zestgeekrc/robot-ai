"use client";

import Link from "next/link";
import Image from "next/image";

export function Integration() {
  const partners = [
    [
      { name: "McLeod", logo: "/images/one-click-integration.avif" },
      { name: "Turvo", logo: "/images/one-click-integration.avif" },
      { name: "Highway", logo: "/images/one-click-integration.avif" },
      { name: "Twilio", logo: "/images/one-click-integration.avif" },
      { name: "Salesforce", logo: "/images/one-click-integration.avif" },
    ],
    [
      { name: "Truck", logo: "/images/one-click-integration.avif" },
      { name: "Ring Central", logo: "/images/one-click-integration.avif" },
      { name: "Box", logo: "/images/one-click-integration.avif" },
      { name: "M", logo: "/images/one-click-integration.avif" },
      { name: "DAT", logo: "/images/one-click-integration.avif" },
    ],
    [
      { name: "MyCarrierPortal", logo: "/images/one-click-integration.avif" },
      { name: "Plus", logo: "/images/one-click-integration.avif" },
      { name: "Revenova", logo: "/images/one-click-integration.avif" },
      { name: "WhatsApp", logo: "/images/one-click-integration.avif" },
      { name: "3PL", logo: "/images/one-click-integration.avif" },
    ],
    [
      { name: "Samsara", logo: "/images/one-click-integration.avif" },
      { name: "8x8", logo: "/images/one-click-integration.avif" },
      { name: "RMIS", logo: "/images/one-click-integration.avif" },
      { name: "Transport Pro", logo: "/images/one-click-integration.avif" },
    ],
    [
      { name: "HubSpot", logo: "/images/one-click-integration.avif" },
      { name: "Motive", logo: "/images/one-click-integration.avif" },
    ],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Logo Grid */}
          <div className="space-y-8">
            {partners.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex space-x-12 items-center justify-start opacity-50"
              >
                {row.map((partner) => (
                  <div key={partner.name} className="relative h-8 w-24">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="lg:pl-16">
            <div className="max-w-xl">
              <h2 className="text-[40px] leading-tight font-medium text-gray-900 mb-6">
                One-click integration into your existing platforms
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Syncs with your TMS, load board, and telephony for real-time
                data access.{" "}
                <span className="text-gray-500">
                  Integrate with existing solutions to amplify your current
                  operations.
                </span>
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-700 group"
              >
                Book a demo
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
