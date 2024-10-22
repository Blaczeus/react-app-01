import './assets/tailwind.css';

function App ()
{
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <button id="theme-toggle" className="fixed p-2 text-black transition bg-gray-300 rounded-full shadow-md top-4 right-4 dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
        Dark Mode
      </button> */}
      <form className="w-full max-w-3xl p-10 bg-white shadow-lg dark:bg-gray-800 rounded-2xl">
        <div className="space-y-6">
          <div className="pb-6 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              This information will be displayed publicly, so be mindful of what you share.
            </p>
            <div className="mt-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Grid Layout for Two Columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-900 dark:text-white">
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Nigeria</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-900 dark:text-white">
              About
            </label>
            <textarea
              id="about"
              name="about"
              rows={4}
              className="block w-full mt-1 border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tell us something about yourself"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;