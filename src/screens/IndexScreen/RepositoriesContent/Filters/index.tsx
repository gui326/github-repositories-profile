import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import Image from "next/image";

import BadgeFilter from "./BadgeFilter";

export default function Filters({
  setSearch,
}: {
  setSearch: (value: string) => void;
}) {
  const router = useRouter();

  const [auxSearch, setAuxSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSearch(auxSearch);
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
    <div className="mt-[48px] flex items-center justify-between gap-[64px]">
      <form onSubmit={handleSubmit} className="flex-1">
        <TextField
          id="search-input"
          variant="standard"
          value={auxSearch}
          placeholder="Search here"
          onChange={(e) => setAuxSearch(e.target.value)}
          className="dark:invert"
          slotProps={{
            input: {
              startAdornment: (
                <div className="m-2 flex items-center justify-center">
                  <Image
                    quality={100}
                    draggable={false}
                    className="dark:invert"
                    src="/assets/icons/icone_lupa.svg"
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

      <div className="flex items-center gap-[16px]">
        <BadgeFilter filterKey="types" filterName="Type" isMultiple={false} />
        <BadgeFilter
          filterKey="languages"
          filterName="Language"
          isMultiple={true}
        />
      </div>
    </div>
  );
}
