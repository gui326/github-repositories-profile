import Head from "next/head";
import axios from "axios";

import IndexScreen from "@/screens/IndexScreen";
import { IUserProfile } from "@/types/IUser";
import apiGithub from "@/lib/apiGithub";

export default function Home({ userData }: { userData: IUserProfile }) {
  return (
    <>
      <Head>
        <title>GitHub Repositories Profile - Gui326</title>
        <meta name="description" content="Github e repositórios de Gui326" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexScreen userData={userData} />
    </>
  );
}

export async function getStaticProps() {
  let userData: IUserProfile | null = null;

  try {
    const response = await apiGithub.get("/user");
    const { name, bio, avatar_url, blog, location, company } = response.data;

    userData = { name, bio, avatar_url, blog, location, company };
  } catch (error) {
    console.error("[LOG] Error fetching GitHub user data:", error);

    userData = {
      name: "Nome não disponível",
      bio: "Biografia não disponível",
      avatar_url: "/default-avatar.png",
      blog: "",
      location: "",
      company: "",
    };
  }

  return {
    props: {
      userData: userData,
    },
    revalidate: 1800, // 30 mins para revalidar
  };
}
