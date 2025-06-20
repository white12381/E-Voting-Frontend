import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import TermsAndConditions from "./pages/terms-and-conditions";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";
import Dashboard from "./pages/dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> 
    </Provider>
  )
}

export default App
