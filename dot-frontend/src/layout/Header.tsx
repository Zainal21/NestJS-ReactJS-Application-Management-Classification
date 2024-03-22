import { Link } from "react-router-dom";
import { clearToken, getToken } from "../utils/token";
import { showSuccessAlert } from "../utils/swal";

export default function Header() {
  const token = getToken();
  const logout = () => {
    clearToken();
    showSuccessAlert("Logout Success", () => {
      window.location.href = "/";
    });
  };

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <a href="/" className="flex space-x-3">
        <span className="text-4xl">🚀</span>
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          DOT WebPortal
        </h1>
        <span className="text-4xl">💻</span>
      </a>
      <div className="container flex items-center justify-end p-6 mx-auto text-gray-600 capitalize ">
        {token != undefined ? (
          <>
            <Link
              className={`border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6"`}
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/"}
              target="_top"
            >
              Dashboard
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6"`}
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/classifications"}
              target="_top"
            >
              Classification
            </Link>
            <a
              onClick={logout}
              className={`border-b-2 cursor-pointer border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6"`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <Link
              className={`border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6"`}
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/login"}
              target="_top"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
