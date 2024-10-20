"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import FadingGridBackground from "./components/grid_themeToggle";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import Search from "./components/search";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (event) => {
    const locale = event.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <html lang={router.locale}>
      <link rel="icon" href="logo-remove.png" type="image/x-icon" />
      <body className={`${inter.className} bg-gray-50 dark:bg-[#1a1b26] dark:text-white relative min-h-screen`}>
        <FadingGridBackground />
        <div className="relative z-10">
          <nav className="flex justify-between flex-col items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  height={90}
                  width={90}
                  src='/logo-remove.png'
                  alt="Logo - Volver al inicio"
                />
              </Link>
              <Search />
              <ul className="flex ml-4">
                <button className="mr-4">
                  <ThemeToggle />
                </button>
                <li className="mr-4">
                  <a href="https://www.linkedin.com/in/yenice-vazquez-perez-8b98811b5/">
                    <img src="/Github.svg" alt="git_icon" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="https://github.com/Yenicee">
                    <img src="/in.svg" alt="linkedin" />
                  </a>
                </li>
                <select className="item-language" onChange={changeLanguage} value={router.locale}>
                  <option value="en">{t('Ingles')}</option>
                  <option value="es">{t('Espanol')}</option>
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
