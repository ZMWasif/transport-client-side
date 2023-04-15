import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Features from "./Pages/Features/Features";
import SERVICES from "./Pages/SERVICES/SERVICES";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RequiredAuth from "./Pages/Home/RequiredAuth/RequiredAuth";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Proceed from "./Pages/Home/Proceed/Proceed";
import ManageServices from "./Pages/ManageServices/ManageServices";
import AddService from "./Pages/Home/AddService/AddService";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/services" element={<SERVICES></SERVICES>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route
          path="/services/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/proceed/:serviceId"
          element={
            <RequiredAuth>
              <Proceed></Proceed>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequiredAuth>
              <AddService></AddService>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <ManageServices></ManageServices>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
