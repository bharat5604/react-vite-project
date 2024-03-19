import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const Layout = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
