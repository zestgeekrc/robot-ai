"use client";

import Image from "next/image";
import { useState } from "react";

export function UseCases() {
  const [activeTab, setActiveTab] = useState("outbound");

  const tabs = [
    { id: "outbound", label: "Outbound carrier sales" },
    { id: "check", label: "Check calls" },
    { id: "inbound", label: "Inbound sales & carrier verification" },
    { id: "payment", label: "Payment status updates" },
    { id: "customer", label: "Customer development" },
  ];

  const content = {
    outbound: {
      title: "Outbound carrier sales",
      description:
        "Call priority carriers automatically when a new load is tendered & get the best rate every time.",
      image: "/images/use-cases-1.avif",
    },
    check: {
      title: "Check calls",
      description:
        "You'll know exactly where every load is & exceed customers' expectations with delivery updates.",
      image: "/images/use-cases-2.avif",
    },
    inbound: {
      title: "Inbound sales and carrier verification",
      description:
        "Our AI acts as a gate keeper to your reps, answering every call & only letting through legitimate interest.",
      image: "/images/use-cases-3.avif",
    },
    payment: {
      title: "Payment status updates",
      description: "Collect PODs faster & stay on top of payments.",
      image: "/images/use-cases-4.avif",
    },
    customer: {
      title: "Customer development",
      description:
        "Find leads that are a good fit & let your reps engage with higher focus.",
      image: "/images/use-cases-5.avif",
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">Use cases</h2>
          <h3 className="text-[40px] leading-tight font-medium text-gray-900 mb-4">
            Ready-to-use flows,
            <br />
            fine-tuned to your industry
          </h3>
          <p className="text-xl text-gray-600">
            Get started in seconds with a template and customize the flow down
            to how you say hello.
          </p>
        </div>

        <div className="relative">
          {/* Tabs */}
          <div className="flex space-x-4 mb-16 overflow-x-auto pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-2xl font-medium text-gray-900 mb-4">
                {content[activeTab].title}
              </h4>
              <p className="text-xl text-gray-600">
                {content[activeTab].description}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-50 p-8">
              <Image
                src={content[activeTab].image}
                alt={content[activeTab].title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
