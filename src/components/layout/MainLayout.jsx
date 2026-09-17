import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header.jsx";
import Footer from "../common/Footer/Footer.jsx";
import MobileBottomNav from "../common/MobileBottomNav/MobileBottomNav.jsx";
import CartDrawer from "../cart/CartDrawer/CartDrawer.jsx";
import Container from "./Container.jsx";

export default function MainLayout() {
  return (
    <div id="blogpedia_wrapper" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>
      <Footer />
      <MobileBottomNav />
      <CartDrawer />
    </div>
  );
}
