import Link from "next/link";

export function WhyHappyRobot() {
  const stats = [
    {
      value: "100%",
      label: "Calls answered",
      description: "Record every option & never miss an opportunity.",
    },
    {
      value: "4x",
      label: "More cost effective",
      description: "When compared to efficiency of outsourced labor.",
    },
    {
      value: "+10%",
      label: "Higher margin",
      description: "With strict negotiations & more options to choose from.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl text-gray-600 mb-4">Why HappyRobot?</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-[40px] leading-tight font-medium text-gray-900 mb-4">
              We are redefining the economics of the freight industry.{" "}
              <span className="text-gray-500">
                AI workers are highly effective - always available and logging
                every data point.
              </span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-6xl font-medium text-gray-900">
                {stat.value}
              </div>
              <div className="text-xl font-medium text-gray-900">
                {stat.label}
              </div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
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
    </section>
  );
}
