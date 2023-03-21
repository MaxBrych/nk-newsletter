import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";

interface pageProps {
  _id: string;
  name: string;
  description: string;
  cta: string;
}

export default function Main({ response }: { response: pageProps[] }) {
  return (
    <>
      {response.map((page: pageProps) => {
        return (
          <div key={page._id} className="px-4">
            <h1 className="mt-8 mb-2 font-sans text-3xl font-semibold md:mt-16 md:text-4xl text-dark-10">
              {page.name}
            </h1>
            <p className="font-sans text-sm leading-5 md:text-base text-dark-40">
              {page.description}
            </p>
            <div className="flex items-center justify-center mt-16">
              <h1 className="text-lg font-semibold text-center md:text-xl">
                {page.cta}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
