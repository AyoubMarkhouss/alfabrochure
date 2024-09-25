import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-[#F4F4F4] h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 px-20 gap-7 md:gap-0">
        <div className="flex flex-col justify-center items-center">
          <img src="/giulia.png" alt="logo" className="w-72" />
          <h1 className="semi text-2xl  ">Giulia</h1>
          <button className=" bg-[#8f0c25] w-52 hover:cursor-pointer md:mt-10 flex items-center justify-center">
            <a
              href="/Brochures/Fiche_technique_Giulia_MCA_2023x50.pdf"
              download
              className="semi h-12 text-sm hover:cursor-pointer text-white px-7 flex justify-center items-center"
            >
              TÉLÉCHARGER LA BROCHURE
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/stelvio.png" alt="logo" className="w-72" />
          <h1 className="semi text-2xl  ">Stelvio</h1>
          <button className=" bg-[#8f0c25] w-52 cursor-pointer md:mt-10 flex items-center justify-center">
            <a
              href="/Brochures/Fiche_technique_Stelvio_MCA_2023.pdf"
              download
              className="semi h-12 text-sm text-white px-7 flex justify-center items-center"
            >
              TÉLÉCHARGER LA BROCHURE
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/tonale.png" alt="logo" className="w-72" />
          <h1 className="semi text-2xl  ">Tonale</h1>
          <button className=" bg-[#8f0c25] w-52 cursor-pointer md:mt-10 flex items-center justify-center">
            <a
              href="/Brochures/Fiche_technique_Tonale_Diesel - 02 2023 x90.pdf"
              download
              className="semi h-12 text-sm text-white px-7 flex justify-center items-center"
            >
              TÉLÉCHARGER LA BROCHURE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
