import Image from "next/image";
import Link from "next/link";

export default function Repository({
  isStarredOn = false,
}: {
  isStarredOn: boolean;
}) {
  return (
    <article>
      <div>
        <h3 className={"text-lg font-light"}>
          Text /{" "}
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-900 font-semibold"
          >
            Text link
          </Link>
        </h3>
      </div>

      <p className="my-[8px] text-sm text-[#989898] font-regular">
        description repository here
      </p>

      <div className="flex gap-[64px]">
        {isStarredOn ? (
          <p
            title="Linguagem de programação: C++"
            className="text-sm font-regular"
          >
            C++
          </p>
        ) : (
          <p
            title="quantidade de estrelas: 123"
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
            123
          </p>
        )}

        <p
          title="Quantidade de forks: 526"
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
          526
        </p>
      </div>
    </article>
  );
}
