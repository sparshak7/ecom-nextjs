import Link from "next/link";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import { Lilita_One } from "next/font/google";
import logo from "../public/logo.png"
import Image from "next/image";
import NavLinks from "./NavLinks";
import FlyOut from "./FlyOut";

const lilitaOne = Lilita_One({subsets: ["latin"], weight: "400"})

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-4 py-3 max-w-5xl mx-auto">
        <Link href="/">
          <div
            className={`${lilitaOne.className} text-2xl sm:text-3xl flex items-center`}
          >
            <span>
              <Image src={logo} width={25} height={25} alt="Logo" />
            </span>
            Zephyr
            <span>
              <Image src={logo} width={25} height={25} alt="Logo" />
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/account">
            <BiUser className="text-xl sm:text-2xl" />
          </Link>
          <Link href="/cart">
            <BiCart className="text-xl sm:text-2xl" />
          </Link>
          <Link href="/search">
            <BiSearch className="text-xl sm:text-2xl" />
          </Link>
          <Link href="/marketplace/upload">
            <BiCart className="text-xl sm:text-2xl" />
          </Link>
        </nav>
      </div>
      <div className="border max-w-5xl mx-auto my-2 border-gray-600" />
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="block md:hidden">
        <FlyOut />
      </div>
    </header>
  );
};
export default Header;
