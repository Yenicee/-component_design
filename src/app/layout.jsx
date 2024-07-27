import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import Search from "./components/search";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import FadingGridBackground from "./components/grid_themeToggle";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lenguaje Javascript",
  description: "pagina destinada a enseñar de forma facil el lenguaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="cabecera.png" type="image/x-icon" />

      <body className={`${inter.className} bg-gray-50 dark:bg-[#1a1b26] dark:text-white relative min-h-screen`}>
        <FadingGridBackground />
        <div className="relative z-10">
          <nav className="flex justify-between flex-col items-center">

            <div className="flex items-center">
              <Link href="/">
                <Image
                  height={90}
                  width={90}
                  src='/cabecera.png'
                  alt="Logo - Volver al inicio"
                />
              </Link>

              <Search />
              <ul className="flex ml-4">

                <button className="mr-4">
                  <ThemeToggle />
                </button>

                <li className="mr-4">
                  <a href="https://www.linkedin.com/in/yenice-vazquez-perez-8b98811b5/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#0284c7" d="M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5m3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457m-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228" /></svg></a>
                </li>
                <li className="mr-4">
                  <a href="https://github.com/Yenicee"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></a>
                </li>

                <select className="item-language" >
                  <option >Ingles</option>
                  <option >Español</option>
                </select>

              </ul>
            </div>
          </nav>


          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          
        </div>
      </body>
    </html>
  );
}
