import { useState } from "react";

import Tabs from "./Tabs";
import Repositories from "./Repositories";
import Filters from "./Filters";

export type TTabOptions = "all" | "starred";

export default function RepositoriesContent() {
  const [tabActive, setTabActive] = useState<TTabOptions>("all");

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col w-full">
      <Tabs tabActive={tabActive} setTabActive={setTabActive} />

      <Filters search={search} setSearch={setSearch} />

      <Repositories tabActive={tabActive} />
    </div>
  );
}
