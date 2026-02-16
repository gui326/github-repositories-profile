import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";

import Repository from "./Repository";
import { TTabOptions } from "..";
import { IRepositoryProps } from "@/types/IRepository";
import { getRepos } from "@/services/repos.services";
import { useFiltersRepositoriesStore } from "@/store/useFiltersRepositoriesStore";
import { REACT_QUERY_KEYS } from "@/constants/react_query_keys";
import { filteredRepositories } from "@/utils/filtersUtils";

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

  return (
    <div className={"mt-[40px] flex flex-col gap-[56px]"}>
      {isFetching ? (
        <>
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <Skeleton
                variant="text"
                width={240}
                height={28}
                className="dark:!bg-gray-700"
              />

              <Skeleton
                variant="text"
                width={300}
                height={20}
                className="dark:!bg-gray-700"
                sx={{
                  my: "8px",
                  maxWidth: "100%",
                }}
              />

              <div className="flex items-center gap-[64px]">
                <Skeleton
                  variant="rounded"
                  width={40}
                  height={20}
                  className="dark:!bg-gray-700"
                />

                <Skeleton
                  variant="rounded"
                  width={40}
                  height={20}
                  className="dark:!bg-gray-700"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {filteredRepositories(search, repositories, tabActive, filters)?.map(
            (repository) => (
              <Repository
                key={repository?.id}
                repository={repository}
                isStarredOn={tabActive === "starred" ? true : false}
              />
            ),
          )}
        </>
      )}

      {filteredRepositories(search, repositories, tabActive, filters)
        ?.length === 0 &&
        !isFetching && <p>Nenhum repositório encontrado.</p>}
    </div>
  );
}
