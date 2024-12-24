import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo and Tagline */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.svg"
                alt="SuperVoice Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-medium">SuperVoice</span>
            </div>
            <p className="text-gray-600 mt-2">
              AI communication for business teams
            </p>
          </div>

          {/* SOC 2 Badge */}
          {/* <div>
            <Image
              src="/images/soc2.png"
              alt="SOC 2 Type II"
              width={80}
              height={80}
            />
          </div> */}
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © {currentYear} SuperVoice Inc.
            <span className="mx-2">·</span>
            <Link href="#" className="hover:text-gray-900">
              Terms of service
            </Link>
            <span className="mx-2">·</span>
            <Link href="#" className="hover:text-gray-900">
              Privacy policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
