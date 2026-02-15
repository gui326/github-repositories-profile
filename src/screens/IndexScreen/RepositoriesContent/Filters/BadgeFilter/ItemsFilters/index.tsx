import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { IRepositoryFiltersProps } from "@/types/IRepository";

export const fetchData = async (filterKey: keyof IRepositoryFiltersProps) => {
  const { data } = await axios.get("/api/" + filterKey);

  return data;
};

export default function ItemsFilters({
  optionsActive,
  filterKey,
  handleSelect,
  isMultiple = true,
}: {
  optionsActive: string[];
  filterKey: keyof IRepositoryFiltersProps;
  handleSelect: (
    filterKey: keyof IRepositoryFiltersProps,
    option: string,
  ) => void;
  isMultiple?: boolean;
}) {
  const { data: options, isFetching } = useQuery<
    { label: string; value: string }[]
  >({
    queryKey: [filterKey],
    queryFn: () => fetchData(filterKey),
    staleTime: 10 * 60 * 300, // 3 minutos
  });

  return (
    <div>
      {isFetching ? (
        <p className="py-2 text-gray-500 font-light text-sm">Carregando...</p>
      ) : (
        <FormGroup>
          {options?.map((option) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionsActive.includes(option?.value)}
                  onChange={() => handleSelect(filterKey, option?.value)}
                  size="small"
                />
              }
              label={option?.label}
            />
          ))}
        </FormGroup>
      )}

      {!isFetching && options?.length === 0 && (
        <p className="py-2 text-gray-500 font-light text-sm">Nenhuma opção</p>
      )}
    </div>
  );
}
