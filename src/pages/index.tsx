import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../lib/sanity.client";
import Newsletter from "@/components/Newsletter";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import Main from "@/components/Main";

const postQuery = groq`*[_type == "newsletter"]{
  _id,
  title, 
  slug,
  description,
  imgURL,
  mainImage,
  link
}`;

const landingPageQuery = groq`*[_type == "landingpage"]{
  name,
  description,
  cta
}`;
export const revalidate = 10;
export const getStaticProps = async () => {
  const postData = await client.fetch(postQuery);
  const landingPageData = await client.fetch(landingPageQuery);

  return { props: { postData, landingPageData }, revalidate: 10 };
};

export default function Home({
  postData,
  landingPageData,
}: {
  postData: SanityDocument[];
  landingPageData: any[];
}) {
  return (
    <>
      <div className="flex flex-col justify-start min-h-screen font-sans md:items-center">
        <Header />
        <div className="max-w-6xl min-h-screen">
          <Main response={landingPageData} />
          <Newsletter posts={postData} />
        </div>
        <Footer />
        {/* <div className="absolute top-0 left-0 w-2/3 mr-4 rounded-full -z-10 bg-cyan-80 opacity-10 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>*/}
        {/*<div className="absolute bottom-0 right-0 w-2/3 mr-4 rounded-full -z-10 bg-cyan-80 opacity-10 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>*/}
        <div className="absolute w-full h-full mr-4 rounded-full -z-10 bg-cyan-90 opacity-10 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
    </>
  );
}
