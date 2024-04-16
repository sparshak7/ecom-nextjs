import { navLinks } from "@/utils/navLinks";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <nav className="flex justify-between gap-2 items-center w-full">
        {navLinks.map((item, id) => (
          <Link href={`${item.url}`} key={id} className="relative h-fit w-fit group">
            {item.name}
            <span
              className="absolute -bottom-2 -right-2 -left-2 h-1 origin-left bg-indigo-500 transition-transform duration-300 ease-out rounded-full transform scale-x-0 group-hover:scale-x-100"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default NavLinks