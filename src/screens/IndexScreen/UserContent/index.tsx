import { useState } from "react";
import Link from "next/link";
import { Avatar, Collapse } from "@mui/material";
import Image from "next/image";

import { IUserProfile } from "@/types/IUser";
import useIsMobile from "@/hooks/useIsMobile";

export default function UserContent({ userData }: { userData: IUserProfile }) {
  const isMobile = useIsMobile();

  const [openInfoExtraMobile, setOpenInfoExtraMobile] = useState(false);

  const OPTIONS = [
    {
      name: userData?.company,
      icon_url: "",
      value: "company",
      link: null,
    },
    {
      name: userData?.location,
      icon_url: "/assets/icons/icone_pin_azul.svg",
      value: "location",
      link: null,
    },
    {
      name: userData?.blog,
      icon_url: "/assets/icons/icone_links_azul.svg",
      value: "blog",
      link: userData?.blog ? userData.blog : null,
    },
  ];

  return (
    <aside className="mt-[4px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Avatar
            src={userData?.avatar_url}
            alt={userData?.name ?? "User Avatar"}
            className="shadow-xs"
            sx={{
              width: { md: "150px", xs: "104px" },
              height: { md: "150px", xs: "104px" },
            }}
          />

          <div className="absolute bottom-0 right-0 bg-white rounded-full p-[8px]">
            😎
          </div>
        </div>

        <h1 className="mt-[24px] text-xl lg:text-2xl font-bold">
          {userData?.name}
        </h1>
        <p className="mt-[4px] lg:text-base text-sm text-center font-regular">
          {userData?.bio}
        </p>
      </div>

      <p
        className="mt-[24px] text-blue-500 flex flex-col gap-[4px] items-center text-center lg:hidden text-sm font-regular"
        onClick={() => setOpenInfoExtraMobile((prev) => !prev)}
      >
        Informações Adicionais
        <span>
          <Image
            className={`transition-transform ${openInfoExtraMobile ? "rotate-180" : ""}`}
            quality={100}
            src={"/assets/icons/icone_seta_baixo_azul.svg"}
            alt={"Icone"}
            width={24}
            height={24}
          />
        </span>
      </p>

      <Collapse in={isMobile ? openInfoExtraMobile : true}>
        <nav className="lg:bg-transparent bg-gray-900 lg:mt-[32px] mt-[8px] rounded-[16px] lg:p-0 p-[16px]">
          <ul className="flex flex-col gap-[16px]">
            {OPTIONS?.map((option) => (
              <li
                className={option?.name ? "flex" : "hidden"}
                key={option?.value}
              >
                <Link
                  className="flex items-center gap-[10px] text-sm text-regular text-blue-500 hover:brightness-90"
                  href={option?.link ?? "#"}
                >
                  <Image
                    quality={100}
                    src={option?.icon_url}
                    alt={option?.name}
                    width={16}
                    height={16}
                  />

                  {option?.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Collapse>
    </aside>
  );
}
