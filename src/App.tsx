import "./App.css";

function App() {
  return (
    <>
      <div className="w-[80vw] h-[60vh] bg-white border m-auto shadow-md flex items-start justify-start px-3 py-2 mt-12 gap-6 select-none">
        <img
          src="/roshan.jpg"
          alt="Roshan Kewat"
          className="w-56 rounded-full shadow-md animate-custom-float"
        />

        <div className="py-4 flex flex-col gap-3">
          <span className="font-semibold text-3xl">Roshan Kewat</span>
          <div className="flex gap-2 items-center">
            <img
              src="/location-icon.png"
              alt="Location Icon"
              className="w-5 animate-bounce"
            />
            <span className="font-semibold">KOLKATA, INDIA</span>
          </div>
          <span className="font-semibold text-[#383838] w-96">
            I am Game Developer, Web Developer and Video Editor. Wha has
            developed many website and games. Also working in a gamed dev team -{" "}
            <strong>ROAS Productions</strong>
          </span>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button className="bg-black w-full py-2 text-white">Email</button>
              <a
                href="http://"
                className="bg-black w-full py-2 text-white text-center"
                target="_blank"
              >
                Discord
              </a>
            </div>
            <a
              href="http://"
              className="bg-black w-full py-2 text-center text-white"
              target="_blank"
            >
              Game Dev Team
            </a>
          </div>
        </div>
      </div>

      <div className="w-[80vw] h-full bg-transparent flex flex-col gap-6 items-start m-auto mt-8">
        <div className="w-full flex gap-6">
          <div className="bg-white border shadow-md w-full h-14"></div>
          <div className="bg-white border shadow-md w-full h-14"></div>
        </div>
        <div className="w-full flex gap-6">
          <div className="bg-white border shadow-md w-full h-14"></div>
          <div className="bg-white border shadow-md w-full h-14"></div>
        </div>
      </div>
    </>
  );
}

export default App;
