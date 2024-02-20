

function Footer(props) {
  return (
      <div>
        <footer className="relative py-10 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
          <div className="relative z-[1] container m-auto px-6 md:px-12">
            <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
              <div className=" items-center justify-between">
                <div className="w-10/12 m-auto  mt-160 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                  <span className="block text-gray-300">Izzatbek Ulkanov React JS</span>

                  <span className="block text-gray-300">Namangan state university &copy; 2023</span>

                  <span className="flex justify-between text-white">
                        <a href="#" className="font-semibold">Telegram</a>
                        <a href="#" className="font-semibold">Github</a>
                    </span>

                  <span className="block text-gray-300">Need help? <a href="#" className="font-semibold text-white"> Contact Us</a></span>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
            <div aria-hidden="true"
                 className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
          </div>
          <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
        </footer>
      </div>
  );
}

export default Footer;
