// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IUserProfile } from "@/types/IUser";
import apiGithub from "@/services/apiGithub";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserProfile>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ name: "Metodo não permitido" });
    return;
  }

  try {
    await apiGithub.get("/user").then((response) => {
      const { name } = response.data;

      console.log("[LOG] User data fetched successfully:", { name });

      res.status(200).json({ name });
    });
  } catch (error) {
    console.error("[LOG] Error fetching user data:", error);

    res
      .status(500)
      .json({ name: "[LOG] Não foi possível obter os dados do usuário" });
  }
}
