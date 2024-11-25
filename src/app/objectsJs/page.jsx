"use client"

import Link from "next/link";
import { useState } from "react";

export default function Object() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { href: '#item_1', text: '¿Que son los objetos?' },
        { href: '#item_2', text: 'Formato JSON' },
        { href: '#item_3', text: 'Desestructurar datos en objetos' },
        { href: '#item_4', text: 'Clonar objetos o elementos' },
        { href: '#item_5', text: 'Iteradores de objetos' },
        { href: '#item_6', text: 'Agrupar datos por criterio' }
    ];

    return (
        <div className="min-h-screen">
            {/* Barra lateral */}
            <aside
                className={`fixed top-0 left-0 h-full bg-white dark:bg-[#1d222d7f] shadow-lg transition-transform duration-300 ease-in-out z-20 ${isCollapsed ? '-translate-x-full' : 'translate-x-0'
                    }`}
                style={{ width: '300px' }}
            >
                <div className="h-full flex flex-col">
                    <div className="p-6 flex-grow">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            Busca el artículo que quieres estudiar
                        </h2>
                        <ul className="flex flex-col space-y-4">
                            {menuItems.map((item, index) => (
                                <Link href={item.href} key={index}>
                                    <li className="flex items-center transition-all duration-200 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-base py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-sm">
                                        <img
                                            src="DocFile.svg"
                                            alt="doc"
                                            className="w-5 h-5 mr-3 dark:filter dark:brightness-200"
                                        />
                                        <span>{item.text}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 mt-auto">
                        <hr className="border-indigo-300 dark:border-indigo-600 py-2 w-4/5" />
                        <Link
                            href="/"
                            className="group flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ease-in-out text-blue-500 dark:text-blue-400 font-bold hover:text-blue-600 dark:hover:text-blue-300"
                        >
                            <img
                                src="/arrow.svg"
                                alt="Flecha de regreso"
                                className="w-4 h-4 transition-transform group-hover:-translate-x-1 filter-blue dark:filter dark:brightness-200"
                            />
                            <span className="group-hover:underline">Volver al inicio</span>
                        </Link>
                    </div>
                </div>
            </aside>

            <button
                className={`fixed top-1/2 z-30 bg-blue-500 text-white p-2 rounded-r-md transition-transform duration-300 ${isCollapsed ? 'left-0' : 'left-[300px]'
                    }`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? '→' : '←'}
            </button>

            {/* Contenido principal */}
            <main className={`transition-all duration-300 min-h-screen ${isCollapsed ? 'ml-0' : 'ml-[300px]'
                }`}>
                <div className={`p-8 max-w-4xl mx-auto ${isCollapsed ? 'px-16' : ''}`}>
                    {/* Sección: ¿Que son los objetos? */}
                    <section id="item_1" className="mb-16">
                        <h2 id="item_H2" tabindex="0">«¿Que son los objetos?»</h2>
                        <p>Un objeto en <code>JavaScript</code> es una variable especial que puede contener múltiples variables relacionadas en su interior, ayudando a organizarlas.
                            Aunque se puede crear con la palabra clave <code>new</code>, su uso se explica más adelante en el contexto de la programación <code> orientada a objetos</code>.</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                            <p>
                                <span className="text-blue-400">const</span>
                                <span className="text-green-400"> objeto </span>
                                <span className="text-blue-400">=</span>
                                <span className="text-blue-400"> new </span>
                                <span className="text-green-400"> Object</span>
                                <span className="text-yellow-400">();</span>
                                <span className="text-gray-400"> // Evitar esta sintaxis en Javascript (no se suele usar)</span>
                            </p>
                        </div>

                        <p className="mt-4">Siempre que podamos, se prefiere utilizar la notación literal, una forma abreviada para crear objetos
                            (u otros tipos de datos que veremos más adelante), sin necesidad de utilizar la palabra <code>new</code>.</p>

                        <h3>Declaración de un objeto</h3>
                        <p mt-4>Los literales de objetos son representaciones simples y directas de un objeto,
                            usando llaves para definirlos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                            <p>
                                <span className="text-blue-400">const</span>
                                <span className="text-green-400"> objeto </span>
                                <span className="text-blue-400">=</span>
                                <span className="text-yellow-400"> {"{}"}</span>;
                                <span className="text-gray-400"> // Esto es un objeto vacío</span>
                            </p>
                        </div>

                        <p className="mt-4">Vamos a crear un nuevo objeto llamado <code>player</code>, que contenga variables con información en su interior:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                            <p>
                                <span className="text-blue-400">const</span>
                                <span className="text-green-400"> player </span>
                                <span className="text-blue-400">=</span>
                                <span className="text-yellow-400"> {"{"}</span>
                            </p>
                            <p>
                                <span className="text-green-400">name</span>: <span className="text-yellow-400">"Marco Doe"</span>,
                            </p>
                            <p>
                                <span className="text-green-400">age</span>: <span className="text-yellow-400">30</span>,
                            </p>
                            <p>
                                <span className="text-green-400">position</span>: <span className="text-yellow-400">"Delantero"</span>,
                            </p>
                            <p>
                                <span className="text-green-400">team</span>: <span className="text-yellow-400">"FC Awesome"</span>
                            </p>
                            <p>
                                <span className="text-yellow-400"> {"}"}</span>;
                            </p>
                        </div>

                        <p className="mt-4">Las <code>variables</code> dentro de los objetos se llaman <code>propiedades</code>.
                            Esto permite agrupar información relacionada, lo que facilita su acceso de manera sencilla e intuitiva.</p>

                        <h3>Propiedades de un objeto</h3>
                        <p className="mt-4">Una vez declarado un objeto, podemos acceder a sus propiedades de dos formas diferentes:
                            a través de la notación con <code>puntos</code> o a través de la notación con <code>corchetes</code>.</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                            <p>
                                <span className="text-blue-400">const</span>
                                <span className="text-green-400"> car </span>
                                <span className="text-blue-400">=</span>
                                <span className="text-yellow-400"> {"{"}</span>
                            </p>
                            <p>
                                <span className="text-green-400">marca</span>: <span className="text-yellow-400">"Toyota"</span>,
                            </p>
                            <p>
                                <span className="text-green-400">modelo</span>: <span className="text-yellow-400">"Corolla"</span>,
                            </p>
                            <p>
                                <span className="text-green-400">año</span>: <span className="text-yellow-400">2020</span>,
                            </p>
                            <p>
                                <span className="text-green-400">color</span>: <span className="text-yellow-400">"Rojo"</span>
                            </p>
                            <p>
                                <span className="text-yellow-400"> {"}"}</span>;
                            </p>
                            <p>
                                <span className="text-gray-400"> // Acceder a las propiedades usando notación con puntos</span>
                            </p>
                            <p>
                                <span className="text-blue-400">console</span>
                                <span className="text-blue-400">.</span>
                                <span className="text-green-400">log</span>
                                <span className="text-blue-400">(</span>
                                <span className="text-green-400">car</span>
                                <span className="text-blue-400">.</span>
                                <span className="text-green-400">marca</span>
                                <span className="text-blue-400">);</span>
                            </p>
                            <p>
                                <span className="text-gray-400"> // Acceder a las propiedades usando notación con corchetes</span>
                            </p>
                            <p>
                                <span className="text-blue-400">console</span>
                                <span className="text-blue-400">.</span>
                                <span className="text-green-400">log</span>
                                <span className="text-blue-400">(</span>
                                <span className="text-green-400">car</span>
                                <span className="text-blue-400">[</span>
                                <span className="text-yellow-400">"modelo"</span>
                                <span className="text-blue-400">]);</span>
                            </p>
                        </div>

<p className="mt-4">El programador puede utilizar la notación que más le guste, pero la mas usada es la notación con <code>puntos</code>.</p>













                    </section>

                    {/* Sección: Formato JSON */}
                    <section id="item_2" className="mb-16">
                        <h2 id="item_H2">«Formato JSON»</h2>

                    </section>

                    {/* Sección: Desestructurar datos en objetos */}
                    <section id="item_3" className="mb-16">
                        <h2 id="item_H2">«Desestructurar datos en objetos»</h2>

                    </section>

                    {/* Sección: Clonar objetos o elementos */}
                    <section id="item_4" className="mb-16">
                        <h2 id="item_H2">«Clonar objetos o elementos»</h2>

                    </section>

                    {/* Sección: Iteradores de objetos */}
                    <section id="item_5" className="mb-16">
                        <h2 id="item_H2">«Iteradores de objetos»</h2>

                    </section>

                    {/* Sección: Agrupar datos por criterio */}
                    <section id="item_6" className="mb-16">
                        <h2 id="item_H2">«Agrupar datos por criterio»</h2>

                    </section>
                </div>
            </main>
        </div>
    );
}