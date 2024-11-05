import Cx from "../assets/cx-logo.svg";

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 left-0 w-full transition-all duration-300 bg-slate-600">
      <div className="container mx-auto flex justify-start pl-14 items-center font-[inter]">
        <ul className="flex space-x-4">
          <li >
            <img className="w-full h-8"src={Cx} />
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Struktural</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Recruitment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
