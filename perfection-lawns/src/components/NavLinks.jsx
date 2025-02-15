import { Link } from "react-router-dom";

export const NavLinks = (props) => {
  return (
    <div className="hidden lg:space-x-6 lg:inline">
      <Link to={"/"} href="#" className="hover:text-green-600">
        Home
      </Link>
      <Link to={"/about"} href="#" className="hover:text-green-600">
        About
      </Link>

      {/* drop-down menu */}

      <div className="relative inline-block text-left">
        <Link
          onMouseOver={props.toggleDropdown}
          to={"/services"}
          href="#"
          className="hover:text-green-600"
        >
          Services
        </Link>
        {props.isOpen && (
          <div
            onMouseLeave={props.leaveDropdown}
            className="origin-top-right absolute left-0 mt-2 w-40 
              rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5
              focus:outline-none"
            role="menu"
          >
            <div className="py-1" role="none">
              <Link
                to={"/lawn-service"}
                href="#"
                className="block px-4 py-2 text-sm text-white 
                      hover:bg-green-800"
                role="menuitem"
              >
                Lawn Mowing
              </Link>
              <Link
                to={"/landscape"}
                href="#"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Landscaping
              </Link>
              <Link
                to={"/leafcleanup"}
                href="#"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Leaf Removal
              </Link>
              <Link
                to={"/mulching"}
                href="#"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Mulching
              </Link>
              <Link
                to={"/planting"}
                href="#"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Planting
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link to={"/contact"} href="#" className="hover:text-green-600">
        Contact
      </Link>
    </div>
  );
};
