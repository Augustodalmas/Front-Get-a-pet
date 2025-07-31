import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./components/pages/Home"
import Login from "./components/pages/auth/Login"
import Register from "./components/pages/auth/Register"

//Components
import Navbar from "./components/pages/layouts/Navbar"
import Footer from "./components/pages/layouts/Footer"
import Container from "./components/pages/layouts/Container"

//Context
import { UserProvider } from "./context/UserContext"

//Rotas dessa forma devido a mudança que tivemos no React Route v6
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
