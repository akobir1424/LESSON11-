import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dishes from "../pages/Dishes";
import Logo from "../images/Logo.svg";
//icons
import { MdOutlineLocalGroceryStore } from "react-icons/md";
export default function header() {
  return (
    <div className="w-[1248px] mx-auto">
      <header>
        <nav className="flex  items-center">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <ul className="flex items-center gap-[50px] ml-[100px] text-[18px]">
            <li className="active:text-[#6C5FBC] text-[#606060]">
              <Link to="/">Home</Link>
            </li>
            <li className="active:text-[#6C5FBC]  text-[#606060]">
              <Link to="/Dishes">Dishes</Link>
            </li>
          </ul>
          <div className="flex ml-[635px] btn items-center">
            <MdOutlineLocalGroceryStore className="w-[25px] h-[22px] mr-[20px] text-[#606060]" />
            <button className="w-[100px] text-[#606060] h-[62px] mr-[9px]">
              Login
            </button>
            <button className="w-[100px] h-[62px] border text-white bg-[#6C5FBC] rounded-[18px]">
              Sign up
            </button>
          </div>
        </nav>
        <hr className="mt-[25px]" />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dishes" element={<Dishes />} />
      </Routes>
    </div>
  );
}
