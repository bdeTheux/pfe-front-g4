import { useState } from "react";
import { useRouter } from "next/router";
import AlertVerif from "../Alert/AlertVerif";

const Connection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    const loginUser = {
      email: email,
      password: password,
    };

    const res = await fetch("/api/login/", {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status != 200) {
        res.json().then((el) => {
          document.getElementById("errorConnection").className =
            "lg:mt-24 mt-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
          document.getElementById("errorConnection").innerText = el.description;
        });
      } else {
        res.json().then((data) => {
          localStorage.setItem("token", data.token);
          router.push("/");
        });
        setTimeout(() => {
          router.reload();
        }, 500);
      }
    });
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Se connecter
          </h2>
        </div>
        <form method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address-connection" className="sr-only">
                    Adresse email
                  </label>
                  <input
                    id="email-address-connection"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password-connection" className="sr-only">
                    Mot de passe
                  </label>
                  <input
                    id="password-connection"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-800 focus:ring-green-700 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-800 hover:text-green-700"
                  >
                    Vous avez oublié votre mot de passe ?
                  </a>
                </div>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:border-green-700 bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                  onClick={onLogin}
                >
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Connection;
