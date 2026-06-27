import { Routes,Route, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

function App() {
  const { checkAuth,authUser,isCheckingAuth } = useAuthStore();

  useEffect(() =>{
    checkAuth()
  },[checkAuth]);
  
  console.log({authUser});

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/chat" element={authUser?<ChatPage/> : <Navigate to={"/login"}/>}/>
        <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to={"/chat"}/>}/>
        <Route path="/signup" element={!authUser?<SignupPage/>:<Navigate to={"/chat"}/>}/>
      </Routes>
    </div>
  )
}

export default App
