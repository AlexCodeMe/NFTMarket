import "../styles/globals.css";

import Navbar  from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
