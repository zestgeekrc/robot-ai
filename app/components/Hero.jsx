import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[56px] leading-tight font-medium text-gray-900 mb-6">
            AI communication.
            <br />
            for business teams
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automate communication across channels with AI workers that
            integrate with your systems, manage conversations, and log data.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 bg-[#4F46E5] text-white text-base font-medium rounded-lg hover:bg-[#4338CA] transition-colors duration-200"
            >
              Announcing our $15.6m series A from a16z
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/hero-img.avif"
            alt="AI Communication Platform"
            width={800}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
