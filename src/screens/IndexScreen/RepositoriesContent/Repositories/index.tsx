import Repository from "./Repository";
import { TTabOptions } from "..";

export default function Repositories({
  tabActive,
}: {
  tabActive: TTabOptions;
}) {
  return (
    <div className={"mt-[40px] flex flex-col gap-[48px]"}>
      {[...Array(10)].map((_, index) => (
        <Repository
          key={index}
          isStarredOn={tabActive === "starred" ? true : false}
        />
      ))}
    </div>
  );
}
