import React from "react";
import Links from "./pages/link_page";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-10 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/jsLogo.png"
          alt="Logo"
          width={380}
          height={47}
        />

        <Links />

      </div>

   <footer>
     <p>Creado por Yenice con <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" color="red" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.266 11.908a1.773 1.773 0 0 1-2.527 0L1.49 7.7c-2.84-2.842.87-9.12 5.511-4.478c4.634-4.633 8.344 1.644 5.511 4.478z"/></svg></p>
    <p>© Todos los derechos reservados.</p>
     </footer>
    </>
  )
}