"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { DocsSearch } from "@/components/docs/search";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ServicesNavMenu} from "@/components/layout/nav-menu";
import {contact} from "@/config/contact";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  // const { data: session, status } = useSession();
  const { setShowSignInModal } = useContext(ModalContext);

  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  const configMap = {
    docs: docsConfig.mainNav,
  };

  const links = (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav;
  const phone = contact.phones[0]

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
            <Image src="/_static/logo.png" alt="Wester Care Services" width={120} height={40} />
          </Link>
          <div>
            <ServicesNavMenu scroll={scroll} links={links} />
          </div>
        </div>



        <div className="flex flex-nowrap items-baseline gap-5 text-sm">
          <div className="whitespace-nowrap font-geist">Need Help?</div>
          <Link href={`tel:${phone.id}`} className="">
            <Button size="sm" className="whitespace-nowrap rounded-full">
              <span className="mr-2"><Icons.phoneCall className="size-4" /></span> Call {phone.text}
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}

