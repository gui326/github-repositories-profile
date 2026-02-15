import { useQuery } from "@tanstack/react-query";

import Repository from "./Repository";
import { TTabOptions } from "..";
import { IRepositoryProps } from "@/types/IRepository";
import { getRepos } from "@/services/repos.services";
import { useFiltersRepositoriesStore } from "@/store/useFiltersRepositoriesStore";
import { REACT_QUERY_KEYS } from "@/constants/react_query_keys";

export default function Repositories({
  search,
  tabActive,
}: {
  search: string;
  tabActive: TTabOptions;
}) {
  const { filters } = useFiltersRepositoriesStore();

  const { data: repositories, isFetching } = useQuery<IRepositoryProps[]>({
    queryKey: [REACT_QUERY_KEYS.REPOSITORIES],
    queryFn: () => getRepos(),
    staleTime: 10 * 60 * 300, // 3 minutos
  });

  const filteredRepositories = () => {
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

  return (
    <div className={"mt-[40px] flex flex-col gap-[56px]"}>
      {isFetching ? (
        <p>Carregando repositórios...</p>
      ) : (
        <>
          {filteredRepositories()?.map((repository) => (
            <Repository
              key={repository?.id}
              repository={repository}
              isStarredOn={tabActive === "starred" ? true : false}
            />
          ))}
        </>
      )}

      {filteredRepositories()?.length === 0 && !isFetching && (
        <p>Nenhum repositório encontrado.</p>
      )}
    </div>
  );
}
