import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
