import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useAlertContext } from "./context/alertContext";
import Alert from "./UI/Alert";
import UserDetail from "./components/UserDetail";

function App() {
  const { alert } = useAlertContext();
  return (
    <>
      <Header />
      <main className="github__container">
        {alert !== null && <Alert />}
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users/:login" exact element={<UserDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
