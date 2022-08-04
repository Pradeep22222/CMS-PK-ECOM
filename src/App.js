import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminRegistration } from "./pages/admin-registration/AdminRegistration";
import { LogIn } from "./pages/logIn/LogIn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn></LogIn>}></Route>
          <Route
            path="/register"
            element={<AdminRegistration></AdminRegistration>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
