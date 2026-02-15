import IndexScreen from "@/screens/IndexScreen";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Repositories Profile - Gui326</title>
        <meta name="description" content="Github e repositórios de Gui326" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexScreen />
    </>
  );
}
