"use client";

import { CatCodingImg } from "@/assets";
import { HeaderNav } from "@/data/HeaderNav";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`flex w-full items-center justify-around border-b border-b-gray-400 py-5 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image className="h-7 w-7 rounded-[5px]" src={CatCodingImg} alt="🐈‍⬛" />
        <p>Minsu Choi</p>
      </Link>
      <nav className="flex items-center gap-5">
        {HeaderNav.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className={`hover:underline hover:underline-offset-5 ${pathName === nav.href ? "underline underline-offset-5" : "text-gray-600"}`}
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
