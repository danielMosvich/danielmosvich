import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Loading from "./components/loading";
import Projects from "./components/projects";
// import { useTranslation } from "react-i18next";
function App() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  // const [t, i18n] = useTranslation("global");
  useEffect(() => {
    function closeHandleShow() {
      setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, 2000);
    }
    document.addEventListener("loadeddata", closeHandleShow());
  }, []);
  return (
    <div className="">
      {loading ? (
        <Loading show={show} />
      ) : (
        <div className="">
          <Header />
          <div className="mx-3 sm:mx-7">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
