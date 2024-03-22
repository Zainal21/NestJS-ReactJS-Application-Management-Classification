import Swal from "sweetalert2";
import { useState } from "react";
import { login } from "../services/login.service";
import { saveToken } from "../utils/token";
import { showSuccessAlert } from "../utils/swal";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { email, password };
    login(payload)
      .then((response) => {
        console.log(response.data);
        const token = response.data.data.access_token;
        saveToken(token);
        showSuccessAlert("Login Success", () => {
          window.location.href = "/dashboard";
        });
      })
      .catch((error) => {
        const message = error.response
          ? error.response.data.message
          : "Login failed";
        Swal.fire({
          title: "Error!",
          text: message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className="bg-white shadow-md rounded-lg px-10 py-10 w-xl">
        <h1 className="text-2xl font-bold text-center mb-4 ">
          Welcome Back DOT Portal Classification
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
