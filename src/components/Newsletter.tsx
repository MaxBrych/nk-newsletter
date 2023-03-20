// ./components/Movies.tsx

import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

export default function Newsletter({ posts }: { posts: SanityDocument[] }) {
  return (
    <>
      <Head>
        <title>{posts.length} Newsletter</title>
      </Head>
      <main className="flex flex-1 gap-4 py-6 mx-auto mb-4 overflow-x-auto divide-y md:gap-6 md:grid md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={post.link}
            className="flex flex-col min-h-[33vh] md:min-h-full min-w-[50vw] md:min-w-full md:h-auto  items-center flex-1  p-2 transition-colors bg-white border md:w-auto md:p-4 border-dark-90 hover:bg-cyan-95 rounded-xl md:rounded-2xl "
          >
            <Image
              className="w-full rounded-lg md:rounded-xl shadow-l min-w-[33vw] md:min-w-full md:w-auto"
              src={urlFor(post.mainImage).url()}
              width={300}
              height={300}
              alt={post.title}
            />
            <div className="w-full pt-4">
              <h2 className="text-lg leading-5 md:leading-6 font-semibold md:text-xl text-dark-10">
                {post.title}
              </h2>
              <p className="text-sm md:text-sm text-dark-40">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
