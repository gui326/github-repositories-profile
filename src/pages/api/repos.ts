// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import apiGithub from "@/lib/apiGithub";
import { IRepositoryProps } from "@/types/IRepository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRepositoryProps[] | { message: string }>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Metodo não permitido" });
    return;
  }

  try {
    await apiGithub
      .get("/user/repos", {
        params: {
          sort: "updated",
        },
      })
      .then((response) => {
        const repositoryData: IRepositoryProps[] = response.data.map(
          (repo: any) => ({
            id: repo.id || 0,
            name: repo.name || "",
            full_name: repo.full_name || "",
            html_url: repo.html_url || "",
            description: repo.description || "",
            stargazers_count: repo.stargazers_count || 0,
            language: repo.language || "",
            forks_count: repo.forks_count || 0,
            archived: repo.archived || false,
            fork: repo.fork || false,
            mirror_url: repo.mirror_url || null,
            sources: repo?.owner?.type === "Organization" ? false : true,
            owner: {
              login: repo.owner?.login || "",
            },
          }),
        );

        console.log(
          "[LOG] Repository data fetched successfully:",
          response.data,
        );

        res.status(200).json(repositoryData);
      });
  } catch (error) {
    console.error("[LOG] Error fetching repositories data:", error);

    res.status(500).json({
      message: "[LOG] Não foi possível obter os dados dos repositórios",
    });
  }
}
