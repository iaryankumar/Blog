import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ViewPage from "./pages/ViewPage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth-reg" element={<Register/>} />
      <Route path="/view" element={<ViewPage/>} />
      <Route path="/auth-login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
