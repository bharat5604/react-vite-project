import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b flex justify-center px-6 py-3">
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-64 object-contain" />
      </Link>
    </header>
  );
};

export default Header;
