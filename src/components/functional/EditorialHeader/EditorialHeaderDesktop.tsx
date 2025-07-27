import AnchorLink from "@/components/ui/AnchorLink/AnchorLink";
import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVariant } from "@/types/types";
import Image from "next/image";

export default function EditorialHeaderDesktop() {
  return (
    <header
      className="
        fixed top-[3%] left-1/2 -translate-x-1/2 
        z-50 w-[80%] md:w-[90%] lg:w-[80%] 
        rounded-xl py-[1px] px-[1px] 
        bg-gradient-to-l from-black/20 to-transparent
      "
    >
      <div className="rounded-xl bg-white p-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <Image src="/logo.svg" alt="KuickApp logo" width={200} height={34} />

          <nav aria-label="Main navigation">
            <ul className="flex space-x-6 items-center">
              <li>
                <AnchorLink href="" className="font-light">
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="" className="font-light">
                  Features
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="" className="font-light">
                  Pricing
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="" className="font-light">
                  About
                </AnchorLink>
              </li>
              <li>
                <Button
                  variant={ButtonVariant.BTN_PRIMARY}
                  size={ButtonSize.BTN_MEDIUM}
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
