const Registration = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            S'inscrire
          </h2>
        </div>
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="shadow-sm -space-y-px">
                <div>
                  <label htmlFor="first-name" className="sr-only">
                    Prénom
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="first-name"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">
                    Nom
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="last-name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                    placeholder="Nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-address-registration"
                    className="sr-only"
                  >
                    Email vinci
                  </label>
                  <input
                    id="email-address-registration"
                    name="email-address"
                    type="email"
                    autoComplete="email-address"
                    pattern="[a-z0-9._%+-]+@(?:student.vinci.be|vinci.be)"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                    placeholder="Email vinci"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-address-registration"
                    className="campus"
                  ></label>
                  <select
                    id="campus"
                    name="campus"
                    autoComplete="campus"
                    className="mt-1 block w-full py-2 px-3 border rounded-none border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled selected>
                      Sélectionnez votre campus
                    </option>
                    <option value="Woluwe">Woluwé</option>
                    <option value="Louvain-la-Neuve">Louvain-la-Neuve</option>
                    <option value="Ixelles">Ixelles</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="password-registration" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password-registration"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-b-md  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:border-green-700 bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;