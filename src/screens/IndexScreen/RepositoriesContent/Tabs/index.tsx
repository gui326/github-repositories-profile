import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { TTabOptions } from "..";
import { IRepositoryProps } from "@/types/IRepository";
import { getRepos } from "@/services/repos.services";
import { REACT_QUERY_KEYS } from "@/constants/react_query_keys";
import { useFiltersRepositoriesStore } from "@/store/useFiltersRepositoriesStore";
import { filteredRepositories } from "@/utils/filtersUtils";

export default function Tabs({
  tabActive,
  setTabActive,
  search,
}: {
  tabActive: TTabOptions;
  setTabActive: (value: TTabOptions) => void;
  search: string;
}) {
  const router = useRouter();

  const { filters } = useFiltersRepositoriesStore();

  const { data: repositories, isFetching } = useQuery<IRepositoryProps[]>({
    queryKey: [REACT_QUERY_KEYS.REPOSITORIES],
    queryFn: () => getRepos(),
    staleTime: 10 * 60 * 300, // 3 minutos
  });

  const OPTIONS_TAB = [
    {
      name: "Repositories",
      value: "all",
      icon_url: "/assets/icons/icone_livro.svg",
      count:
        filteredRepositories(search, repositories, "all", filters)?.length || 0,
    },
    {
      name: "Starred",
      value: "starred",
      icon_url: "/assets/icons/icone_estrela.svg",
      count:
        filteredRepositories(search, repositories, "starred", filters)
          ?.length || 0,
    },
  ];

  const handleTab = (value: TTabOptions) => {
    setTabActive(value);
    router.push(`/?tab=${value}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const tab = router.query.tab as TTabOptions;

    if (tab && OPTIONS_TAB.some((option) => option.value === tab)) {
      setTabActive(tab);
    }
  }, [router.query.tab]);

  return (
    <nav className="flex gap-[48px]">
      {OPTIONS_TAB?.map((option) => (
        <div
          onClick={() => handleTab(option.value as TTabOptions)}
          className={`
              border-b-1 p-2 cursor-pointer flex items-center gap-[8px]
              ${tabActive === option.value ? "opacity-100 border-[#FD8C73]" : "opacity-50 border-transparent"}
              hover:text-blue-500`}
          key={option.value}
        >
          <Image
            quality={100}
            draggable={false}
            src={option.icon_url}
            alt={option.name}
            width={24}
            height={24}
            className="dark:invert"
          />

          <p>{option.name}</p>

          <span className="text-xs font-regular border-1 text-[#989898] border-[#DBDBDB] bg-[#F8F8F8] rounded-full px-[10px] py-[4px]">
            {option.count}
          </span>
        </div>
      ))}
    </nav>
  );
}
