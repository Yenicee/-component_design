import React from "react";
import Links from "./components/navLink";


export default function Home() {

  return (
    <>
      <div className="flex flex-col items-center p-10 before:absolute before:h-[500px] 
       before:rounded-full before:bg-gradient-radial
        before:from-white before:to-transparent before:blur-2xl
         before:content-[''] after:absolute after:-z-20 after:h-[180px] 
         after:w-full sm:after:w-[240px] after:translate-x-1/3 
         after:bg-gradient-conic after:from-sky-200
          after:via-blue-200 after:blur-2xl after:content-[''] 
          before:dark:bg-gradient-to-br before:dark:from-transparent
           before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900
            after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Links />
      </div>

      <footer className="flex flex-col items-center">
        <p className="flex items-center">
          Creado por Yenice con
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" color="red" viewBox="0 0 14 14" class="ml-1">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.266 11.908a1.773 1.773 0 0 1-2.527 0L1.49 7.7c-2.84-2.842.87-9.12 5.511-4.478c4.634-4.633 8.344 1.644 5.511 4.478z" />
          </svg>
        </p>
        <p>© Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

