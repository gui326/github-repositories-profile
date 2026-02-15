// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TypeOption = { label: string; value: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeOption[] | { message: string }>,
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Metodo não permitido" });
    return;
  }

  res.status(200).json([
    {
      value: "all",
      label: "All",
    },
    {
      value: "sources",
      label: "Sources",
    },
    {
      value: "forks",
      label: "Forks",
    },
    {
      value: "archived",
      label: "Archived",
    },
    {
      value: "mirrors",
      label: "Mirrors",
    },
  ]);
}
