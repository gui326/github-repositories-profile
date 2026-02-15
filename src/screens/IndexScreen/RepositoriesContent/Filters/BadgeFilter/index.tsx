import { useState } from "react";
import Image from "next/image";

import useIsMobile from "@/hooks/useIsMobile";
import WrapperMenuDesktop from "./WrapperMenuDesktop";
import ItemsFilters from "./ItemsFilters";
import { IRepositoryFiltersProps } from "@/types/IRepository";
import { useFiltersRepositoriesStore } from "@/store/useFiltersRepositoriesStore";
import WrapperDrawerMobile from "./WrapperDrawerMobile";

export default function BadgeFilter({
  filterKey,
  filterName,
  isMultiple = true,
}: {
  filterKey: keyof IRepositoryFiltersProps;
  filterName: string;
  isMultiple?: boolean;
}) {
  const isMobile = useIsMobile();
  const { filters, setFilters } = useFiltersRepositoriesStore();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (
    filterKey: keyof IRepositoryFiltersProps,
    option: string,
  ) => {
    const isSelected = filters[filterKey].includes(option);

    if (!isMultiple) {
      if (isSelected) {
        setFilters({ [filterKey]: [] });
      } else {
        setFilters({ [filterKey]: [option] });
      }
    } else {
      if (isSelected) {
        setFilters({
          [filterKey]: filters[filterKey].filter((item) => item !== option),
        });
      } else {
        setFilters({ [filterKey]: [...filters[filterKey], option] });
      }
    }
  };

  return (
    <>
      <div
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          setOpen((prev) => !prev);
        }}
        className="flex-shrink-0 flex items-center gap-[10px] hover:brightness-90 cursor-pointer py-[8px] pl-[8px] pr-[18px] bg-gradient-to-r rounded-full from-[#0056A6] to-[#0587FF]"
      >
        <Image
          quality={100}
          draggable={false}
          src="/assets/icons/icone_seta_baixo.svg"
          alt="Dropdown Icon"
          width={24}
          height={24}
        />

        <span>{filterName}</span>
      </div>

      {isMobile ? (
        <WrapperDrawerMobile
          open={open}
          handleClose={handleClose}
          filterName={filterName}
        >
          <ItemsFilters
            handleSelect={handleSelect}
            filterKey={filterKey}
            optionsActive={filters[filterKey]}
            isMultiple={isMultiple}
          />
        </WrapperDrawerMobile>
      ) : (
        <WrapperMenuDesktop
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
          filterName={filterName}
        >
          <ItemsFilters
            handleSelect={handleSelect}
            filterKey={filterKey}
            optionsActive={filters[filterKey]}
            isMultiple={isMultiple}
          />
        </WrapperMenuDesktop>
      )}
    </>
  );
}
