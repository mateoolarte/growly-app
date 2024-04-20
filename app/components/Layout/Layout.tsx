import { Header } from "@/ui/Header";
import { Footer } from "@/ui/Footer";

export function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
