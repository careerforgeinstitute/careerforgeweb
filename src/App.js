import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Payment from "./Components/Payment";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DemoForm from "./Components/DemoForm";
import ScrollToTop from "./Components/ScrollToTop";
import CourseDetailsBA from "./Components/CourseDetailsBA";
import CourseDetailsAgile from "./Components/CourseDetailsAgile";

function App() {
  return (
    <>
      {/* <Navbar title="FutureThink"/> */}
      <Router>
        <div>
          <Navbar title="CareerForge Institute" />
          <DemoForm />
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/courses" Component={Courses} />
            <Route path="/payment" Component={Payment} />
            <Route path="/contact" Component={Contact} />
            <Route path="/course-details-ba" Component={CourseDetailsBA} />
            <Route
              path="/course-details-agile"
              Component={CourseDetailsAgile}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
