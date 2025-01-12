import "./App.css";

function App() {
  return (
    <>
      <div className="w-[90vw] h-fit bg-white border m-auto shadow-md flex flex-col md:flex-row items-center md:items-start justify-start px-3 py-4 mt-12 pb-8 gap-6 select-none">
        <img
          src="/roshan.jpg"
          alt="Roshan Kewat"
          className="w-56 rounded-full shadow-md animate-custom-float"
        />
      
        <div className="py-4 flex flex-col gap-3 items-center md:items-start">
          <span className="font-semibold text-3xl">Roshan Kewat</span>
          <div className="flex gap-2 items-center">
            <img
              src="/location-icon.png"
              alt="Location Icon"
              className="w-5 animate-bounce"
            />
            <span className="font-semibold">KOLKATA, INDIA</span>
          </div>
          <span className="font-semibold text-[#383838] w-56 md:w-96 text-start">
            I am Game Developer, Web Developer and Video Editor. Wha has
            developed many website and games. Also working in a gamed dev team -{" "}
            <strong>ROAS Productions</strong>
          </span>

          <div className="flex flex-col gap-2 w-full h-fit">
            <div className="flex gap-2">
              <button className="bg-black w-full py-2 text-white hover:font-semibold transition-all">Email</button>
              <a
                href="http://"
                className="bg-black w-full py-2 text-white text-center hover:font-semibold transition-all"
                target="_blank"
              >
                Discord
              </a>
            </div>
            <a
              href="http://"
              className="bg-black w-full py-2 text-center text-white hover:font-semibold transition-all"
              target="_blank"
            >
              Game Dev Team
            </a>
          </div>
        </div>
      </div>

      <div className="w-[90vw] h-full bg-transparent flex flex-col md:flex-row gap-6 items-start m-auto mt-8 mb-12">
        <div className="w-full flex flex-col gap-6">
          <div className="bg-white border shadow-md w-full h-14 px-3 items-center flex gap-2">
            <a
              href="https://www.youtube.com/@thedevroshan"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <img
                src="/youtube-icon.png"
                alt="Youtube"
                className="w-12 cursor-pointer animate-custom-float"
              />
              <span className="text-lg font-semibold cursor-pointer">
                Youtube
              </span>
            </a>
          </div>
          <div className="bg-white border shadow-md w-full h-14 px-3 items-center flex gap-2">
            <a
              href="https://www.instagram.com/thedevroshan"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="w-9 cursor-pointer animate-custom-float"
              />
              <span className="text-lg font-semibold cursor-pointer">
                Instagram
              </span>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="bg-white border shadow-md w-full h-14 px-3 items-center flex gap-2">
            <a
              href="https://www.github.com/thedevroshan"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <img
                src="/github-icon.png"
                alt="Github"
                className="w-10 cursor-pointer animate-custom-float"
              />
              <span className="text-lg font-semibold cursor-pointer">
                Github
              </span>
            </a>
          </div>
          <div className="bg-white border shadow-md w-full h-14 px-3 items-center flex gap-2">
            <a href="#" className="flex gap-2 items-center" target="_blank">
              <img
                src="/roshan.jpg"
                alt="Roshan"
                className="w-9 cursor-pointer rounded-lg animate-custom-float"
              />
              <span className="text-lg font-semibold cursor-pointer">
                Portfolio
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
