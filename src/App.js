import './assets/tailwind.css';

function App ()
{
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <form className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="space-y-6">
          <div className="border-b border-gray-300 dark:border-gray-700 pb-6">
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
                placeholder="janesmith"
                autoComplete="username"
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white 
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Grid Layout for Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white 
              focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tell us something about yourself"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
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