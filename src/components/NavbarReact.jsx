import { useState } from "react";
import "animate.css";

const NavbarReact = () => {
  const [navBurguer, setNavBurguer] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleNavbar = () => {
    setClosing(true); // Iniciar la animación de cierre
    setTimeout(() => {
      setNavBurguer(false); // Después de la animación, ocultar el navbar
      setClosing(false); // Restablecer el estado de cierre
    }, 500); // Tiempo que dura la animación en milisegundos
  };

  return (
    <>
      <div className="flex items-center justify-between w-4/5 mx-auto">
        <a href="/">
          <img src="/favicon.svg" alt="Logo" className="w-24" />
        </a>

        <div className="hidden lg:flex basis-4/5 justify-between text-xl">
          <a href="/">
            <span>Inicio</span>
          </a>

          <a href="/museos">
            <span>Museos</span>
          </a>

          <a href="/gestioncolecciones">
            <span>Gestión de Colecciones</span>
          </a>

          <a href="/conocemas">
            <span>Conoce más</span>
          </a>
        </div>

        <img
          src="/menu.svg"
          className="lg:hidden flex w-7 cursor-pointer"
          onClick={() => setNavBurguer(!navBurguer)}
        />
      </div>

      {navBurguer && (
        <nav
          className={`absolute inset-0 h-screen w-full bg-[#FFFAF4] text-[#553000] animate__animated ${
            closing ? "animate__fadeOutUp" : "animate__fadeInDown"
          }`}
        >
          <div className="bg-[#FFA836] py-6 font-bold rounded-b-[35px] w-full z-10 animate__animated animate__fadeInDown shadow-md shadow-black/50">
            <div className="flex justify-between w-4/5 mx-auto">
              <a href="/">
                <img src="/favicon.svg" alt="Logo" className="w-24" />
              </a>

              <img
                src="/closeMenu.svg"
                alt="Logo"
                className="cursor-pointer"
                onClick={toggleNavbar}
              />
            </div>
          </div>

          <div className="flex flex-col text-xl w-4/5 mx-auto">
            <h2 className="text-3xl border-b border-black py-5">Menú</h2>

            <div className="flex flex-col gap-5 mt-7">
              <a href="/museos">
                <span>Museos</span>
              </a>

              <a href="/gestioncolecciones">
                <span>Gestión de Colecciones</span>
              </a>

              <a href="/conocemas">
                <span>Conoce más</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarReact;
