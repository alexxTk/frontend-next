import React, { useEffect } from "react";
import type { NextPage } from "next";
import Layout from "@/src/components/common/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/create");
  });

  return (
    <Layout>
      <NextSeo title="Decompression calculator" />
    </Layout>
  );
};

export default Home;
