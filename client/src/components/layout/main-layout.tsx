import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({
    children,
 }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};