export default ({
  formCallback,
}: {
  formCallback: (query: string) => void;
}) => {
  const submitFunction = (event) => {
    event.preventDefault();

    const queryElem: HTMLInputElement = document.getElementById(
      "query-inp"
    ) as HTMLInputElement;

    formCallback(queryElem.value);
  };

  return (
    <nav className="bg-white border-b rounded-b-2xl py-1">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <a href="/">
            <p className="text-3xl font-bold text-primary text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] tracking-widest">
              FASTIMAGE
            </p>
          </a>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form
              className="flex items-center space-x-2 border rounded-md p-2"
              onSubmit={submitFunction}
            >
              <svg
                onClick={submitFunction}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="query-inp"
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
