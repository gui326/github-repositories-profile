import Link from "next/link";
import Image from "next/image";

import { IRepositoryProps } from "@/types/IRepository";

export default function Repository({
  repository,
  isStarredOn = false,
}: {
  repository: IRepositoryProps;
  isStarredOn: boolean;
}) {
  return (
    <article>
      <div>
        <h3 className={"text-lg font-light"}>
          {repository.owner?.login} /{" "}
          <Link
            href={repository.html_url}
            className="text-blue-500 hover:text-blue-900 font-semibold"
            target="_blank"
          >
            {repository.name}
          </Link>
        </h3>
      </div>

      <p className="my-[8px] text-sm text-[#989898] font-regular">
        {repository.description}
      </p>

      <div className="flex gap-[64px]">
        {isStarredOn ? (
          <p
            title={`Linguagem de programação: ${repository?.language}`}
            className="text-sm font-regular"
          >
            {repository?.language}
          </p>
        ) : (
          <p
            title={`Quantidade de estrelas: ${repository?.stargazers_count}`}
            className="flex items-center gap-[8px] text-sm/2 font-regular"
          >
            <Image
              quality={100}
              draggable={false}
              src="/assets/icons/icone_estrela_cheia.svg"
              alt="Star icon"
              className="dark:invert"
              width={20}
              height={20}
            />
            {repository?.stargazers_count}
          </p>
        )}

        <p
          title={`Quantidade de forks: ${repository?.forks_count}`}
          className="flex items-center gap-[8px] text-sm/2 font-regular"
        >
          <Image
            quality={100}
            draggable={false}
            src="/assets/icons/icone_fork.svg"
            alt="Fork icon"
            className="dark:invert"
            width={20}
            height={20}
          />
          {repository?.forks_count}
        </p>
      </div>
    </article>
  );
}
