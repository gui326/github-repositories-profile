import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import { IRepositoryFiltersProps } from "@/types/IRepository";

export default function ItemsFilters({
  optionsActive,
  filterKey,
  handleSelect,
}: {
  optionsActive: string[];
  filterKey: keyof IRepositoryFiltersProps;
  handleSelect: (
    filterKey: keyof IRepositoryFiltersProps,
    option: string,
  ) => void;
}) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={optionsActive.includes("C++")}
              onChange={() => handleSelect(filterKey, "C++")}
              size="small"
            />
          }
          label="C++"
        />
      </FormGroup>
    </div>
  );
}
