import Image from "next/image";

export function HowItWorks() {
  const sections = [
    {
      title: "Deciding what to do",
      description:
        "AI workers are scanning for opportunities or signals to take action: an incoming call, tendered load, or upcoming arrival window.",
      image: "/images/how-it-works-1.avif",
    },
    {
      title: "Having dynamic conversations",
      description:
        "AI workers dynamically handle communication in a natural, conversational flow: conducting a phone call, putting people on hold, or exchanging emails and texts.",
      image: "/images/how-it-works-2.avif",
    },
    {
      title: "Keeping things moving",
      description:
        "Work isn't done when the conversation ends - data is extracted, logged into your system, and the process continues to the next step, potentially off to another AI worker.",
      image: "/images/how-it-works-3.avif",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-gray-900 mb-16">
          How it works
        </h2>

        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={index} className="grid grid-cols-2 gap-16 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="max-w-xl">
                    <h3 className="text-[40px] leading-tight font-medium text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {section.description}
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-gray-50 p-8">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl overflow-hidden bg-gray-50 p-8">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-[40px] leading-tight font-medium text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
