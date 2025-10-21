import { Link } from "react-router-dom";

const NavLinkItem = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-1 py-0.5 mx-auto text-gray-500 font-normal transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-pink-400 cursor-pointer hover:shadow-lg"
    >
      {children}
    </Link>
  );
};

export default NavLinkItem;
