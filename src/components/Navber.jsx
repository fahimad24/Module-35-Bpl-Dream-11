import logo from "../assets/logo.png";
import dollar from "../assets/dollar.png";

const Navber = ({ claimFreeCoins }) => {
  return (
    <nav className="pt-10 pb-5">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex gap-8 justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Fixture</a>
          </li>
          <li>
            <a href="/contact">Teams</a>
          </li>
          <li>
            <a href="/contact">Schedules</a>
          </li>
          <li>
            <button className="px-3 py-1.5 rounded-lg border flex items-center gap-2">
              {claimFreeCoins} coin <img src={dollar} alt="Dollar" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navber;
