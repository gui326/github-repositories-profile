import { Container } from "@mui/material";

import Header from "@/components/Header";
import UserContent from "./UserContent";
import RepositoriesContent from "./RepositoriesContent";
import { IUserProfile } from "@/types/IUser";

export default function IndexScreen({ userData }: { userData: IUserProfile }) {
  return (
    <>
      <Header />

      <section className="mt-[32px]">
        <Container className="flex gap-[80px]">
          <UserContent userData={userData} />

          <RepositoriesContent />
        </Container>
      </section>
    </>
  );
}
