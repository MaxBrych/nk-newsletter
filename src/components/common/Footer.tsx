import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 gap-4 bg-white border border-t-dark-90">
      <Link
        className="text-xs md:text-base"
        href={"https://www.nordkurier.de/datenschutz"}
      >
        Datenschutz
      </Link>
      <Link
        className="text-xs md:text-base"
        href={"https://www.nordkurier.de/impressum"}
      >
        Impressum
      </Link>
      <Link
        className="text-xs md:text-base"
        href={"https://www.nordkurier.de/agb"}
      >
        AGB
      </Link>
    </div>
  );
};
