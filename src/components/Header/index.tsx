import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[72px] bg-gray-800 text-white flex items-center justify-center">
      <Container className="flex items-center gap-5">
        <Link href="https://github.com" className="flex">
          <Image
            quality={100}
            draggable={false}
            src="/assets/images/logo_github.png"
            alt="GitHub Logo"
            width={124}
            height={30}
          />
        </Link>

        <span className="text-[24px]">/</span>

        <p className="text-base/2 font-light">Profile</p>
      </Container>
    </header>
  );
}
