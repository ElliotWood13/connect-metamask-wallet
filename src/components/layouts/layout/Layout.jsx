import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { LayoutWrapper } from "./layout.styles";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
};
