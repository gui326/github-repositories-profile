import { create } from "zustand";

import { IRepositoryFiltersProps } from "@/types/IRepository";

type FiltersState = {
  filters: IRepositoryFiltersProps;
  setFilters: (filters: Partial<IRepositoryFiltersProps>) => void;
  resetFilters: () => void;
};

export const useFiltersRepositoriesStore = create<FiltersState>((set) => ({
  filters: {
    types: [],
    languages: [],
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () =>
    set({
      filters: { types: [], languages: [] },
    }),
}));
