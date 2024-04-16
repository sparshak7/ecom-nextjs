import Link from "next/link";

type HeaderProps = {
  font?: string;
};

const Header = ({ font }: HeaderProps) => {
  return (
    <header className="bg-navCol w-full border-blue-300 shadow-md">
      <div className="flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
        <Link href="/">
          <h1>Proj-1</h1>
        </Link>
        <nav className="flex items-center gap-8">
          <h2>L1</h2>
          <h2>L2</h2>
          <h2>L3</h2>
        </nav>
      </div>
    </header>
  );
};
export default Header;
