import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp, Login } from "@pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
