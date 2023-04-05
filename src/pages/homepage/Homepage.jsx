import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
      </div>
      <Footer/>
    </>
  );
}
