import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-white border border-b-dark-90">
      <Link href={"https://www.nordkurier.de/"}>
        <Image
          src={
            "https://shop.nordkurier.de/cosmoshop/1674556097/pix/template/lemon/shop_header/de/Logo.jpg"
          }
          width={160}
          height={80}
          alt="Nordkurier Logo"
        />
      </Link>
    </div>
  );
};
