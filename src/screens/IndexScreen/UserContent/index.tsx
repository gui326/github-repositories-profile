import { Avatar } from "@mui/material";
import Link from "next/link";

export default function UserContent() {
  return (
    <aside className="mt-[4px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Avatar
            alt="Foto de perfil"
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

        <h1 className="mt-[24px] text-xl font-bold">Name here</h1>
        <p className="mt-[4px] text-base text-center font-regular">
          Bio or description here
        </p>
      </div>

      <nav className="mt-[32px]">
        <ul className="flex flex-col gap-[16px]">
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <Link
                className="text-sm text-regular text-blue-500 hover:underline"
                href="#"
              >
                Link here
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
