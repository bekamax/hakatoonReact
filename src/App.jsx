import React from "react";

// import Navbar from "./widgets/navbar/navbar";
// import MainRoutes from "./routes/MainRoutes";
// import Footer from "./widgets/footer/Footer";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>

      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}

      <Layout/>

    </div>
  );
};

export default App;
