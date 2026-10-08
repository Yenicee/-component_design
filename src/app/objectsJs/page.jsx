"use client";

import Link from "next/link";
import { useState } from "react";

export default function Object() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { href: "#item_1", text: "¿Que son los objetos?" },
    { href: "#item_2", text: "Formato JSON" },
    { href: "#item_3", text: "Desestructurar datos en objetos" },
    { href: "#item_4", text: "Clonar objetos o elementos" },
    { href: "#item_5", text: "Iteradores de objetos" },
    { href: "#item_6", text: "Agrupar datos por criterio" },
  ];

  return (
    <div className="min-h-screen">
      {/* Barra lateral */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-[#1d222d7f] shadow-lg transition-transform duration-300 ease-in-out z-20 ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{ width: "300px" }}
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
        className={`fixed top-1/2 z-30 bg-blue-500 text-white p-2 rounded-r-md transition-transform duration-300 ${
          isCollapsed ? "left-0" : "left-[300px]"
        }`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "→" : "←"}
      </button>

      {/* Contenido principal */}
      <main
        className={`transition-all duration-300 min-h-screen ${
          isCollapsed ? "ml-0" : "ml-[300px]"
        }`}
      >
        <div className={`p-8 max-w-4xl mx-auto ${isCollapsed ? "px-16" : ""}`}>
          {/* Sección: ¿Que son los objetos? */}
          <section id="item_1" className="mb-16">
            <h2 id="item_H2" tabindex="0">
              «¿Que son los objetos?»
            </h2>
            <p>
              Un objeto en <code>JavaScript</code> es una variable especial que
              puede contener múltiples variables relacionadas en su interior,
              ayudando a organizarlas. Aunque se puede crear con la palabra
              clave <code>new</code>, su uso se explica más adelante en el
              contexto de la programación <code> orientada a objetos</code>.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> objeto </span>
                <span className="text-blue-400">=</span>
                <span className="text-blue-400"> new </span>
                <span className="text-green-400"> Object</span>
                <span className="text-yellow-400">();</span>
                <span className="text-gray-400">
                  {" "}
                  // Evitar esta sintaxis en Javascript (no se suele usar)
                </span>
              </p>
            </div>

            <p className="mt-4">
              Siempre que podamos, se prefiere utilizar la notación literal, una
              forma abreviada para crear objetos (u otros tipos de datos que
              veremos más adelante), sin necesidad de utilizar la palabra{" "}
              <code>new</code>.
            </p>

            <h3>Declaración de un objeto</h3>
            <p mt-4>
              Los literales de objetos son representaciones simples y directas
              de un objeto, usando llaves para definirlos:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> objeto </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400"> {"{}"}</span>;
                <span className="text-gray-400">
                  {" "}
                  // Esto es un objeto vacío
                </span>
              </p>
            </div>

            <p className="mt-4">
              Vamos a crear un nuevo objeto llamado <code>player</code>, que
              contenga variables con información en su interior:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> player </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400"> {"{"}</span>
              </p>
              <p>
                <span className="text-green-400">name</span>:{" "}
                <span className="text-yellow-400">"Marco Doe"</span>,
              </p>
              <p>
                <span className="text-green-400">age</span>:{" "}
                <span className="text-yellow-400">30</span>,
              </p>
              <p>
                <span className="text-green-400">position</span>:{" "}
                <span className="text-yellow-400">"Delantero"</span>,
              </p>
              <p>
                <span className="text-green-400">team</span>:{" "}
                <span className="text-yellow-400">"FC Awesome"</span>
              </p>
              <p>
                <span className="text-yellow-400"> {"}"}</span>;
              </p>
            </div>
            <p className="mt-4">
              Las propiedades y métodos de un objeto pueden ser de cualquier
              tipo de JavaScript, incluso otros objetos o arrays.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> persona </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400"> {"{"}</span>
              </p>
              <p>
                <span className="text-green-400">name</span>:{" "}
                <span className="text-yellow-400">'Dani'</span>,
              </p>
              <p>
                <span className="text-green-400">age</span>:{" "}
                <span className="text-yellow-400">30</span>,
              </p>
              <p>
                <span className="text-green-400">isWorking</span>:{" "}
                <span className="text-blue-400">true</span>,
              </p>
              <p>
                <span className="text-green-400">family</span>:{" "}
                <span className="text-yellow-400">[</span>
                <span className="text-yellow-400">'Miguel'</span>,{" "}
                <span className="text-yellow-400">'Maria'</span>
                <span className="text-yellow-400">]</span>,{" "}
                <span className="text-gray-400">// array</span>
              </p>
              <p>
                <span className="text-green-400">address</span>:{" "}
                <span className="text-yellow-400">{"{"}</span>{" "}
                <span className="text-gray-400">// otro objeto</span>
              </p>
              <p>
                <span className="ml-4 text-green-400">street</span>:{" "}
                <span className="text-yellow-400">
                  'Calle de la Matanza 23'
                </span>
                ,
              </p>
              <p>
                <span className="ml-4 text-green-400">number</span>:{" "}
                <span className="text-yellow-400">13</span>,
              </p>
              <p>
                <span className="ml-4 text-green-400">city</span>:{" "}
                <span className="text-yellow-400">'Argentina'</span>
              </p>
              <p>
                <span className="text-yellow-400">{"}"}</span>
              </p>
              <p>
                <span className="text-yellow-400">{"}"}</span>;
              </p>
            </div>

            <p className="mt-4">
              Las <code>variables</code> dentro de los objetos se llaman{" "}
              <code>propiedades</code>. Esto permite agrupar información
              relacionada, lo que facilita su acceso de manera sencilla e
              intuitiva.
            </p>

            <h3>Propiedades de un objeto</h3>
            <p className="mt-4">
              Una vez declarado un objeto, podemos acceder a sus propiedades de
              dos formas diferentes: a través de la notación con{" "}
              <code>puntos</code> o a través de la notación con{" "}
              <code>corchetes</code>.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> car </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400"> {"{"}</span>
              </p>
              <p>
                <span className="text-green-400">marca</span>:{" "}
                <span className="text-yellow-400">"Toyota"</span>,
              </p>
              <p>
                <span className="text-green-400">modelo</span>:{" "}
                <span className="text-yellow-400">"Corolla"</span>,
              </p>
              <p>
                <span className="text-green-400">año</span>:{" "}
                <span className="text-yellow-400">2020</span>,
              </p>
              <p>
                <span className="text-green-400">color</span>:{" "}
                <span className="text-yellow-400">"Rojo"</span>
              </p>
              <p>
                <span className="text-yellow-400"> {"}"}</span>;
              </p>
              <p>
                <span className="text-gray-400">
                  {" "}
                  // Acceder a las propiedades usando notación con puntos
                </span>
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
                <span className="text-gray-400">
                  {" "}
                  // Acceder a las propiedades usando notación con corchetes
                </span>
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

            <p className="mt-4">
              El programador puede utilizar la notación que más le guste, pero
              la mas usada es la notación con <code>puntos</code>.
            </p>

            <h3>Añadir propiedades.</h3>

            <p>
              {" "}
              Podemos añadir <code>propiedades</code> al <code>objeto</code>{" "}
              después de haberlo creado, y no sólo en el momento de crear el
              objeto. Veamos un ejemplo:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-gray-400">
                  // FORMA 1: A través de notación con puntos
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> car </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400">{" {}"};</span>
              </p>
              <p>
                <span className="text-green-400">car</span>
                <span className="text-blue-400">.</span>
                <span className="text-green-400">brand</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">"Tesla"</span>;
              </p>
              <p>
                <span className="text-green-400">car</span>
                <span className="text-blue-400">.</span>
                <span className="text-green-400">model</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">"Model S"</span>;
              </p>
              <p>
                <span className="text-green-400">car</span>
                <span className="text-blue-400">.</span>
                <span className="text-green-400">year</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">2023</span>;
              </p>
              <p>
                <span className="text-gray-400">
                  // FORMA 2: A través de notación con corchetes
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> bike </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400">{" {}"};</span>
              </p>
              <p>
                <span className="text-green-400">bike</span>
                <span className="text-blue-400">[</span>
                <span className="text-yellow-400">"brand"</span>
                <span className="text-blue-400">]</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">"Yamaha"</span>;
              </p>
              <p>
                <span className="text-green-400">bike</span>
                <span className="text-blue-400">[</span>
                <span className="text-yellow-400">"model"</span>
                <span className="text-blue-400">]</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">"R1"</span>;
              </p>
              <p>
                <span className="text-green-400">bike</span>
                <span className="text-blue-400">[</span>
                <span className="text-yellow-400">"year"</span>
                <span className="text-blue-400">]</span>
                <span className="text-blue-400"> = </span>
                <span className="text-yellow-400">2022</span>;
              </p>
            </div>

            <p className="mt-4">
              Las propiedades de un <code>objeto</code> funcionan como variables
              y permiten organizar múltiples datos relacionados de forma{" "}
              <code>estructurada</code>. Utilizarlo para agrupar variables
              relacionadas es una buena práctica.
            </p>

            <h3>Métodos de un objeto</h3>
            <p>
              Hasta ahora, solo hemos visto como crear objetos{" "}
              <code>«genéricos»</code> en Javascript. Un objeto puede tener
              variables internas llamadas propiedades. Si una propiedad contiene
              una función, esta se llama <code>método del objeto</code>.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-gray-400">
                  // Este objeto tiene propiedades y un método
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>
                <span className="text-green-400"> persona </span>
                <span className="text-blue-400">=</span>
                <span className="text-yellow-400">{" {"}</span>
              </p>
              <p>
                <span className="ml-4 text-green-400">nombre</span>:{" "}
                <span className="text-yellow-400">'Ana'</span>,
              </p>
              <p>
                <span className="ml-4 text-green-400">edad</span>:{" "}
                <span className="text-yellow-400">28</span>,
              </p>
              <p>
                <span className="ml-4 text-green-400">saludar</span>:{" "}
                <span className="text-yellow-400">function()</span>{" "}
                <span className="text-yellow-400">{"{"}</span>
              </p>
              <p>
                <span className="ml-8 text-blue-400">return</span>{" "}
                <span className="text-yellow-400">'Hola, soy Ana'</span>;
              </p>
              <p>
                <span className="ml-4 text-yellow-400">{"}"}</span>,
              </p>
              <p>
                <span className="text-yellow-400">{"}"}</span>;
              </p>
              <p>
                <span className="text-gray-400">
                  // El método "saludar" permite realizar acciones con la
                  información del objeto
                </span>
              </p>
            </div>

            <p className="mt-4">
              Si ya tienes experiencia programando, esto te sonará al concepto
              de <code>Clase</code> que veremos después. Por ahora estamos
              creando objetos directamente, sin pasar por clases. Más adelante
              profundizaremos en clases e instancias cuando lleguemos a
              Programación orientada a objetos.
            </p>
          </section>

          {/* Sección: Formato JSON */}
          <section id="item_2" className="mb-16">
            <h2 id="item_H2">«Formato JSON»</h2>
            <p>
              Para manejar grandes volúmenes de datos, es mejor separarlos del
              código en archivos <code>JSON</code> independientes. Así
              actualizas la información sin tocar tu programa.
            </p>

            <h3>¿Qué es JSON?</h3>

            <p>
              JSON (JavaScript Object Notation) es un formato ligero para
              almacenar datos que usa la misma sintaxis de los objetos de
              JavaScript. Es compatible de forma nativa con JS.
            </p>
            <p>Un archivo JSON básico se ve así:</p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-yellow-400">{"{ "}</span>
                <span className="text-blue-400">"clave"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"valor"</span>
                <span className="text-yellow-400">{" }"}</span>
              </p>
            </div>
            <p className="mt-4">
              Sin embargo, su contenido puede ser simplemente un{" "}
              <code>ARRAY</code> , un <code>NUMBER</code> , un{" "}
              <code>STRING</code> , un <code>BOOLEAN</code> o incluso un{" "}
              <code>NULL</code>, sin embargo, lo más habitual es que parta
              siendo un <code>OBJECT</code> o un <code>ARRAY</code> .
            </p>

            <p className="mt-4">
              Un archivo JSON, suele contener mucha información almacenada.
              Vamos a crear un objeto de ejemplo de forma simplificada:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-yellow-400">{"{"}</span>
                {"\n  "}
                <span className="text-blue-400">"usuario"</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">"edad"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">25</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">"nivel"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">8</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">"puntos"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">"activo"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">true</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">"habilidades"</span>
                <span className="text-white">: [</span>
                <span className="text-green-400">"diseño"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"backend"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"bases de datos"</span>
                <span className="text-white">],</span>
                {"\n  "}
                <span className="text-blue-400">"estadisticas"</span>
                <span className="text-white">: {"{"}</span>
                {"\n    "}
                <span className="text-blue-400">"velocidad"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">85</span>
                <span className="text-white">,</span>
                {"\n    "}
                <span className="text-blue-400">"precision"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">92</span>
                <span className="text-white">,</span>
                {"\n    "}
                <span className="text-blue-400">"creatividad"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">78</span>
                <span className="text-white">,</span>
                {"\n    "}
                <span className="text-blue-400">"resistencia"</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">65</span>
                {"\n  "}
                <span className="text-white">{"}"}</span>
                {"\n"}
                <span className="text-yellow-400">{"}"}</span>
              </pre>
            </div>

            <p className="mt-4">
              Si comparamos un <code>JSON</code> con un objeto{" "}
              <code>Javascript</code>, aparecen algunas diferencias que aca vas
              a aprender a diferenciar:
            </p>
            <ul className="list-disc">
              <li className="font-bold">
                • Las propiedades del objeto deben estar entrecomilladas con
                «comillas dobles»
              </li>
              <li className="font-bold">
                • Los <code>string</code> deben estar entrecomillados con
                «comillas dobles»
              </li>
              <li className="font-bold">
                • Sólo se puede almacenar tipos como <code>string</code> ,{" "}
                <code>number</code> , <code>object</code> , <code>array</code> ,
                <code>boolean</code> o <code>null</code> .
              </li>
              <li className="font-bold">
                • Tipos de datos como <code>FUNCTION </code> ,<code>DATE</code>{" "}
                , <code>REGEXP</code> u otros, no es posible almacenarlos en un
                JSON.
              </li>
              <li className="font-bold">
                • No es posible añadir comentarios en un JSON.
              </li>
            </ul>

            <h3>¿Cómo utilizar JSON?</h3>
            <p>
              Como hemos visto, si analizamos bien la sintaxis de un JSON, nos
              habremos dado cuenta que es muy similar a un objeto declarado
              Javascript, pero con ciertas diferencias:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> user </span>
                <span className="text-white">= {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">name</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Maria"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">lastname</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">"Moreno"</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                <span className="text-white">;</span>
              </pre>
            </div>

            <p className="mt-4">
              Métodos que nos facilita las tareas son los siguientes:{" "}
            </p>

            <table className="w-full bg-slate-950 text-white">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-4 py-2 text-left">Método</th>
                  <th className="px-4 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs mr-2">
                      OBJECT
                    </span>
                    JSON.parse(str)
                  </td>
                  <td className="px-4 py-2">
                    Convierte el texto{" "}
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">
                      STRING
                    </span>{" "}
                    str (si es un JSON válido) a un objeto y lo devuelve.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">
                      STRING
                    </span>
                    JSON.stringify(obj)
                  </td>
                  <td className="px-4 py-2">
                    Convierte un objeto{" "}
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      OBJECT
                    </span>{" "}
                    obj a su representación JSON y la devuelve.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">
                      STRING
                    </span>
                    JSON.stringify(obj, props)
                  </td>
                  <td className="px-4 py-2">
                    Idem al anterior, pero filtra y mantiene solo las
                    propiedades del{" "}
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                      ARRAY
                    </span>{" "}
                    props.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">
                      STRING
                    </span>
                    JSON.stringify(obj, props, spaces)
                  </td>
                  <td className="px-4 py-2">
                    Idem al anterior, pero indenta el JSON a{" "}
                    <span className="bg-blue-400 text-white px-2 py-1 rounded text-xs">
                      NUMBER
                    </span>{" "}
                    spaces espacios.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              El método <code>.parse()</code> nos va a permitir pasar el
              contenido de <code>STRING</code> de un JSON a <code>OBJECT</code>.
              En contrapartida, el método <code>.stringify()</code> nos va a
              permitir pasar de de Javascript a contenido de <code>STRING</code>{" "}
              con el JSON en cuestión.
            </p>

            <h3>Convertir JSON a objeto</h3>
            <p>
              Convertir JSON a objeto JavaScript se llama parsear. El método{" "}
              <code>JSON.parse()</code> analiza un texto con JSON válido y
              devuelve un objeto JavaScript estructurado:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> json </span>
                <span className="text-white">= </span>
                <span className="text-green-400">{`\`{`}</span>
                {"\n  "}
                <span className="text-green-400">"usuario": "Carlos",</span>
                {"\n  "}
                <span className="text-green-400">"puntos": 1500</span>
                {"\n"}
                <span className="text-green-400">{`}\`;`}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white"> player </span>
                <span className="text-white">= </span>
                <span className="text-white">JSON</span>
                <span className="text-white">.</span>
                <span className="text-yellow-400">parse</span>
                <span className="text-white">(json);</span>
                {"\n\n"}
                <span className="text-white">player.</span>
                <span className="text-white">usuario</span>
                <span className="text-white">;</span>
                <span className="text-gray-400"> // "Carlos"</span>
                {"\n"}
                <span className="text-white">player.</span>
                <span className="text-white">puntos</span>
                <span className="text-white">;</span>
                <span className="text-gray-400"> // 1500</span>
              </pre>
            </div>

            <h3>Convertir objeto a JSON</h3>
            <p>
              La operación inversa, convertir un objeto JavaScript a JSON, se
              hace con <code>JSON.stringify()</code>. Este método transforma
              rápidamente un objeto JS a formato JSON:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> player </span>
                <span className="text-white">= {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">usuario</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">saludar</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">function</span>
                <span className="text-white"> () {"{"}</span>
                {"\n    "}
                <span className="text-blue-400">return</span>
                <span className="text-white"> </span>
                <span className="text-green-400">"¡Hola!"</span>
                <span className="text-white">;</span>
                {"\n  "}
                <span className="text-white">{"}"}</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                <span className="text-white">;</span>
                {"\n\n"}
                <span className="text-white">JSON.</span>
                <span className="text-yellow-400">stringify</span>
                <span className="text-white">(player);</span>
                <span className="text-gray-400">{` // '{"usuario":"Carlos","puntos":1500}'`}</span>
              </pre>
            </div>

            <p>
              Además, se le puede pasar un segundo parámetro al método
              <code>.stringify()</code>, que será un <code>ARRAY</code> que
              actuará de filtro a la hora de generar el objeto. Veamos el
              siguiente ejemplo:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> player = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">usuario</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">nivel</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">8</span>
                <span className="text-white">,</span>
                {"\n"}
                <span className="text-white">{"}"};</span>
                {"\n\n"}
                <span className="text-white">JSON.stringify(player, [</span>
                <span className="text-green-400">"puntos"</span>
                <span className="text-white">]) </span>
                <span className="text-gray-400">{`// '{"puntos":1500}'`}</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, [</span>
                <span className="text-green-400">"usuario"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"nivel"</span>
                <span className="text-white">]) </span>
                <span className="text-gray-400">{`// '{"usuario":"Carlos","nivel":8}'`}</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, []) </span>
                <span className="text-gray-400">{`// '{}'`}</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, </span>
                <span className="text-purple-400">null</span>
                <span className="text-white">) </span>
                <span className="text-gray-400">{`// '{"usuario":"Carlos","puntos":1500,"nivel":8}'`}</span>
              </pre>
            </div>

            <p className="mt-2">
              Fíjate que cuando usas un array vacío [], no se conserva ninguna
              propiedad del objeto. En cambio, si pasas <code>null</code>, se
              mantienen todas las propiedades.
            </p>
            <p className="mt-2">
              Además, puedes agregar un tercer parámetro a{" "}
              <code>.stringify()</code> que indica cuántos espacios usar para
              indentar el JSON. Hasta ahora el resultado aparece minificado
              (todo en una línea), pero con este parámetro puedes formatearlo de
              manera más legible.
            </p>

            <p className="mt-4">
              Observa lo que ocurre en los siguientes casos:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> player = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">usuario</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                {"\n"}
                <span className="text-white">{"}"};</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, </span>
                <span className="text-purple-400">null</span>
                <span className="text-white">, </span>
                <span className="text-purple-400">2</span>
                <span className="text-white">);</span>
                {"\n"}
                <span className="text-gray-400">// {"{"}</span>
                {"\n"}
                <span className="text-gray-400">// "usuario": "Carlos",</span>
                {"\n"}
                <span className="text-gray-400">// "puntos": 1500</span>
                {"\n"}
                <span className="text-gray-400">// {"}"}</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, </span>
                <span className="text-purple-400">null</span>
                <span className="text-white">, </span>
                <span className="text-purple-400">4</span>
                <span className="text-white">);</span>
                {"\n"}
                <span className="text-gray-400">// {"{"}</span>
                {"\n"}
                <span className="text-gray-400">// "usuario": "Carlos",</span>
                {"\n"}
                <span className="text-gray-400">// "puntos": 1500</span>
                {"\n"}
                <span className="text-gray-400">// {"}"}</span>
                {"\n"}
                <span className="text-white">JSON.stringify(player, [</span>
                <span className="text-green-400">"usuario"</span>
                <span className="text-white">], </span>
                <span className="text-purple-400">1</span>
                <span className="text-white">);</span>
                {"\n"}
                <span className="text-gray-400">// {"{"}</span>
                {"\n"}
                <span className="text-gray-400">// "usuario": "Carlos"</span>
                {"\n"}
                <span className="text-gray-400">// {"}"}</span>
              </pre>
            </div>
            <p className="mt-2">
              En el primer caso, el resultado se genera indentado a 2 espacios.
              En el segundo caso, se indenta a 4 espacios. En el tercer caso, se
              filtran las propiedades dejando solo "usuario" y se indenta a 1
              espacio.
            </p>

            <h3>Leyendo JSON externo</h3>
            <p>
              Ten en cuenta que en los ejemplos anteriores estamos convirtiendo
              objetos a <code>JSON</code> y viceversa directamente en el código.
              Normalmente, los contenidos <code>JSON</code> están almacenados en
              archivos externos que debemos leer desde <code>JavaScript</code>.
              Para ello, se utiliza la función
              <code>fetch()</code> para hacer peticiones a APIs que devuelven
              JSON, o para leer archivos locales <code>.json</code>. Estos temas
              los veremos más adelante en el apartado de Peticiones{" "}
              <code>HTTP</code>.
            </p>
          </section>

          {/* Sección: Desestructurar datos en objetos */}
          <section id="item_3" className="mb-16">
            <h2 id="item_H2">«Desestructurar datos en objetos»</h2>

            <p>
              La desestructuración de objetos es una de las técnicas más usadas
              en JavaScript moderno <code>(y en frameworks como React)</code>{" "}
              porque simplifica enormemente el trabajo con objetos, que son
              estructuras de datos muy frecuentes en <code>JS</code>.
            </p>

            <h3>Desestructuración de objetos</h3>
            <p>
              Empecemos por lo básico. Si tenemos un objeto, la
              desestructuración nos permite extraer sus propiedades y guardarlas
              directamente en variables individuales:
            </p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> player </span>
                <span className="text-white">= {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">usuario</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">profesion</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"desarrollador"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white">
                  {" "}
                  {"{ usuario, profesion, puntos }"} = player;
                </span>
                {"\n\n"}
                <span className="text-white">console.log(usuario);</span>
                {"\n"}
                <span className="text-white">
                  console.log(profesion, puntos);
                </span>
              </pre>
            </div>
            <p className="mt-2">
              En este ejemplo, extraemos las propiedades <code>usuario</code>,{" "}
              <code>profesion</code> y <code>puntos</code> en variables
              individuales desde el objeto <code>player</code>. Además, en lugar
              de hacer múltiples <code>console.log()</code> por separado,
              podemos combinarlos en uno solo pasando varias variables separadas
              por comas.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-white">
                  console.log({"{ usuario, profesion, puntos }"});
                </span>
              </pre>
            </div>

            <p className="mt-2">
              En esta línea, <code>«volvemos a estructurar»</code> en un objeto,
              uniendo las diferentes variables en un objeto a la hora de
              mostrarlo por consola.
            </p>

            <p>
              Además, ten en cuenta que también es posible renombrar las
              propiedades si lo deseamos:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-red-300">
                  {" "}
                  {"{ usuario, profesion: tipo, puntos }"} = player;
                </span>
                {"\n\n"}
                <span className="text-white">
                  console.log({"{ usuario, tipo, puntos }"});
                </span>
              </pre>
            </div>

            <p className="mt-4">
              Ten en cuenta que, para los casos en los que una de esas
              propiedades no exista (o tenga un valor <code>undefined</code>),
              también podemos establecerle un valor por defecto como solemos
              hacer en los parámetros de una función, de la siguiente forma:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> {"{ usuario, profesion = "}</span>
                <span className="text-green-400">"usuario normal"</span>
                <span className="text-white">{", puntos = "}</span>
                <span className="text-purple-400">100</span>
                <span className="text-white">{" }"} = player;</span>
                {"\n"}
                <span className="text-red-200">
                  console.log({"{ usuario, profesion, puntos }"});
                </span>
              </pre>
            </div>

            <p className="mt-2">
              Esto hará que, si no existe la propiedad profesion en el objeto{" "}
              <code>player</code>, se cree la variable profesion con el valor{" "}
              <code>"usuario normal"</code>.
            </p>

            <h3>Reestructurando nuevos objetos</h3>
            <p className="mt-2">
              Podemos usar la desestructuración para crear nuevos objetos a
              partir de otros ya existentes. Esto nos permite reutilizar datos,
              agregar nuevas propiedades o modificar las que ya existen, de
              forma simple y práctica.
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> player = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">usuario</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Carlos"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">profesion</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"desarrollador"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">1500</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white"> fullPlayer = {"{"}</span>
                {"\n  "}
                <span className="text-white">...player,</span>
                {"\n  "}
                <span className="text-blue-400">nivel</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">8</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">puntos</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">2000</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </pre>
            </div>

            <p className="mt-2">
              En este ejemplo, creamos un nuevo objeto <code>fullPlayer</code>{" "}
              con las mismas propiedades de <code>player</code>. Además de las
              propiedades anteriores, añadimos la nueva propiedad nivel y
              sobreescribimos la propiedad puntos con el valor 2000.
            </p>

            <p className="mt-4">Veamos otro ejemplo:</p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> producto = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">nombre</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Laptop"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">precio</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">800</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">stock</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">15</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white"> productoActualizado = {"{"}</span>
                {"\n  "}
                <span className="text-white">...producto,</span>
                {"\n  "}
                <span className="text-blue-400">descuento</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">10</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">precio</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">750</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </pre>
            </div>

            <p className="mt-2">
              En este ejemplo, creamos un nuevo objeto{" "}
              <code>productoActualizado</code> con las mismas propiedades de
              producto. Además de las propiedades anteriores, añadimos la nueva
              propiedad descuento y actualizamos la propiedad precio con el
              valor 750.
            </p>

            <h3>Haciendo copias de objetos</h3>
            <p className="mt-2">
              Hasta ahora usamos ejemplos simples con valores primitivos{" "}
              <code>(números, strings, booleanos)</code>, que en JavaScript se
              pasan por valor, así que no traen complicaciones. Pero los valores{" "}
              <code>no primitivos</code>, como objetos y arrays, se pasan por
              referencia.
            </p>
            <p className="mt-2">Veamos un ejemplo:</p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> alumno = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">nombre</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Lucía"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">curso</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"JavaScript"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">nota</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">7</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">temas</span>
                <span className="text-white">: [</span>
                <span className="text-green-400">"variables"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"funciones"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"objetos"</span>
                <span className="text-white">]</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white"> alumnoActualizado = {"{"}</span>
                {"\n  "}
                <span className="text-white">...alumno,</span>
                {"\n  "}
                <span className="text-blue-400">asistencia</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">90</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">nota</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">9</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </pre>
            </div>

            <p className="mt-2">
              Fijate que ahora alumno tiene una propiedad temas que guarda un{" "}
              <code>array</code>, un tipo de dato más complejo en{" "}
              <code>JavaScript</code>. Ahora mirá el objeto alumnoActualizado:
              cuando hacemos ...alumno, estamos tomando todas las propiedades de
              alumno y copiándolas una por una dentro de alumnoActualizado.
            </p>

            <p className="mt-2">
              En resumen, los tipos de datos complejos no son copias, son
              referencias <code>(algo así como accesos directos)</code>.
            </p>
            <p className="mt-2">
              Vamos a verlo en código, partiendo del ejemplo anterior:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-gray-200">
                  console.log(alumno.temas);
                </span>
                <span className="text-gray-500">{"             "}// [</span>
                <span className="text-emerald-300">
                  "variables", "funciones", "objetos"
                </span>
                <span className="text-gray-500">]</span>
                {"\n"}
                <span className="text-gray-200">
                  console.log(alumnoActualizado.temas);
                </span>
                <span className="text-gray-500">{"  "}// [</span>
                <span className="text-emerald-300">
                  "variables", "funciones", "objetos"
                </span>
                <span className="text-gray-500">]</span>
                {"\n\n"}
                <span className="text-gray-200">
                  alumnoActualizado.temas[0] ={" "}
                </span>
                <span className="text-emerald-300">"arrays"</span>
                <span className="text-gray-200">;</span>
                {"\n\n"}
                <span className="text-gray-200">
                  console.log(alumnoActualizado.temas);
                </span>
                <span className="text-gray-500">{"  "}// [</span>
                <span className="text-emerald-300">
                  "arrays", "funciones", "objetos"
                </span>
                <span className="text-gray-500">]</span>
                {"\n"}
                <span className="text-gray-200">
                  console.log(alumno.temas);
                </span>
                <span className="text-gray-500">{"             "}// [</span>
                <span className="text-emerald-300">
                  "arrays", "funciones", "objetos"
                </span>
                <span className="text-gray-500">]</span>
              </pre>
            </div>

            <p>
              Cambiamos el primer elemento de temas en{" "}
              <code>alumnoActualizado</code>, pero al revisar{" "}
              <code>alumno</code> vemos que también cambió. Esto pasa porque
              temas en alumnoActualizado no es una copia, sino una referencia al
              mismo <code>array</code> de alumno, así que al modificarlo se
              alteran los dos objetos.
            </p>

            <p>Para solucionar esto, podemos hacer lo siguiente:</p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <pre>
                <span className="text-blue-400">const</span>
                <span className="text-white"> alumno = {"{"}</span>
                {"\n  "}
                <span className="text-blue-400">nombre</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"Lucía"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">curso</span>
                <span className="text-white">: </span>
                <span className="text-green-400">"JavaScript"</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">nota</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">7</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">temas</span>
                <span className="text-white">: [</span>
                <span className="text-green-400">"variables"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"funciones"</span>
                <span className="text-white">, </span>
                <span className="text-green-400">"objetos"</span>
                <span className="text-white">]</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
                {"\n\n"}
                <span className="text-blue-400">const</span>
                <span className="text-white"> alumnoActualizado = {"{"}</span>
                {"\n  "}
                <span className="text-white">...</span>
                <span className="text-yellow-300">structuredClone</span>
                <span className="text-white">(alumno),</span>
                {"\n  "}
                <span className="text-blue-400">asistencia</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">90</span>
                <span className="text-white">,</span>
                {"\n  "}
                <span className="text-blue-400">nota</span>
                <span className="text-white">: </span>
                <span className="text-purple-400">9</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </pre>
            </div>

            <p className="mt-2">La diferencia es que, en vez de hacer solo ...alumno,
               usamos <code>structuredClone()</code> pasándole el objeto que queremos copiar.
                Esta función sí crea una copia real y devuelve un objeto nuevo,<code>no una referencia al original</code>.</p>
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
