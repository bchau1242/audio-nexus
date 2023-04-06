import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Cart } from ".";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <span className="title-one">Audio</span>
          <span className="title-two">Nexus</span>
        </Link>
      </p>
      <div>
        <button
          type="button"
          className="theme-btn"
          onClick={() => setActiveTheme(inactiveTheme)}
        >
          {activeTheme === "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
        </button>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
