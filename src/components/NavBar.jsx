import { Link, useLocation } from "react-router-dom";
import one_pice from "../../src/assets/onepiece.png";
import { List, House, StackSimple, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../context/shop-context";

function NavBar() {
  const [navActive, setNavAcitve] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const { cartItems, calcCartAmount } = useContext(ShopContext);
  const cartItemsAmount = calcCartAmount();

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navActive && !navbarRef.current.contains(event.target)) {
        setNavAcitve(false);
      }
    }

    if (navActive) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [navActive]);

  function toggleNavbar() {
    setNavAcitve((prev) => !prev);
  }

  function isLinkActive(path) {
    return location.pathname === path;
  }

  return (
    <div ref={navbarRef}>
      <nav className="bg-yellow-300 relative w-full relative justify-between px-2 h-12 flex items-center">
        <div className="w-24 h-[35px] flex items-center overflow-hidden">
          <Link to="/">
            <img className="h-14 object-cover" src={one_pice} alt="" />
          </Link>
        </div>
        <Link to="/cart">
          <div className="absolute top-[9px] right-16">
            <ShoppingCart size={29} />
            <p className="absolute top-[-7px] text-sm right-[-14px] bg-white rounded-full py-[1px] px-[7px]">
              {cartItemsAmount}
            </p>
          </div>
        </Link>
        <div>
          <List
            onClick={() => toggleNavbar()}
            size={32}
            className={`${
              navActive ? "fixed" : ""
            } hover:cursor-pointer mr-1 top-2 right-2 z-50`}
          />
        </div>
        <div
          className={`flex z-40 flex-col pt-28 duration-500 text-black h-screen w-72 fixed top-0 right-0 bg-yellow-300 text-2xl gap-3 ${
            navActive ? "" : "translate-x-[288px] scale-x-0"
          }`}
        >
          <Link
            className={`${
              isLinkActive("/") ? "bg-yellow-400" : ""
            } flex hover:bg-yellow-400 p-1  w-70 rounded-lg mx-4 justify-end items-center gap-2`}
            to="/"
          >
            <div className="flex items-center gap-x-3 pr-3">
              Home
              <House size={33} />
            </div>
          </Link>
          <Link
            className={`${
              isLinkActive("/cardsPage") ? "bg-yellow-400" : ""
            } flex hover:bg-yellow-400 p-1 w-70 rounded-lg mx-4 justify-end items-center gap-2`}
            to="/cardsPage"
          >
            <div className="flex items-center gap-x-3 pr-3">
              Cards
              <StackSimple size={33} />
            </div>
          </Link>
          <Link
            className={`${
              isLinkActive("/cart") ? "bg-yellow-400" : ""
            } flex hover:bg-yellow-400 p-1 w-70 rounded-lg mx-4 justify-end items-center gap-2`}
            to="/cart"
          >
            <div className="flex items-center gap-x-3 pr-3">
              Cart
              <ShoppingCart size={33} />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
