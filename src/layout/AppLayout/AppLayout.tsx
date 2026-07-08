import Footer from "../Footer";
import Main from "../Main";
import Navbar from "../Navbar";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
