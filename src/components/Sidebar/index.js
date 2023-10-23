import {
  FaHome,
  FaRegFileAlt,
  FaBoxes,
  FaCalendarAlt,
  FaCashRegister,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <aside
      className={`bg-red-800 text-white w-20 min-h-screen transition-transform`}
    >
      <div className="p-8"></div>
      <nav>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <div className="bg-slate-100 w-full rounded-md text-slate-950 p-2">
              <FaHome size={30} />
            </div>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <div className="bg-slate-100 w-full rounded-md text-slate-950 p-2">
              <FaRegFileAlt size={30} />
            </div>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <div className="bg-slate-100 w-full rounded-md text-slate-950 p-2">
              <FaBoxes size={30} />
            </div>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <div className="bg-slate-100 w-full rounded-md text-slate-950 p-2">
              <FaCalendarAlt size={30} />
            </div>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <div className="bg-slate-100 w-full rounded-md text-slate-950 p-2">
              <FaCashRegister size={30} />
            </div>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0">
        <p className="text-xs text-center w-20 py-1">@ 2023 PT Cudo Communication</p>
      </div>
    </aside>
  );
};
