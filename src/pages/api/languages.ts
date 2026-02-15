// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import apiGithub from "@/lib/apiGithub";

type LanguageOption = { label: string; value: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LanguageOption[] | { message: string }>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Metodo não permitido" });
    return;
  }

  try {
    await apiGithub.get("/user/repos").then((response) => {
      const languageSet = new Set<string>();

      response.data.forEach((repo: any) => {
        if (repo.language) {
          languageSet.add(repo.language);
        }
      });

      res.status(200).json(
        Array.from(languageSet).map((language) => ({
          label: language,
          value: language,
        })),
      );
    });
  } catch (error) {
    console.error("[LOG] Error fetching languages data:", error);

    res.status(500).json({
      message: "[LOG] Não foi possível obter os dados das linguagens",
    });
  }
}
