import { Container } from "@mui/material";

import Header from "@/components/Header";
import UserContent from "./UserContent";
import RepositoriesContent from "./RepositoriesContent";

export default function IndexScreen() {
  return (
    <>
      <Header />

      <section className="mt-[32px]">
        <Container className="flex gap-[80px]">
          <UserContent />

          <RepositoriesContent />
        </Container>
      </section>
    </>
  );
}
