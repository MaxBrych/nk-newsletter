// ./components/Movies.tsx

import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Image from "next/image";

export default function Newsletter({ posts }: { posts: SanityDocument[] }) {
  return (
    <>
      <Head>
        <title>{posts.length} Newsletter</title>
      </Head>
      <main className="flex flex-col gap-6 py-6 mx-auto divide-y md:grid md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={post.link}
            className="flex flex-col items-center p-4 transition-colors bg-white hover:bg-cyan-95 rounded-2xl "
          >
            <Image
              className="w-full rounded-lg "
              src={post.imgURL}
              width={300}
              height={300}
              alt={post.title}
            />
            <div className="w-full pt-4">
              <h2 className="text-xl font-semibold text-dark-10">
                {post.title}
              </h2>
              <p className="text-sm text-dark-40">{post.description}</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
