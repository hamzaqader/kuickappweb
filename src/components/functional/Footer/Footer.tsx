import Image from "next/image";
import NewsLetter from "../NewsLetter/NewsLetter";
import AnchorLink from "@/components/ui/AnchorLink/AnchorLink";

export default function Footer() {
  return (
    <footer className="max-w-screen px-4 sm:px-6 md:px-12 lg:px-[164px] pt-10 pb-6 text-sm text-black">
      {/* Newsletter */}
      <div className="mb-16">
        <NewsLetter />
      </div>

      {/* Logo + tagline */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-16">
        <Image src="/logo.svg" alt="kuickapp logo" width={216} height={0} />
        <div className="w-full sm:w-px h-px sm:h-auto bg-gray-300" />
        <h1 className="text-xl sm:text-2xl font-light">
          Become a part of <span className="font-bold">Revolution!</span>
        </h1>
      </div>

      {/* 5-column links */}
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {/* Social */}
        <div>
          <h4 className="font-normal mb-6 text-lg sm:text-xl text-gray-600">
            Social
          </h4>
          <ul className="space-y-2">
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                LinkedIn
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Instagram
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Facebook
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Youtube
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                X (Twitter)
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-normal mb-6 text-lg sm:text-xl text-gray-600">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Blogs
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Career
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-normal mb-6 text-lg sm:text-xl text-gray-600">
            Links
          </h4>
          <ul className="space-y-2">
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Pricing
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Book Demo
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-normal mb-6 text-lg sm:text-xl text-gray-600">
            Location
          </h4>
          <ul className="space-y-2">
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Karachi, PK
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Lahore, PK
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Islamabad, PK
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-normal mb-6 text-lg sm:text-xl text-gray-600">
            Get in touch
          </h4>
          <ul className="space-y-2">
            <li>
              <AnchorLink
                href="tel:+923313844515"
                className="!text-lg sm:!text-2xl"
              >
                +92 331 384 4515
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="mailto:info@kuickapp.com"
                className="!text-lg sm:!text-2xl"
              >
                info@kuickapp.com
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="!text-lg sm:!text-2xl">
                Contact Us
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row md:justify-between items-center text-xs sm:text-sm text-gray-500">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          © Copyright 2025. All Rights Reserved by Pakistan Oxygen Limited
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <AnchorLink href="#">Sitemap</AnchorLink>
          <AnchorLink href="#">Privacy Policy</AnchorLink>
          <AnchorLink href="#">Term of Use</AnchorLink>
          <AnchorLink href="#">Cookie Policy</AnchorLink>
        </div>
      </div>
    </footer>
  );
}
