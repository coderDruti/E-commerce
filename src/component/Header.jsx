import Logo from "../assets/images/logo.jpg";
import Sidebar_Nav from "../assets/images/Sidebar_nav.svg";
import SidebarNav from "./SidebarNav";

export default function Header() {
  return (
    <header id="out" className="header">
      <a className="img">
        <img className="Sidebar" src={Sidebar_Nav} alt="Sidebar_nav" />
        <SidebarNav className="c" />
      </a>
      <h1>Online Shop</h1>
      <a href="/">
        <img className="logo" src={Logo} alt="Company logo" />
      </a>
      <section className="navigation">
        <ul className="nav">
          <li>
            <a href="./Header.jsx">Home</a>
          </li>
          <li>
            <a href="./Cart.jsx">Cart</a>
          </li>
          <li>
            <a href="./Wishlist.jsx">Wishlist</a>
          </li>
          <li>
            <a href="./Account.jsx">Account</a>
          </li>
        </ul>
      </section>
    </header>
  );
}
