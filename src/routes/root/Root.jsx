import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Root() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
