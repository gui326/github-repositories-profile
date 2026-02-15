import Link from "next/link";
import { Avatar } from "@mui/material";

import { IUserProfile } from "@/types/IUser";
import Image from "next/image";

export default function UserContent({ userData }: { userData: IUserProfile }) {
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
              width: "150px",
              height: "150px",
            }}
          />

          <div className="absolute bottom-0 right-0 bg-white rounded-full p-[8px]">
            😎
          </div>
        </div>

        <h1 className="mt-[24px] text-xl font-bold">{userData?.name}</h1>
        <p className="mt-[4px] text-base text-center font-regular">
          {userData?.bio}
        </p>
      </div>

      <nav className="mt-[32px]">
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
    </aside>
  );
}
