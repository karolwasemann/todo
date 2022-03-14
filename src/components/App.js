import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NoMatch from "../pages/NoMatch";
import Header from "./Header";
import TodoContainer from "./TodoContainer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Startseite</h1>} />
        <Route path="/todo-app" element={<TodoContainer />} />

        {/* Weiterleitung von /todoapp nach todo-app */}
        <Route path="/todoapp" element={<Navigate to="/todo-app" />} />

        {/* evtl Todo NAvigateTo für todoapp */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
export default App;
