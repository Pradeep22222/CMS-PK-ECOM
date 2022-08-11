import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminRegistration } from "./pages/admin-registration/AdminRegistration";
import EmailVerification from "./pages/admin-registration/EmailVerification";
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
          <Route
            path="/admin/verify-email"
            element={<EmailVerification></EmailVerification>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
