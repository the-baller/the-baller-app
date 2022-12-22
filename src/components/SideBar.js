import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import cash from '../img/cash.svg';

const SideBar = () => {
  return (
    <div
      className="w-72 shadow-lg bg-white fixed top-0 left-0"
      style={{ height: '100vh' }}
    >
      <div className="flex flex-col justify-between items-center p-8 h-full">
        <div className="flex flex-col gap-16 w-full">
          <Link to="/">
            <div className="text-indigo-500 font-bold text-2xl flex gap-4 self-center">
              baller app
              <img
                src={cash}
                alt=""
              />
            </div>
          </Link>
          <div className="flex flex-col gap-4 text-indigo-700">
            {ROUTES.map(route => (
              <Link
                key={route.pathname}
                to={route.pathname}
              >
                <div
                  className={`${
                    window.location.pathname === route.pathname
                      ? 'bg-indigo-500 text-white font-bold'
                      : ''
                  } rounded-md px-4 py-3`}
                >
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <small className="text-indigo-500">&copy; 2022, baller inc.</small>
      </div>
    </div>
  );
};

export default SideBar;
