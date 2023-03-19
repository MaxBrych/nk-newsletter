// ./components/Movie.tsx

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "../lib/sanity.client";
import Head from "next/head";

const builder = imageUrlBuilder(client);

export default function Newslet({ movie }: { movie: SanityDocument }) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <main className="container p-4 mx-auto prose prose-lg">
        <h1>{movie.title}</h1>
        <Image
          className="float-left w-1/3 m-0 mr-4 rounded-lg"
          src={builder.image(movie.poster).width(300).height(300).url()}
          width={300}
          height={300}
          alt={movie.title}
        />
        <PortableText value={movie.overview} />
      </main>
    </>
  );
}
