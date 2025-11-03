"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NumberJs() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { href: "#item_1", text: "¿Que es un Number?" },
    { href: "#item_2", text: "Conversiones numericas" },
    { href: "#item_3", text: "El objeto Math" },
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
          isCollapsed ? "ml-0" : "ml-[200px]"
        }`}
      >
        <div className={`p-8 max-w-4xl mx-auto ${isCollapsed ? "px-16" : ""}`}>
          {/*¿Que es un Number?*/}
          <div id="item_1" className="mt-8">
            <h2 id="item_H2" tabIndex="0">
              «¿Que es un Number?»
            </h2>
            <p className="mt-4">
              En Javascript, crear variables numéricas es muy sencillo, pero hay
              muchísimos matices que se deben conocer y que necesitamos dominar
              para trabajar correctamente con números y anticiparnos a posibles
              situaciones.
            </p>

            <h3>¿Qué es una variable numérica?</h3>
            <p className="mt-4">
              {" "}
              los números son uno de los tipos de datos básicos{" "}
              <span className=" text-gray-400">(tipos primitivos)</span>, que,
              para crearlos, simplemente basta con escribirlos literalmente. No
              obstante, como en Javascript todo se puede representar con objetos{" "}
              <span className=" text-gray-400">
                (como veremos más adelante){" "}
              </span>{" "}
              también se pueden declarar mediante la palabra clave{" "}
              <span className="font-bold text-yellow-500">new</span>:
            </p>

            <table className="w-full bg-slate-950 text-white mt-6">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-4 py-2 text-left">Constructor</th>
                  <th className="px-4 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number
                    </span>
                    new Number(number)
                  </td>
                  <td className="px-4 py-2">
                    Crea un objeto numérico a partir del número{" "}
                    <span className="text-yellow-400">number</span> pasado por
                    parámetro.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      number
                    </span>
                    number
                  </td>
                  <td className="px-4 py-2">
                    Simplemente, el número en cuestión. Notación preferida.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Aunque existan estas dos formas de declararlas, no se suele
              utilizar la notación new con números, ya que es bastante más
              tedioso y complicado, por lo que lo preferible es utilizar la
              notación de literales:
            </p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
              <p>
                <span className="text-yellow-400">
                  // Notación literal (preferida)
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">number</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-red-400">4</span>;
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">decimal</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-red-400">15.8</span>;
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">legibleNumber</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-red-400">5_000_000</span>;
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">
                  // Notación con objetos (evitar)
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">number</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-blue-400">new Number(</span>
                <span className="text-red-400">4</span>
                <span className="text-blue-400">)</span>;
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">decimal</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-blue-400">new Number(</span>
                <span className="text-red-400">15.8</span>
                <span className="text-blue-400">)</span>;
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">letter</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-blue-400">new Number(</span>
                <span className="text-red-400">"A"</span>
                <span className="text-blue-400">)</span>;
              </p>
            </div>

            <p className="mt-4">
              Observa que los números con decimales, en Javascript los separamos
              con un punto ( . ), mientras que de forma opcional, podemos
              utilizar el guión bajo ( _ ) para separar visualmente y reconocer
              las magnitudes que usamos, teniendo en cuenta que para Javascript
              es lo mismo:
            </p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
              <p>
                <span className="text-red-400">5_000_000</span>{" "}
                <span className="text-blue-400">===</span>{" "}
                <span className="text-red-400">5000000</span>;{" "}
                <span className="text-yellow-400">// true</span>
              </p>
            </div>
            <p className="mt-4">
              Cualquier parámetro pasado al{" "}
              <span className="text-yellow-400 font-bold">new Number()</span>{" "}
              que no sea un número (por ejemplo, la{" "}
              <span className="font-bold text-yellow-400">"A"</span>), dará como
              resultado un valor{" "}
              <span className="font-bold text-yellow-400">
                NaN (Not A Number)
              </span>
              .
            </p>

            <h3 className="mt-4">Rangos numéricos seguros</h3>
            <p className="mt-4">
              Algo que hay que tener muy claro en Javascript (y en general, en
              programación, ya que no es algo propio de Javascript) es que
              cuando trabajamos con datos numéricos, es posible que ciertos
              números no se puedan representar exactamente, y no sean tan
              precisos como nos gustaría.
            </p>
            <p>
              Existe una serie de constantes definidas en relación a este tema,
              que marcan los límites mínimo o máximo. Veamos cuales son y su
              significado:
            </p>

            <table className="w-full bg-slate-950 text-white mt-6">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-4 py-2 text-left">Constante</th>
                  <th className="px-4 py-2 text-left">Valor en Javascript</th>
                  <th className="px-4 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number.MAX_VALUE
                    </span>
                  </td>
                  <td className="px-4 py-2">~ 1.7976931348623157 × 10^308</td>
                  <td className="px-4 py-2">
                    Valor más grande representable en JavaScript.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number.MIN_VALUE
                    </span>
                  </td>
                  <td className="px-4 py-2">~ 5 × 10^-324</td>
                  <td className="px-4 py-2">
                    Valor más pequeño positivo representable en JavaScript.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number.MAX_SAFE_INTEGER
                    </span>
                  </td>
                  <td className="px-4 py-2">~ 9,007,199,254,740,991</td>
                  <td className="px-4 py-2">
                    Mayor entero seguro representable en JavaScript sin pérdida
                    de precisión.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number.MIN_SAFE_INTEGER
                    </span>
                  </td>
                  <td className="px-4 py-2">~ -9,007,199,254,740,991</td>
                  <td className="px-4 py-2">
                    Menor entero seguro representable en JavaScript sin pérdida
                    de precisión.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Number.EPSILON
                    </span>
                  </td>
                  <td className="px-4 py-2">~ 2.220446049250313e-16</td>
                  <td className="px-4 py-2">
                    El valor más pequeño tal que 1 + ε !== 1 en aritmética de
                    punto flotante.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              El valor{" "}
              <span className="text-yellow-400 font-bold">Number.EPSILON</span>{" "}
              es un número que se suele utilizar para representar cantidades
              matemáticas muy pequeñas. Por otro lado, la diferencia entre{" "}
              <span className="text-yellow-400 font-bold">
                Number.MAX_VALUE
              </span>{" "}
              y{" "}
              <span className="text-yellow-400 font-bold">
                Number.MAX_SAFE_INTEGER
              </span>{" "}
              es que, el primero es el valor máximo que es posible representar
              en Javascript. Por otro lado, el segundo es el valor máximo para
              realizar cálculos con seguridad en Javascript.
            </p>

            <div className="bg-red-950 p-2 my-4 mt-4">
              <p className="text-white">
                <span className="text-red-600 font-bold text-2xl"> OJO:</span>{" "}
                Los lenguajes de programación están sujetos a la{" "}
                <span className="text-red-600 font-bold">
                  precisión numérica{" "}
                </span>
                debido a la forma interna en la que guardan valores numéricos.
                Si realizamos operaciones con muy alta precisión numérica, se
                recomienda utilizar el tipo de{" "}
                <span className="text-red-600 font-bold">dato BigInt</span>, o
                librerías de terceros como{" "}
                <span className="text-red-600 font-bold">decimal.js</span> o{" "}
                <span className="text-red-600 font-bold">bigNumber.js</span>.
              </p>
            </div>

            <h3 className="mt-4">Comprobaciones numéricas</h3>
            <p className="mt-4">
              Si queremos conocer la naturaleza de una variable numérica (número
              finito, número entero o número seguro), las podemos comprobar con
              uno de los métodos estáticos de Number que tenemos a continuación:
            </p>
            <p>
              Ten en cuenta que estas funciones devuelven un{" "}
              <span className="text-yellow-500 font-bold">Boolean</span>
              (verdadero o falso), lo que lo hace ideales para usarlas como
              condiciones en bucles o condicionales. Veamos dos ejemplos para
              cada una de estas funciones:
            </p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
              <p>
                <span className="text-yellow-400">// ¿Número finito?</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isFinite</span>(
                <span className="text-red-400">42</span>);{" "}
                <span className="text-gray-400">// true</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isFinite</span>(
                <span className="text-red-400">551.3</span>);{" "}
                <span className="text-gray-400">// true</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isFinite</span>(
                <span className="text-red-400">Infinity</span>);{" "}
                <span className="text-gray-400">// false, es infinito</span>
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">// ¿Número entero?</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isInteger</span>(
                <span className="text-red-400">5</span>);{" "}
                <span className="text-gray-400">// true</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isInteger</span>(
                <span className="text-red-400">4.6</span>);{" "}
                <span className="text-gray-400">// false, es decimal</span>
              </p>

              <p className="mt-4">
                <span className="text-yellow-400">// ¿Número seguro?</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isSafeInteger</span>(
                <span className="text-red-400">1e15</span>);{" "}
                <span className="text-gray-400">
                  // true (valor en la franja verde)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isSafeInteger</span>(
                <span className="text-red-400">1e16</span>);{" "}
                <span className="text-gray-400">
                  // false (valor en la franja amarilla)
                </span>
              </p>

              <p className="mt-4">
                <span className="text-red-400">1e309</span>{" "}
                <span className="text-blue-400">===</span>{" "}
                <span className="text-red-400">Infinity</span>;{" "}
                <span className="text-gray-400">// true</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">isSafeInteger</span>(
                <span className="text-red-400">1e309</span>);{" "}
                <span className="text-gray-400">
                  // false (valor en la franja roja)
                </span>
              </p>
            </div>
            <p className="mt-4">
              Ten en cuenta que la notación{" "}
              <span className="text-yellow-500">1e5</span> significa «5 ceros
              seguidos de un 1», es decir,
              <span className="text-yellow-500">100000</span>.
            </p>
          </div>

          {/*Conversiones numericas*/}
          <div id="item_2" className="mt-8">
            <h2 id="item_H2" tabIndex="0">
              «¿Conversiones numéricas?»
            </h2>
            <p className="mt-4">
              En muchas ocasiones, tendremos variables{" "}
              <span className="text-yellow-500">String</span> que nos interesa{" "}
              <span className="text-yellow-500">convertir a número</span> por
              muchos motivos (realizar operaciones posteriormente, convertirlas
              a otra base numérica, etc...).{" "}
            </p>

            <h3 className="mt-4">Números enteros</h3>
            <p>
              Para{" "}
              <span className="text-yellow-500">
                convertir un string en number
              </span>
              , lo ideal es utilizar las funciones de parseo numérico,{" "}
              <span className="text-yellow-500 font-bold">.parseInt()</span> y{" "}
              <span className="text-yellow-500 font-bold">.parseFloat()</span>,
              que aunque son sencillas, tienen algunos detalles que deberíamos
              mencionar:
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
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Number.parseInt(text)
                  </td>
                  <td className="px-4 py-2">
                    Convierte un String{" "}
                    <span className="text-yellow-400">text</span> en un Number{" "}
                    <span className="text-yellow-400">entero</span>.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Number.parseInt(text, radix)
                  </td>
                  <td className="px-4 py-2">
                    Idem, pero el String tiene un número en base{" "}
                    <span className="text-yellow-400">radix</span>.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Veamos un ejemplo con el método{" "}
              <span className="text-yellow-500 font-bold">.parseInt()</span>{" "}
              cuando sólo le pasamos un parámetro (texto) que queremos convertir
              a número:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-yellow-400">// Number.parseInt()</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseInt</span>(
                <span className="text-red-400">"42"</span>);{" "}
                <span className="text-gray-400">// 42</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseInt</span>(
                <span className="text-red-400">"42€"</span>);{" "}
                <span className="text-gray-400">
                  // 42 (descarta todo desde un carácter no numérico)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseInt</span>(
                <span className="text-red-400">"Núm. 42"</span>);{" "}
                <span className="text-gray-400">
                  // NaN (empieza a descartar en Núm, descarta también 42)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseInt</span>(
                <span className="text-red-400">"A"</span>);{" "}
                <span className="text-gray-400">
                  // NaN (No se puede representar como un número)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseInt</span>(
                <span className="text-red-400">""</span>);{" "}
                <span className="text-gray-400">
                  // NaN (No se puede representar como un número)
                </span>
              </p>
            </div>

            <p className="mt-4">
              Nota que el método{" "}
              <span className="text-yellow-500 font-bold">.parseInt()</span>{" "}
              funciona perfectamente para variables de texto que son números (o
              que empiezan por números). Esto es muy útil para eliminar unidades
              de variables de texto que se extraen de una página.{" "}
            </p>

            <h3 className="mt-4">Números decimales</h3>

            <p className="mt-4">
              De forma análoga a{" "}
              <span className="text-yellow-500 font-bold">.parseInt()</span>{" "}
              tenemos otro método llamado{" "}
              <span className="text-yellow-500 font-bold">.parseFloat()</span>
              .Funciona exactamente igual a la primera, sólo que está enfocada
              para trabajar con números decimales, en lugar de números enteros.
            </p>

            <table className="w-full bg-slate-950 text-white">
              <thead class="bg-blue-900">
                <tr>
                  <th class="px-4 py-2 text-left">Método</th>
                  <th class="px-4 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Number.parseFloat(text)
                  </td>
                  <td class="px-4 py-2">
                    Convierte un String{" "}
                    <span class="text-yellow-400">text</span> en un{" "}
                    <span class="text-yellow-400">decimal</span>.
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Number.parseFloat(text, radix)
                  </td>
                  <td class="px-4 py-2">
                    Idem, pero el String tiene un número en base{" "}
                    <span class="text-yellow-400">radix</span>.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Veamos unos ejemplos utilizados con .parseFloat():
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-yellow-400">// Number.parseFloat()</span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseFloat</span>(
                <span className="text-red-400">"42.5"</span>);{" "}
                <span className="text-gray-400">
                  // 42.5 (Conserva decimales)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseFloat</span>(
                <span className="text-red-400">"42"</span>);{" "}
                <span className="text-gray-400">
                  // 42 (El número es entero, convierte a entero)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseFloat</span>(
                <span className="text-red-400">"88.99€"</span>);{" "}
                <span className="text-gray-400">
                  // 88.99 (Conserva decimales)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseFloat</span>(
                <span className="text-red-400">"42€"</span>);{" "}
                <span className="text-gray-400">
                  // 42 (El número es entero, convierte a entero)
                </span>
              </p>
              <p>
                <span className="text-blue-400">Number</span>.
                <span className="text-green-400">parseFloat</span>(
                <span className="text-red-400">"Núm. 33.5"</span>);{" "}
                <span className="text-gray-400">
                  // NaN (empieza a descartar en Núm, descarta todo)
                </span>
              </p>
            </div>
            <p className="mt-4">
              Recuerda utilizar{" "}
              <span className="text-yellow-500 font-bold">.parseFloat()</span>{" "}
              siempre que necesites mantener los decimales.
            </p>

            <h3 className="mt-4">Convertir desde decimal</h3>
            <p className="mt4">
              También nos podría interesar hacer la operación inversa. Es decir,
              tenemos un número en base decimal y queremos convertirlo a una
              base numérica diferente. Para ello, lo ideal es utilizar el método{" "}
              <span className="text-yellow-500 font-bold">.toString()</span>.
            </p>
            <p>Veamos ejemplos realizando varias operaciones:</p>
            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-yellow-400">// (number).toString()</span>
              </p>
              <p>
                <span className="text-red-400">(16)</span>.
                <span className="text-blue-400">toString</span>();{" "}
                <span className="text-gray-400">
                  // "16" (lo convierte a string)
                </span>
              </p>
              <p>
                <span className="text-red-400">(42.5)</span>.
                <span className="text-blue-400">toString</span>();{" "}
                <span className="text-gray-400">
                  // "42.5" (lo convierte a string)
                </span>
              </p>
              <p>
                <span className="text-red-400">(26)</span>.
                <span className="text-blue-400">toString</span>(
                <span className="text-red-400">2</span>);{" "}
                <span className="text-gray-400">
                  // "11010" (26 en decimal, es 11010 en binario)
                </span>
              </p>
              <p>
                <span className="text-red-400">(80)</span>.
                <span className="text-blue-400">toString</span>(
                <span className="text-red-400">8</span>);{" "}
                <span className="text-gray-400">
                  // "120" (80 en decimal, es 120 en octal)
                </span>
              </p>
              <p>
                <span className="text-red-400">(245123)</span>.
                <span className="text-blue-400">toString</span>(
                <span className="text-red-400">16</span>);{" "}
                <span className="text-gray-400">
                  // "3bd83" (245123 en decimal, es 3bd83 en hexadecimal)
                </span>
              </p>
            </div>
            <p className="mt-4">
              Con estos métodos y consejos, puedes cambiar entre bases numéricas
              en Javascript en unos pocos pasos.
            </p>
          </div>

          {/*El objeto Math*/}
          <div id="item_3" className="mt-8">
            <h2 id="item_H2" tabIndex="0">
              «El objeto Math»
            </h2>
            <p className="mt-4">
              Es posible realizar gran cantidad de operaciones matemáticas de
              forma nativa, sin necesidad de librerías externas. Pero, haremos
              uso del objeto{" "}
              <span className="text-yellow-500 font-bold">Math</span>, un objeto
              interno de Javascript que tiene incorporadas ciertas constantes y
              métodos (funciones) para trabajar matemáticamente.
            </p>
            <h3 className="mt-4">Constantes de Math</h3>
            <p className="mt-4">
              El objeto Math incorpora varias constantes que podemos necesitar
              en algunas operaciones matemáticas. Veamos su significado y valor
              aproximado:
            </p>

            <table class="w-full bg-slate-950 text-white">
              <thead class="bg-blue-900">
                <tr>
                  <th class="px-4 py-2 text-left">Constante</th>
                  <th class="px-4 py-2 text-left">Descripción</th>
                  <th class="px-4 py-2 text-left">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.E
                  </td>
                  <td class="px-4 py-2">Número de Euler</td>
                  <td class="px-4 py-2">2.718281828459045</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.LN2
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.log(2)</td>
                  <td class="px-4 py-2">0.6931471805599453</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.LN10
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.log(10)</td>
                  <td class="px-4 py-2">2.302585092994046</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.LOG2E
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.log2(Math.E)</td>
                  <td class="px-4 py-2">1.4426950408889634</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.LOG10E
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.log10(Math.E)</td>
                  <td class="px-4 py-2">0.4342944819032518</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.PI
                  </td>
                  <td class="px-4 py-2">Número PI o Π</td>
                  <td class="px-4 py-2">3.141592653589793</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.SQRT1_2
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.sqrt(1/2)</td>
                  <td class="px-4 py-2">0.7071067811865476</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.SQRT2
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.sqrt(2)</td>
                  <td class="px-4 py-2">1.4142135623730951</td>
                </tr>
              </tbody>
            </table>

            <h3 className="mt-4">Métodos matemáticos</h3>

            <p>
              Los siguientes métodos matemáticos están disponibles en Javascript
              a través del objeto Math:
            </p>

            <table className="w-full bg-slate-950 text-white">
              <thead class="bg-blue-900">
                <tr>
                  <th class="px-4 py-2 text-left">Método</th>
                  <th class="px-4 py-2 text-left">Descripción</th>
                  <th class="px-4 py-2 text-left">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.abs(x)
                  </td>
                  <td class="px-4 py-2">
                    Devuelve el{" "}
                    <span class="text-yellow-400">valor absoluto</span> de x.
                  </td>
                  <td class="px-4 py-2">|x|</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.sign(x)
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded text-xs ml-2">
                      ES2015
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    Devuelve el signo del número: 1 positivo, -1 negativo
                  </td>
                  <td class="px-4 py-2"></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.exp(x)
                  </td>
                  <td class="px-4 py-2">
                    <span class="text-yellow-400">Exponenciación</span>.
                    Devuelve el número e elevado a x.
                  </td>
                  <td class="px-4 py-2">
                    e<sup>x</sup>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.expm1(x)
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded text-xs ml-2">
                      ES2015
                    </span>
                  </td>
                  <td class="px-4 py-2">Equivalente a Math.exp(x) - 1.</td>
                  <td class="px-4 py-2">
                    e<sup>x</sup>-1
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.max(a, b, c...)
                  </td>
                  <td class="px-4 py-2">
                    Devuelve el número más grande de los indicados por
                    parámetro.
                  </td>
                  <td class="px-4 py-2"></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.min(a, b, c...)
                  </td>
                  <td class="px-4 py-2">
                    Devuelve el número más pequeño de los indicados por
                    parámetro.
                  </td>
                  <td class="px-4 py-2"></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.pow(base, exp)
                  </td>
                  <td class="px-4 py-2">
                    <span class="text-yellow-400">Potenciación</span>. Devuelve
                    el número base elevado a exp.
                  </td>
                  <td class="px-4 py-2">
                    base<sup>exp</sup>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.sqrt(x)
                  </td>
                  <td class="px-4 py-2">
                    Devuelve la{" "}
                    <span class="text-yellow-400">raíz cuadrada</span> de x.
                  </td>
                  <td class="px-4 py-2">√x</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.cbrt(x)
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded text-xs ml-2">
                      ES2015
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    Devuelve la <span class="text-yellow-400">raíz cúbica</span>{" "}
                    de x.
                  </td>
                  <td class="px-4 py-2">∛x</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.imul(a, b)
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded text-xs ml-2">
                      ES2015
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    Equivalente a a * b, pero a nivel de bits.
                  </td>
                  <td class="px-4 py-2"></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.clz32(x)
                    <span class="bg-yellow-400 text-black px-2 py-1 rounded text-xs ml-2">
                      ES2015
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    Devuelve el número de ceros a la izquierda de x en binario
                    (32 bits).
                  </td>
                  <td class="px-4 py-2"></td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">Veamos algunos ejemplos :</p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-red-400">Math.abs</span>(
                <span className="text-red-400">-5</span>);{" "}
                <span className="text-gray-400">// 5</span>
              </p>

              <p>
                <span className="text-red-400">Math.sign</span>(
                <span className="text-red-400">-5</span>);{" "}
                <span className="text-gray-400">// -1</span>
              </p>

              <p>
                <span className="text-red-400">Math.exp</span>(
                <span className="text-red-400">1</span>);{" "}
                <span className="text-gray-400">
                  // e, o sea, 2.718281828459045
                </span>
              </p>

              <p>
                <span className="text-red-400">Math.expm1</span>(
                <span className="text-red-400">1</span>);{" "}
                <span className="text-gray-400">// 1.718281828459045</span>
              </p>

              <p>
                <span className="text-red-400">Math.max</span>(
                <span className="text-red-400">1, 40, 5, 15</span>);{" "}
                <span className="text-gray-400">// 40</span>
              </p>

              <p>
                <span className="text-red-400">Math.min</span>(
                <span className="text-red-400">5, 10, -2, 0</span>);{" "}
                <span className="text-gray-400">// -2</span>
              </p>

              <p>
                <span className="text-red-400">Math.pow</span>(
                <span className="text-red-400">2, 10</span>);{" "}
                <span className="text-gray-400">
                  // 1024 (Equivale a 2**10)
                </span>
              </p>

              <p>
                <span className="text-red-400">Math.sqrt</span>(
                <span className="text-red-400">2</span>);{" "}
                <span className="text-gray-400">
                  // 1.4142135623730951 (Equivale a Math.SQRT2)
                </span>
              </p>

              <p>
                <span className="text-red-400">Math.cbrt</span>(
                <span className="text-red-400">2</span>);{" "}
                <span className="text-gray-400">// 1.2599210498948732</span>
              </p>

              <p>
                <span className="text-red-400">Math.imul</span>(
                <span className="text-red-400">0xffffffff, 7</span>);{" "}
                <span className="text-gray-400">// -7</span>
              </p>

              <p>
                <span className="text-gray-400">
                  // Ejemplo de clz32 (count leading zeros)
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">1</span>;
              </p>
              <p>
                "0".<span className="text-blue-400">repeat</span>(
                <span className="text-red-400">Math.clz32</span>(
                <span className="text-red-400">x</span>)) +{" "}
                <span className="text-red-400">x.toString</span>(
                <span className="text-red-400">2</span>);
              </p>
              <p>
                <span className="text-gray-400">
                  // Devuelve "00000000000000000000000000000001"
                </span>
              </p>
            </div>
            <p className="mt-4">
              Existe uno más,{" "}
              <span className="text-yellow-500 font-bold">Math.random()</span>{" "}
              que merece una explicación más detallada, por lo que lo explicamos
              en el apartado siguiente.
            </p>

            <h3 className="mt-4">Método Math.random()</h3>
            <p>
              Uno de los métodos más útiles e interesantes del objeto Math es{" "}
              <span className="text-yellow-500 font-bold">Math.random()</span>.
            </p>

            <table className="w-full bg-slate-950 text-white">
              <thead class="bg-blue-900">
                <tr>
                  <th class="px-4 py-2 text-left">Método</th>
                  <th class="px-4 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.random()
                  </td>
                  <td class="px-4 py-2">
                    Devuelve un número al azar entre 0 y 1 con 16 decimales.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Normalmente, cuando queremos trabajar con números aleatorios, lo
              que buscamos es obtener un número entero al azar entre a y b. Para
              ello, se suele hacer lo siguiente:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-gray-400">
                  // Obtenemos un número al azar entre (0, 1) con 16 decimales
                </span>
              </p>
              <p>
                <span className="text-blue-400">let</span>{" "}
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">Math.random</span>();
              </p>

              <p>
                <span className="text-gray-400">
                  // Multiplicamos dicho número por el valor máximo que buscamos
                  (5)
                </span>
              </p>
              <p>
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">x</span> *{" "}
                <span className="text-red-400">5</span>;
              </p>

              <p>
                <span className="text-gray-400">
                  // Redondeamos inferiormente, quedándonos sólo con la parte
                  entera
                </span>
              </p>
              <p>
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">Math.floor</span>(
                <span className="text-red-400">x</span>);
              </p>
            </div>

            <p className="mt-4">
              Este ejemplo nos dará en x un valor al azar entre 0 y 5 (5 no
              incluido). Lo hemos realizado por pasos para entenderlo mejor,
              pero podemos realizarlo directamente como se ve en el siguiente
              ejemplo:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-gray-400">
                  // Número al azar entre 0 y 5 (no incluido)
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">Math.floor</span>(
                <span className="text-red-400">Math.random</span>() *{" "}
                <span className="text-red-400">5</span>);
              </p>

              <p>
                <span className="text-gray-400">
                  // Equivalente al anterior
                </span>
              </p>
              <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-red-400">x</span> ={" "}
                <span className="text-red-400">~~</span>(
                <span className="text-red-400">Math.random</span>() *{" "}
                <span className="text-red-400">5</span>);
              </p>
            </div>

            <p className="mt-4">
              Como vimos en el segundo ejemplo anterior, utilizamos el operador
              a nivel de bits{" "}
              <span className="text-yellow-500 font-bold"> ~~</span>(doble
              negación) como reemplazo rápido de{" "}
              <span className="text-yellow-500 font-bold">Math.floor()</span>,
              una función que realiza un redondeo inferior.
            </p>

            <div className="bg-red-950 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <p className="text-lg flex-grow">
                Si lo deseas, puedes utilizar librerías específicas para generar
                números aleatorios como
                <span className="text-red-600 font-bold"> random.js</span> o
                <span className="text-red-600 font-bold"> chance.js</span>, esta
                última permitiendo incluso generar otros tipos de datos
                aleatorios como textos, GUIDs o colores hexadecimales.
              </p>
              <Image
                src="/cabecera.png"
                alt="img cards"
                width={50}
                height={50}
                className="ml-4"
              />
            </div>

            <h3 className="mt-4">Métodos de redondeo</h3>
            <p>
              Como hemos visto anteriormente, es muy común necesitar métodos
              para redondear números y reducir el número de decimales o
              aproximar a una cifra concreta. Para ello, de forma nativa,
              Javascript proporciona los siguientes métodos de redondeo.
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
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.round(x)
                  </td>
                  <td className="px-4 py-2">
                    Devuelve x con redondeo (el entero más cercano).
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.ceil(x)
                  </td>
                  <td className="px-4 py-2">
                    Devuelve x con redondeo superior (el entero más alto).
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.floor(x)
                  </td>
                  <td className="px-4 py-2">
                    Devuelve x con redondeo inferior (el entero más bajo).
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.fround(x)
                  </td>
                  <td className="px-4 py-2">
                    Devuelve x con redondeo (flotante con precisión simple).
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">
                      NUMBER
                    </span>
                    Math.trunc(x)
                  </td>
                  <td className="px-4 py-2">
                    Trunca el número x (devuelve sólo la parte entera).
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Veamos las diferencias de utilizar los diferentes métodos
              anteriores para redondear un número decimal y los resultados
              obtenidos:
            </p>

            <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
              <p>
                <span className="text-gray-400">
                  // Redondeo natural, el más cercano
                </span>
              </p>
              <p>
                <span className="text-red-400">Math.round</span>(
                <span className="text-red-400">3.75</span>);{" "}
                <span className="text-gray-400">// 4</span>
              </p>
              <p>
                <span className="text-red-400">Math.round</span>(
                <span className="text-red-400">3.25</span>);{" "}
                <span className="text-gray-400">// 3</span>
              </p>

              <p>
                <span className="text-gray-400">
                  // Redondeo superior (el más alto)
                </span>
              </p>
              <p>
                <span className="text-red-400">Math.ceil</span>(
                <span className="text-red-400">3.75</span>);{" "}
                <span className="text-gray-400">// 4</span>
              </p>
              <p>
                <span className="text-red-400">Math.ceil</span>(
                <span className="text-red-400">3.25</span>);{" "}
                <span className="text-gray-400">// 4</span>
              </p>

              <p>
                <span className="text-gray-400">
                  // Redondeo inferior (el más bajo)
                </span>
              </p>
              <p>
                <span className="text-red-400">Math.floor</span>(
                <span className="text-red-400">3.75</span>);{" "}
                <span className="text-gray-400">// 3</span>
              </p>
              <p>
                <span className="text-red-400">Math.floor</span>(
                <span className="text-red-400">3.25</span>);{" "}
                <span className="text-gray-400">// 3</span>
              </p>

              <p>
                <span className="text-gray-400">// Redondeo con precisión</span>
              </p>
              <p>
                <span className="text-red-400">Math.round</span>(
                <span className="text-red-400">3.123456789</span>);{" "}
                <span className="text-gray-400">// 3</span>
              </p>
              <p>
                <span className="text-red-400">Math.fround</span>(
                <span className="text-red-400">3.123456789</span>);{" "}
                <span className="text-gray-400">// 3.1234567165374756</span>
              </p>

              <p>
                <span className="text-gray-400">
                  // Truncado (sólo parte entera)
                </span>
              </p>
              <p>
                <span className="text-red-400">Math.trunc</span>(
                <span className="text-red-400">3.75</span>);{" "}
                <span className="text-gray-400">// 3</span>
              </p>
              <p>
                <span className="text-red-400">Math.round</span>(
                <span className="text-red-400">-3.75</span>);{" "}
                <span className="text-gray-400">// -4</span>
              </p>
              <p>
                <span className="text-red-400">Math.trunc</span>(
                <span className="text-red-400">-3.75</span>);{" "}
                <span className="text-gray-400">// -3</span>
              </p>
            </div>

            <h3 className="mt-4">En JS tenemos otras librerías matemáticas:</h3>
            <p className="mt-4">
              Para problemas matemáticos complejos, usa librerías especializadas
              en lugar de implementaciones nativas. Les dejo algunas para que
              tengan en cuenta.
            </p>

            <table class="w-full bg-slate-950 text-white">
              <thead class="bg-blue-900">
                <tr>
                  <th class="px-4 py-2 text-left">Librería</th>
                  <th class="px-4 py-2 text-left">Descripción</th>
                  <th class="px-4 py-2 text-left">GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-yellow-300 font-mono underline cursor-pointer">
                      Math.js
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática de propósito general.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/josdejong/mathjs"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      josdejong/mathjs
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-white font-mono">Fraction.js</span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática para trabajar con fracciones.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/rawify/Fraction.js"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      rawify/Fraction.js
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-white font-mono">Polynomial.js</span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática para trabajar con polinomios.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/rawify/Polynomial.js"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      rawify/Polynomial.js
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-white font-mono">Complex.js</span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática para trabajar con números complejos.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/rawify/Complex.js"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      rawify/Complex.js
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-white font-mono">Angles.js</span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática para trabajar con ángulos.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/rawify/Angles.js"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      rawify/Angles.js
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="px-4 py-2">
                    <span class="text-white font-mono">BitSet.js</span>
                  </td>
                  <td class="px-4 py-2">
                    Librería matemática para trabajar con vectores de bits.
                  </td>
                  <td class="px-4 py-2">
                    <a
                      href="https://github.com/rawify/BitSet.js"
                      target="_blank"
                      class="text-yellow-300 underline cursor-pointer"
                    >
                      rawify/BitSet.js
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            
          </div>
        </div>
      </main>
    </div>
  );
}
