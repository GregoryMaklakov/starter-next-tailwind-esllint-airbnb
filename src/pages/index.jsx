import Head from "next/head";
import { Layount } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME PAGE</title>
        <meta name="description" content="description" />
      </Head>
      <main className="flex items-center w-full min-h-screen">
        <Layount className="">
          Home
        </Layount>
      </main>
    </>
  );
}
