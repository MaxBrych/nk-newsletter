import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-white">
      <Image
        src={
          "https://shop.nordkurier.de/cosmoshop/1674556097/pix/template/lemon/shop_header/de/Logo.jpg"
        }
        width={160}
        height={72}
        alt="Nordkurier Logo"
      />
    </div>
  );
};
