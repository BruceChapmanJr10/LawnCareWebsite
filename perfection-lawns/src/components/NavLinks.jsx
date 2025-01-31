export const NavLinks = (props) => {
  return (
    <div className="hidden lg:space-x-6 lg:inline">
      <a href="/" className="hover:text-green-600">
        Home
      </a>
      <a href="/about" className="hover:text-green-600">
        About
      </a>

      {/* drop-down menu */}
      <div
        onMouseEnter={props.toggleDropdown}
        className="relative inline-block text-left"
      >
        <a href="/services" className="hover:text-green-600">
          Services
        </a>
        {props.isOpen && (
          <div
            onMouseLeave={props.leaveDropDown}
            className="origin-top-right absolute left-0 mt-2 w-40 
              rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5
              focus:outline-none"
            role="menu"
          >
            <div className="py-1" role="none">
              <a
                href="/lawn-service"
                className="block px-4 py-2 text-sm text-white 
                      hover:bg-green-800"
                role="menuitem"
              >
                Lawn Mowing
              </a>
              <a
                href="/landscape"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Landscaping
              </a>
              <a
                href="/leafcleanup"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Leaf Removal
              </a>
              <a
                href="/mulching"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Mulching
              </a>
              <a
                href="/planting"
                className="block px-4 py-2 text-sm text-white
                      hover:bg-green-800"
                role="menuitem"
              >
                Planting
              </a>
            </div>
          </div>
        )}
      </div>
      <a href="/contact" className="hover:text-green-600">
        Contact
      </a>
      <a href="#blog" className="hover:text-green-600">
        Blog
      </a>
    </div>
  );
};
