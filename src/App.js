import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminRegistration } from "./pages/admin-registration/AdminRegistration";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import { LogIn } from "./pages/logIn/LogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          {/* public routes */}
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
