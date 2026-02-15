import Header from "@/components/Header";
import UserContent from "./UserContent";
import { Container } from "@mui/material";

export default function IndexScreen() {
  return (
    <>
      <Header />

      <section className="mt-[32px]">
        <Container className="flex">
          <UserContent />
        </Container>
      </section>
    </>
  );
}
