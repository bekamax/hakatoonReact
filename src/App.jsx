import React from "react";
import Navbar from "./widgets/navbar/navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./pages/footer/FooterPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
