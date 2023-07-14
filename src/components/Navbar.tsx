export default function Navbar() {
  return (
    <div className="navbar bg-[#0b0b0b] py-14 text-[#999999] opacity-90 md:px-32">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case">UI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
