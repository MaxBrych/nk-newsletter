import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";

interface pageProps {
  _id: string;
  name: string;
  description: string;
}

export default function Main({ response }: { response: pageProps[] }) {
  return (
    <>
      {response.map((page: pageProps) => {
        return (
          <div key={page._id}>
            <h1 className="mb-2 font-sans text-4xl font-semibold text-dark-10">
              {page.name}
            </h1>
            <p className="font-sans text-base leading-5 text-dark-40">
              {page.description}
            </p>
          </div>
        );
      })}
    </>
  );
}
