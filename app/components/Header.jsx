import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <figure className="w-full fixed top-0 left-0 right-0 z-50 bg-white h-[72px] border-b border-gray-100">
      <div className="flex items-center justify-between px-4 h-full">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={150}
            height={35}
            priority
            className="h-auto"
          />
        </Link>

        <div className="flex items-center justify-center space-x-8">
          <Link
            href="/how-it-works"
            className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
          >
            How it works
          </Link>
          <Link
            href="/use-cases"
            className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
          >
            Use cases
          </Link>
          <Link
            href="/why-happyrobot"
            className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
          >
            Why HappyRobot?
          </Link>
          <Link
            href="/integrations"
            className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
          >
            Integrations
          </Link>
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
          >
            Blog
          </Link>
        </div>

        <div>
          <Link
            href="/book-demo"
            className="text-sm font-medium text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200 tracking-wide"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </figure>
  );
}
