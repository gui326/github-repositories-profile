import { useState } from "react";

import Tabs from "./Tabs";
import Repositories from "./Repositories";

export type TTabOptions = "all" | "starred";

export default function RepositoriesContent() {
  const [tabActive, setTabActive] = useState<TTabOptions>("all");

  return (
    <div>
      <Tabs tabActive={tabActive} setTabActive={setTabActive} />

      <Repositories tabActive={tabActive} />
    </div>
  );
}
