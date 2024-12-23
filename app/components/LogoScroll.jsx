import Image from "next/image";

export function LogoScroll() {
  const logos = Array(9).fill("/images/logo.svg");

  return (
    <section className="w-full overflow-hidden py-16 bg-gray-50">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex space-x-16 items-center">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless scrolling */}
        <div className="flex space-x-16 items-center">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
