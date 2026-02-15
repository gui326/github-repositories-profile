import { TextField } from "@mui/material";
import Image from "next/image";

import BadgeFilter from "./BadgeFilter";

export default function Filters({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <div className="mt-[48px] flex items-center justify-between gap-[64px]">
      <TextField
        id="search-input"
        variant="standard"
        value={search}
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
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

      <div className="flex items-center gap-[16px]">
        <BadgeFilter filterKey="types" filterName="Type" />
        <BadgeFilter filterKey="languages" filterName="Language" />
      </div>
    </div>
  );
}
