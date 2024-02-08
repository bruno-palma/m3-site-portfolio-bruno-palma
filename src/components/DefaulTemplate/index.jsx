import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaulTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
