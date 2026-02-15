import { TTabOptions } from "@/screens/IndexScreen/RepositoriesContent";
import { IRepositoryFiltersProps, IRepositoryProps } from "@/types/IRepository";

export const filteredRepositories = (
  search: string,
  repositories: IRepositoryProps[] | undefined,
  tabActive: TTabOptions,
  filters: IRepositoryFiltersProps,
) => {
  const searchLowerCase = search.toLowerCase();

  let filtered = repositories;

  if (search) {
    filtered = repositories?.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchLowerCase) ||
        repo.description.toLowerCase().includes(searchLowerCase) ||
        repo.language.toLowerCase().includes(searchLowerCase) ||
        repo.owner.login.toLowerCase().includes(searchLowerCase),
    );
  }

  if (tabActive === "starred") {
    filtered = filtered?.filter((repo) => repo.stargazers_count > 0);
  }

  if (!filters.types?.includes("all")) {
    if (filters.types?.includes("sources")) {
      filtered = filtered?.filter((repo) => repo.sources);
    }

    if (filters.types?.includes("forks")) {
      filtered = filtered?.filter((repo) => repo.fork);
    }

    if (filters.types?.includes("archived")) {
      filtered = filtered?.filter((repo) => repo.archived);
    }

    if (filters.types?.includes("mirrors")) {
      filtered = filtered?.filter((repo) => repo.mirror_url !== null);
    }
  }

  if (filters.languages.length > 0) {
    filtered = filtered?.filter((repo) =>
      filters.languages.includes(repo.language),
    );
  }

  return filtered;
};
