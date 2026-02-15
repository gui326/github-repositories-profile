import { useState } from "react";

import Tabs from "./Tabs";
import Repositories from "./Repositories";
import Filters from "./Filters";

export type TTabOptions = "all" | "starred";

export default function RepositoriesContent() {
  const [tabActive, setTabActive] = useState<TTabOptions>("all");

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col w-full pb-8">
      <Tabs tabActive={tabActive} setTabActive={setTabActive} search={search} />

      <Filters setSearch={setSearch} />

      <Repositories tabActive={tabActive} search={search} />
    </div>
  );
}
