import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lenguaje Javascript",
  description: "pagina destinada a enseñar de forma facil el lenguaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="cabecera.png" type="image/x-icon" />

      <body className={inter.className}>
        <nav className="flex justify-between flex-col items-center">

          <div className="flex items-center">

            <Image
            
              height={90}
              width={90}
              src='/cabecera.png'
              alt="cabecera del header"
            />

            <input
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
            <ul className="flex ml-4">
              <button
                className="mr-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#eab308" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round" stroke-width="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0" /></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="1.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g><mask id="IconifyId18f1b2093e6676db92"><circle cx="12" cy="12" r="12" fill="#fff" /><circle cx="12" cy="12" r="8"><animate fill="freeze" attributeName="r" dur="0.4s" values="8;4" /></circle><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" /></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" /></circle></mask><circle cx="12" cy="12" r="10" fill="#eab308" mask="url(#IconifyId18f1b2093e6676db92)"><animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" /></circle></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="#666666" fill-opacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="IconifyId18f1b2093e6676db97" fill="freeze" attributeName="fill-opacity" begin="0.7s;IconifyId18f1b2093e6676db97.begin+6s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+2.2s" dur="0.4s" values="1;0" /></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+3s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+5.2s" dur="0.4s" values="1;0" /></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+0.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+2.8s" dur="0.4s" values="1;0" /></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+3.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+5.6s" dur="0.4s" values="1;0" /></path></g><g fill-opacity="0" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#666666" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" /><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1" /></path></g></svg>
              </button>
              <li className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0284c7" d="M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5m3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457m-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228" /></svg></li>
              <li className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#333333" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg></li>
              <select >
                <option>Español</option>
                <option>Ingles</option>
              </select>
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
