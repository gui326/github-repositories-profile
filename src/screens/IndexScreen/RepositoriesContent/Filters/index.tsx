import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconButton, TextField } from "@mui/material";
import Image from "next/image";

import BadgeFilter from "./BadgeFilter";
import useIsMobile from "@/hooks/useIsMobile";

export default function Filters({
  setSearch,
}: {
  setSearch: (value: string) => void;
}) {
  const isMobile = useIsMobile();

  const router = useRouter();

  const [auxSearch, setAuxSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const STYLE_MOBILE_INPUT = {
    position: "absolute",
    translate: "0 -8px",
    left: "16px",
    zIndex: 10,
    maxWidth: { md: "unset", xs: "calc(100vw - 32px)" },
    display: isSearchOpen ? "block" : "none",
    ".MuiInputBase-root": {
      background: "#FFF",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSearch(auxSearch);
    setIsSearchOpen(false);
    router.push(`/?search=${auxSearch}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const searchQuery = router.query.search as string;

    if (searchQuery) {
      setAuxSearch(searchQuery);
      setSearch(searchQuery);
    }
  }, [router.query.search]);

  return (
    <div
      className="p-2 lg:p-0 lg:bg-transparent lg:dark:bg-transparent dark:bg-gray-900 bg-[#F8F8F8]
    mt-[48px] w-full xl:flex-row lg:flex-col flex-row flex xl:items-center items-between lg:justify-between justify-center xl:gap-[64px] lg:gap-[32px] gap-[16px] rounded-lg"
    >
      <form
        onSubmit={handleSubmit}
        className="xl:order-1 lg:order-2 order-2 flex-1"
      >
        <TextField
          id="search-input"
          variant={isMobile ? "outlined" : "standard"}
          value={auxSearch}
          placeholder="Search here"
          onChange={(e) => setAuxSearch(e.target.value)}
          className="dark:invert"
          sx={isMobile ? STYLE_MOBILE_INPUT : {}}
          slotProps={{
            input: {
              startAdornment: (
                <div className="m-2 flex items-center justify-center">
                  <Image
                    quality={100}
                    draggable={false}
                    className="dark:invert"
                    src={
                      isMobile
                        ? "/assets/icons/icone_lupa_azul.svg"
                        : "/assets/icons/icone_lupa.svg"
                    }
                    alt="Search Icon"
                    width={24}
                    height={24}
                  />
                </div>
              ),
            },
          }}
          fullWidth
        />
      </form>

      <div className="xl:order-2 lg:order-1 order-1 flex items-center lg:gap-[16px] gap-[12px]">
        <BadgeFilter filterKey="types" filterName="Type" isMultiple={false} />
        <BadgeFilter
          filterKey="languages"
          filterName="Language"
          isMultiple={true}
        />
      </div>

      <IconButton
        onClick={() => setIsSearchOpen((prev) => !prev)}
        sx={{
          display: { md: "none", xs: "block" },
          order: "3",
        }}
      >
        <Image
          quality={100}
          draggable={false}
          src="/assets/icons/icone_lupa_azul.svg"
          alt="Search Icon"
          width={24}
          height={24}
        />
      </IconButton>
    </div>
  );
}
