const NavLink = ({ children, href, target }) => (
  <a
    href={href}
    target={target}
    rel={target ? "noopener noreferrer" : undefined}
    className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
  >
    {children}
  </a>
);

export default NavLink;
