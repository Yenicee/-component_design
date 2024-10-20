import Link from "next/link";
import Image from "next/image";

export default function String() {

    return (
        <div className="flex p-10">
            <div className="w-1/3">
                <div className="sticky top-0">

                    <h2 className="text-lg font-semibold">Busca el artículo que quieres estudiar</h2>

                    <ul>
                        <Link href='#item_1'>
                            <li className="flex transition-colors duration-300 hover:text-blue-500">
                                <img src="DocFile.svg" alt="doc" className="mr-2" />¿Qué es un String?
                            </li>
                        </Link>
                        <Link href='#item_2'>
                            <li className="flex transition-colors duration-300 hover:text-blue-500">
                                <img src="DocFile.svg" alt="doc" className="mr-2" />Posiciones y substrings
                            </li>
                        </Link>
                        <Link href='#item_3'>
                            <li className="flex transition-colors duration-300 hover:text-blue-500">
                                <img src="DocFile.svg" alt="doc" className="mr-2" />Buscar y reemplazar
                            </li>
                        </Link>
                        <Link href='#item_4'>
                            <li className="flex transition-colors duration-300 hover:text-blue-500">
                                <img src="DocFile.svg" alt="doc" className="mr-2" />Modificar cadenas de texto
                            </li>
                        </Link>
                    </ul>


                    <div className="mt-48">
                        <hr className="border-indigo-300 py-2" style={{ width: '80%' }} />
                        <li className="flex">
                            <Link href="/" className="group flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ease-in-out text-blue-500 font-bold hover:text-blue-600 hover:underline">
                                <img
                                    src="/arrow.svg"
                                    alt="Flecha de regreso"
                                    className="w-4 h-4 transition-transform group-hover:-translate-x-1 filter-blue"
                                />
                                <span className="group-hover:underline">Volver al inicio</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>

            {/*Envuelve todas las paginas*/}
            <div className="w-5/6 container-global">
                {/*¿Que es un String?*/}
                <div id="item_1" className="mt-8">
                    <h2 id="item_H2" tabIndex='0'>«¿Qué es un String?»</h2>
                    <p>En programación, cuando hablamos de una varible que posee información de texto,
                        decimos que su tipo de dato es <span className="text-yellow-500 font-bold">string</span>. En Javascript, es muy sencillo crear una variable de texto.
                        A rasgos generales, hay dos formas principales de hacerlo:</p>

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
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">String</span>
                                    new String(text)
                                </td>
                                <td className="px-4 py-2">
                                    Crea un objeto de texto a partir del texto <span className="text-yellow-400">text</span> pasado por parámetro. Evitar.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">text</span>
                                    "texto"
                                </td>
                                <td className="px-4 py-2">
                                    Simplemente, escribimos el texto entre comillas simples o dobles. Notación preferida.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4">Para englobar los textos, se pueden utilizar tres tipos de comillas:</p>

                    <ul className="list-disc">
                        <li className="font-bold">• Comillas simples: '</li>
                        <li className="font-bold">• Comillas dobles: "</li>
                        <li className="font-bold">• Backticks: ` (ver más adelante, en Interpolación de variables)</li>
                    </ul>

                    <div className="bg-red-950 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
                        <p className="text-lg flex-grow">
                            Aunque es posible utilizar <span className="text-red-600 font-bold"> comillas simples</span> y <span className="text-red-600 font-bold">comillas dobles</span> en los string,
                            se recomienda decantarse por uno de los dos estilos y no mezclarlos.
                            Las empresas y equipos de desarrollo suelen tener guías para determinar cuál usar.
                        </p>
                        <Image
                            src="/cabecera.png"
                            alt="img cards"
                            width={50}
                            height={50}
                            className="ml-4"
                        />
                    </div>

                    <p className="mt-4">Veamos, un ejemplo de declaración de variables de texto:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p>
                            <span className="text-gray-400">// Notación literal (preferida)</span>
                        </p>
                        <p>
                            <span className="text-blue-400">const</span>
                            <span className="text-green-400"> text </span>
                            <span className="text-blue-400">=</span>
                            <span className="text-yellow-400"> "¡Hola a todos!"</span>;
                        </p>
                        <p>
                            <span className="text-blue-400">const</span>
                            <span className="text-green-400"> message </span>
                            <span className="text-blue-400">=</span>
                            <span className="text-yellow-400"> "Otro mensaje de texto"</span>;
                        </p>
                        <p>
                            <span className="text-gray-400">// Notación mediante objeto</span>
                        </p>
                        <p>
                            <span className="text-blue-400">const</span>
                            <span className="text-green-400"> text </span>
                            <span className="text-blue-400">=</span>
                            <span className="text-blue-400"> new </span>
                            <span className="text-green-400"> String</span>
                            <span className="text-yellow-400">("¡Hola a todos!")</span>;
                        </p>
                        <p>
                            <span className="text-blue-400">const</span>
                            <span className="text-green-400"> message </span>
                            <span className="text-blue-400">=</span>
                            <span className="text-blue-400"> new </span>
                            <span className="text-green-400"> String</span>
                            <span className="text-yellow-400">("Otro mensaje de texto")</span>;
                        </p>
                    </div>

                    <h3 className="mt-4">Propiedades de un string</h3>
                    <p>Al crear una variable con contenido de texto , automáticamente, esa variable pasa a tener a su disposición todas las <span className="text-yellow-500 font-bold">propiedades(variables)</span> y <span className="text-yellow-500 font-bold"> métodos(funciones)</span> disponibles para este tipo de dato.</p>
                    <table className="w-full bg-slate-950 text-white">
                        <thead class="bg-blue-900">
                            <tr>
                                <th class="px-4 py-2 text-left">Propiedad</th>
                                <th class="px-4 py-2 text-left">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-700">
                                <td class="px-4 py-2">
                                    <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">NUMBER</span>
                                    .length
                                </td>
                                <td class="px-4 py-2">
                                    Devuelve el número de carácteres totales del texto.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4">En el caso de los <span className="text-yellow-500 font-bold">strings</span>, solo tenemos una propiedad importante, <span className="text-yellow-500 font-bold">.length</span>, que se encarga de devolver el tamaño total de la cadena de texto en cuestión.</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p>
                            <span className="text-yellow-400">"Hola"</span>
                            <span className="text-blue-400">.length;</span>
                            <span className="text-gray-400">    // 4</span>
                        </p>
                        <p>
                            <span className="text-yellow-400">"Adiós"</span>
                            <span className="text-blue-400">.length;</span>
                            <span className="text-gray-400">   // 5</span>
                        </p>
                        <p>
                            <span className="text-yellow-400">""</span>
                            <span className="text-blue-400">.length;</span>
                            <span className="text-gray-400">        // 0</span>
                        </p>
                        <p>
                            <span className="text-yellow-400">"¡Yeah!"</span>
                            <span className="text-blue-400">.length;</span>
                            <span className="text-gray-400">  // 6</span>
                        </p>
                    </div>
                    <p>Nótese que se ha utilizado <span className="text-yellow-500 font-bold">string</span> directamente, sin necesidad de guardarlos en una variable.</p>

                    <h3 className="mt-4">Acceso a un carácter</h3>

                    <p>Si lo pensamos bien, un <span className="text-yellow-500 font-bold">string</span> está formado por carácteres, de forma que el texto <span className="text-yellow-500 font-bold">"Hola"</span>, esta formado por los carácteres <span className="text-gray-600 font-bold">"H", "o", "l" y "a"</span>. Si queremos acceder a cada uno de ellos, podemos utilizar el operador [] indicando la posición a la que queremos acceder:</p>
                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p>
                            <span className="text-blue-400">const</span>
                            <span className="text-green-400"> text </span>
                            <span className="text-blue-400">=</span>
                            <span className="text-yellow-400">"Hola"</span>;
                        </p>
                        <p>
                            <span className="text-green-400">text</span>
                            <span className="text-blue-400">[0];</span>
                            <span className="text-gray-400">      // "H"</span>
                        </p>
                        <p>
                            <span className="text-green-400">text</span>
                            <span className="text-blue-400">[1];</span>
                            <span className="text-gray-400">      // "o"</span>
                        </p>
                        <p>
                            <span className="text-green-400">text</span>
                            <span className="text-blue-400">[2];</span>
                            <span className="text-gray-400">      // "l"</span>
                        </p>
                        <p>
                            <span className="text-green-400">text</span>
                            <span className="text-blue-400">[4];</span>
                            <span className="text-gray-400">      // undefined</span>
                        </p>
                    </div>
                    <p className="mt-4">Si intentamos acceder a una <span className="text-yellow-500 font-bold">posición(índice)</span> que no existe, nos devolverá undefined (no está definido).</p>

                    <h3 className="mt-4">Interpolación de variables</h3>
                    <p>Si queremos <span className="text-yellow-500 font-bold">concatenar(unir)</span> varias cadenas de texto, podemos hacer algo parecido a esto:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Concatenación de cadenas</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">firstWord</span> = <span className="text-red-400">"frase"</span>;</p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">secondWord</span> = <span className="text-red-400">"concatenada"</span>;</p>
                        <p><span className="text-red-400">"Una "</span> + <span className="text-red-400">firstWord</span> + <span className="text-red-400">" bien "</span> + <span className="text-red-400">secondWord</span>; <span className="text-gray-400">// 'Una frase bien concatenada'</span></p>
                    </div>

                    <p className="mt-4">Bien cuando añadimos más variables o contenido, el código se puede hacer más complejo de leer, y si tenemos que concatenar elementos de un array, objetos, etc... Para evitar añadir complejidad innecesaria, se introducen
                        las <span className="text-yellow-500 font-bold">backticks</span>(comillas hacia atrás), que nos permitirán interpolar el valor de las variables sin tener que cerrar:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Concatenación de cadenas con plantillas literales</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">firstWord</span> = <span className="text-red-400">"frase"</span>;</p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">secondWord</span> = <span className="text-red-400">"concatenada"</span>;</p>
                        <p><span className="text-red-400">&#96;Una &#36;&#123;firstWord&#125; mejor &#36;&#123;secondWord&#125;&#96;</span>; <span className="text-gray-400">// 'Una frase mejor concatenada'</span></p>
                    </div>

                    <p className="mt-4">Es una funcionalidad muy simple, pero puede llegar a mejorar sustancialmente
                        la legibilidad de código generado, ademas veamos sus ventajas:</p>

                    <ul className="list-disc">
                        <li className="font-bold">• Permite <span className="text-yellow-500 font-bold">múltiples líneas</span>, algo que no se puede hacer con las demás comillas</li>
                        <li className="font-bold">• Permite interpolar expresiones Javascript <span className="text-gray-700">(no sólo variables)</span></li>
                        <li className="font-bold">• Permite interpolar el valor de variables <span className="text-gray-700">(ya mencionado)</span></li>
                    </ul>
                </div>

                {/* Posiciones y substrings*/}
                <div id="item_2" className="mt-8">
                    <h2 id="item_H2" tabIndex='0'>«Posiciones y substrings»</h2>
                    <p className="mt-4">Muy bien, en este apartado vamos a trabajar con los conceptos <span className="text-yellow-500 font-bold">substring</span> y <span className="text-yellow-500 font-bold">posición</span>. Aunque son bastante autoexplicativos, vamos a definirlos.</p>
                    <ul className="list-disc">
                        <li className="font-bold">• Un <span className="text-yellow-500 font-bold">substring</span> es un fragmento más pequeño que forma parte de un strings. También se suele hacer referencia a ellos como <span className="text-yellow-500 font-bold">subcadena</span> o <span className="text-yellow-500 font-bold">subcadena de texto</span>.</li>
                        <li className="font-bold">• Una posición (o índice) es un  que representa el lugar donde está ubicado un <span className="text-yellow-500 font-bold">substring</span>, teniendo en cuenta que se empieza a contar en 0. Así pues, la primera letra del tendría el índice 0, la segunda 1, la tercera 2, etc...</li>
                    </ul>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Substring y posición</span></p>
                        <p><span className="text-red-400">"Hola amigos"</span>       <span className="text-gray-400">// "amigos" es un substring</span></p>
                        <p><span className="text-red-400">"Hola amigos"</span>       <span className="text-gray-400">// la posición o índice de "amigos" es 5</span></p>
                        <p>^<span className="text-red-400">0123456789</span></p>
                    </div>

                    <h3 className="mt-4">Obtener posición o índice</h3>
                    <p>Existen varios métodos que permiten darnos información sobre la <span className="text-yellow-500 font-bold">posición</span> o <span className="text-yellow-500 font-bold">ubicación</span> que ocupa un determinado carácter o texto.
                        Como ya hemos mencionado, esta posición también suele denominarse <span className="text-yellow-500 font-bold">índice</span>.</p>

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
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .charAt(pos)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el carácter de la posición pos. Similar al operador [].
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .indexOf(text)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve la primera posición del texto text.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .indexOf(text, from)
                                </td>
                                <td className="px-4 py-2">
                                    Idem al anterior, partiendo desde la posición from.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .lastIndexOf(text)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve la última posición del texto text.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .lastIndexOf(text, from)
                                </td>
                                <td className="px-4 py-2">
                                    Idem al anterior, partiendo desde from hacia el inicio.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="mt-4">Carácter en cierta posición</h3>

                    <p>El método <span className="text-yellow-500 font-bold">.charAt(pos)</span> nos permite comprobar que carácter se encuentra en la posición pos del texto.
                        Este método devolverá un <span className="text-yellow-500 font-bold">string</span> con dicho carácter. En caso de pasarle una posición que no existe o imposible (negativa), simplemente nos devolverá un string vacío</p>

                    <p>No obstante, es preferible utilizar el operador [] para obtener el carácter que ocupa una posición, ya que es más corto y rápido de utilizar y mucho más claro.</p>
                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Utilizando .charAt</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">name</span> = <span className="text-red-400">"Soy Martin"</span>;</p>
                        <p><span className="text-red-400">name</span>.<span className="text-green-400">charAt</span>();      <span className="text-gray-400">// 'S'</span></p>
                        <p><span className="text-red-400">name</span>.<span className="text-green-400">charAt</span>(<span className="text-red-400">0</span>);     <span className="text-gray-400">// 'S'</span></p>
                        <p><span className="text-red-400">name</span>.<span className="text-green-400">charAt</span>(<span className="text-red-400">1</span>);     <span className="text-gray-400">// 'o'</span></p>
                        <p><span className="text-red-400">name</span>.<span className="text-green-400">charAt</span>(<span className="text-red-400">10</span>);    <span className="text-gray-400">// ''</span></p>

                        <p><span className="text-yellow-400">// Utilizando operador []</span></p>
                        <p><span className="text-red-400">name[]</span>;             <span className="text-gray-400">// ERROR</span></p>
                        <p><span className="text-red-400">name[0]</span>;            <span className="text-gray-400">// 'S'</span></p>
                        <p><span className="text-red-400">name[1]</span>;            <span className="text-gray-400">// 'o'</span></p>
                        <p><span className="text-red-400">name[10]</span>;           <span className="text-gray-400">// undefined</span></p>
                    </div>

                    <div className="bg-red-950 mt-4 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
                        <p className="text-lg flex-grow">
                            Observa que la diferencia de <span className="text-red-600 font-bold">.charAt()</span> y el operador <span className="text-red-600 font-bold">[]</span>, es que para posiciones donde no existe ningún carácter, el primero devuelve <span className="text-red-600 font-bold">"" (cadena de texto vacía)</span> mientras que el segundo devuelve <span className="text-red-600 font-bold">undefined</span>.
                        </p>
                        <Image
                            src="/cabecera.png"
                            alt="img cards"
                            width={50}
                            height={50}
                            className="ml-4"
                        />
                    </div>

                    <h3 className="mt-4">Posición de cierto carácter</h3>

                    <p>El método <span className="text-yellow-500 font-bold">.indexOf(text, from)</span> realiza la función «opuesta» a <span className="text-yellow-500 font-bold">charAt()</span>.
                        El método <span className="text-yellow-500 font-bold">.indexOf(text)</span> buscará el subtexto text en nuestro  y nos devolverá un  con la posición de la primera
                        aparición de dicho subtexto. En caso de no encontrarlo, devolverá -1.
                        El parámetro <span className="text-yellow-500 font-bold">from</span> es opcional, y es la posición en la que empezará a buscar, que si no se suministra, es 0.</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Utilizando .indexOf</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">phrase</span> = <span className="text-red-400">"LenguajeJS, página de Javascript"</span>;</p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">indexOf</span>(<span className="text-red-400">"n"</span>);          <span className="text-gray-400">// 2</span></p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">indexOf</span>(<span className="text-red-400">"n"</span>, <span className="text-red-400">3</span>);       <span className="text-gray-400">// 16</span></p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">indexOf</span>(<span className="text-red-400">"n"</span>, <span className="text-red-400">17</span>);      <span className="text-gray-400">// -1</span></p>
                    </div>

                    <h3 className="mt-4">Posición desde el final</h3>
                    <p>El método <span className="text-yellow-500 font-bold">lastIndexOf(text, from)</span> funciona exactamente igual que el anterior, sólo que realiza la búsqueda partiendo desde el final de la cadena de texto hacia el principio,
                        de modo que busca primero las últimas apariciones, en lugar de las primeras:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Utilizando .lastIndexOf</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">phrase</span> = <span className="text-red-400">"LenguajeJS, página de Javascript"</span>;</p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">lastIndexOf</span>(<span className="text-red-400">"n"</span>);          <span className="text-gray-400">// 16</span></p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">lastIndexOf</span>(<span className="text-red-400">"n"</span>, <span className="text-red-400">3</span>);       <span className="text-gray-400">// 2</span></p>
                        <p><span className="text-red-400">phrase</span>.<span className="text-green-400">lastIndexOf</span>(<span className="text-red-400">"n"</span>, <span className="text-red-400">1</span>);      <span className="text-gray-400">// -1</span></p>
                    </div>
                    <h3 className="mt-4">Obtener fragmentos(substrings)</h3>

                    <p>Tenemos una serie de métodos mediante los cuales podemos crear <span className="text-yellow-500 font-bold">substrings</span> formados por un fragmento del string original.
                        Veamos de que métodos se trata:</p>

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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .repeat(num)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el string repetido <code>num</code> veces.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .substring(start, end)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el substring desde la posición <code>start</code> hasta <code>end</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .substr(start, size)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el substring desde la posición <code>start</code> hasta <code>start + size</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .slice(start, end)
                                </td>
                                <td className="px-4 py-2">
                                    Idem a <code>.substr()</code> con leves diferencias.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="mt-4">Repetir cadena de texto</h3>
                    <p>Mediante el método <span className="text-yellow-500">.repeat()</span> puedes repetir el texto del string exactamente
                        el número de veces indicado por parámetro:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Utilizando .repeat</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">text</span> = <span className="text-red-400">"Programacion"</span>;</p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">repeat</span>(<span className="text-red-400">4</span>);          <span className="text-gray-400">// "ProgramacionProgramacionProgramacionProgramacion"</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">repeat</span>(<span className="text-red-400">1</span>);          <span className="text-gray-400">// "Programacion"</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">repeat</span>(<span className="text-red-400">0</span>);          <span className="text-gray-400">// ""</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">repeat</span>(<span className="text-red-400">-1</span>);         <span className="text-gray-400">// ERROR (Valor negativo)</span></p>
                    </div>

                    <h3 className="mt-4">Fragmento de texto(substring)</h3>
                    <p>Los métodos <span className="text-yellow-500 font-bold">substring()</span> y <span className="text-yellow-500 font-bold">substr()</span> permiten extraer fragmentos de texto en JavaScript:</p>
                    <ul className="list-disc">
                        <li className="font-bold">• El método <span className="text-yellow-500 font-bold">substring(start, end)</span>: devuelve el texto desde start hasta end. Si end se omite, devuelve hasta el final.</li>
                        <li className="font-bold">• El método <span className="text-yellow-500 font-bold">substr(start, size)</span>: devuelve el texto desde start con una longitud de size. Si size se omite, devuelve hasta el final.</li>
                    </ul>

                    <p className="mt-4">Veamos un ejemplo ilustrativo:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Utilizando .substring y .substr</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">text</span> = <span className="text-red-400">"Submarino"</span>;</p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substring</span>(<span className="text-red-400">3</span>);          <span className="text-gray-400">// 'marino' (desde el 3 en adelante)</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substring</span>(<span className="text-red-400">3</span>, <span className="text-red-400">5</span>);          <span className="text-gray-400">// 'ma'     (desde el 3, hasta el 5)</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substr</span>(<span className="text-red-400">3</span>);             <span className="text-gray-400">// 'marino' (desde el 3 en adelante)</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substr</span>(<span className="text-red-400">3</span>, <span className="text-red-400">5</span>);          <span className="text-gray-400">// 'marin'  (desde el 3, hasta el 3+5)</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substr</span>(<span className="text-red-400">-3</span>);            <span className="text-gray-400">// 'ino'    (desde la posición 3 desde el final, en adelante)</span></p>
                        <p><span className="text-red-400">text</span>.<span className="text-green-400">substr</span>(<span className="text-red-400">-3</span>, <span className="text-red-400">2</span>);         <span className="text-gray-400">// 'in'     (desde la posición 3 desde el final, hasta 2 posiciones más)</span></p>
                    </div>

                    <h3 className="mt-4">Dividir un texto en partes (array)</h3>
                    <p>Un método muy útil y versátil es .split(text). Permite dividir un string por el substring text utilizándolo como separador las veces que haga falta. Como resultado, devolverá un array con cada una de las partes divididas.
                        Es muy útil para crear arrays, o dividir textos que tienen separadores repetidos (comas, puntos, etc...) en varias partes:</p>

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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">ARRAY</span>
                                    .split(text)
                                </td>
                                <td className="px-4 py-2">
                                    Separa el texto en varias partes, usando <code>text</code> como separador.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">ARRAY</span>
                                    .split(text, limit)
                                </td>
                                <td className="px-4 py-2">
                                    Idem, pero crea como máximo Number <code>limit</code> fragmentos.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">ARRAY</span>
                                    .split(regexp)
                                </td>
                                <td className="px-4 py-2">
                                    Separa el texto usando la <code>regexp</code> como separador.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">ARRAY</span>
                                    .split(regexp, limit)
                                </td>
                                <td className="px-4 py-2">
                                    Idem, pero crea como máximo Number <code>limit</code> fragmentos.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4">Ahora ejemplos indicando un <code className="text-yellow-500 font-bold">STRING</code> como separador:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-gray-400">// Utilizando .split()</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result1</span> = <span className="text-red-400">"88.12.44.123"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">"." </span>);    <span className="text-gray-400">// ["88", "12", "44", "123"] (4 elementos)</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result2</span> = <span className="text-red-400">"1.2.3.4.5"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">"." </span>);    <span className="text-gray-400">// ["1", "2", "3", "4", "5"] (5 elementos)</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result3</span> = <span className="text-red-400">"Hola a todos"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">" "</span>);  <span className="text-gray-400">// ["Hola", "a", "todos"] (3 elementos)</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result4</span> = <span className="text-red-400">"A,B,C,D,E"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">",", 3</span>);  <span className="text-gray-400">// ["A", "B", "C"] (limitado a los 3 primeros elementos)</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result5</span> = <span className="text-red-400">"Código"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">""</span>);      <span className="text-gray-400">// ["C", "ó", "d", "i", "g", "o"] (6 elementos)</span></p>
                    </div>

                    <p className="mt-4">
                        Bien, tengamos en cuenta que también es posible indicar una <code className="text-yellow-500 font-bold">REGEXP</code>
                        como primer parámetro y no sólo un <code className="text-yellow-500 font-bold">STRING</code>, ya que permite realizar separaciones más versátiles y flexibles.
                    </p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Separa tanto por punto como por coma</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">result</span> = <span className="text-red-400">"123.45,67.890"</span>.<span className="text-green-400">split</span>(<span className="text-red-400">/[.,]/</span>);  <span className="text-gray-400">// ["123", "45", "67", "890"] (4 elementos)</span></p>
                    </div>

                </div>

                {/*Buscar y remplazar*/}
                <div id="item_3" className="mt-8">
                    <h2 id="item_H2" tabIndex='0'>«Buscar y reemplazar»</h2>
                    <p className="mt-4">En JavaScript, es común <span className="text-gray-600 font-bold">comprobar, buscar o reemplazar</span> texto. Es clave saber cuál necesitas usar, ya que cada operación tiene su propósito.
                        Aunque algunas pueden parecer más fáciles, es importante elegir la adecuada para evitar operaciones innecesarias:
                    </p>

                    <ul className="list-disc">
                        <li className="font-bold">•<span className="text-yellow-500 font-bold">Comprobación</span>:La más ligera de las tres. Sólo comprueba si existe el fragmento de texto.</li>
                        <li className="font-bold">•<span className="text-yellow-500 font-bold">Busqueda</span>:Busca un fragmento de texto y devuelve encontrado (posición, texto...).</li>
                        <li className="font-bold">•<span className="text-yellow-500 font-bold">Reemplazo</span>:Realiza una búsqueda de un texto y además un reemplazo. Suele ser más costoso.</li>
                    </ul>

                    <h3>Comprobación en textos</h3>
                    <p>Veamos metodos métodos se utilizan para realizar algún tipo de comprobación y saber si un fragmento de texto está incluído en un <span className="text-yellow-500 font-bold">String</span>.</p>
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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .startsWith(text, from)
                                </td>
                                <td className="px-4 py-2">
                                    Comprueba si el texto comienza por <code>text</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .endsWith(text, to)
                                </td>
                                <td className="px-4 py-2">
                                    Comprueba si el texto termina por <code>text</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .includes(text, from)
                                </td>
                                <td className="px-4 py-2">
                                    Comprueba si el texto contiene el subtexto <code>text</code>.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="bg-red-950 p-2 my-4 mt-5 rounded-lg shadow-md ">
                        <p className="text-white">
                            <span className="text-red-600 font-bold text-2xl"> Observa:</span>  que en cada método tienes un <span className="text-red-500 font-bold">segundo parámetro opcional</span>, donde se puede indicar desde donde quieres empezar a comprobar (en el caso de from), o hasta donde quieres comprobar (en el caso de to).
                        </p>
                    </div>

                    <ul className="list-disc">
                        <li className="font-bold">• <code className="text-yellow-500 font-bold">.startsWith(text)</code>: Devuelve <code className="text-yellow-500 font-bold">true</code> si la cadena comienza con text, de lo contrario devuelve <code className="text-yellow-500 font-bold">false</code>.</li>
                        <li className="font-bold">• <code className="text-yellow-500 font-bold">.endsWith(text)</code>: Devuelve <code className="text-yellow-500 font-bold">true</code> si la cadena termina con text, de lo contrario devuelve <code className="text-yellow-500 font-bold">false</code>.</li>
                        <li className="font-bold">• <code className="text-yellow-500 font-bold">.includes(text)</code>: Devuelve <code className="text-yellow-500 font-bold">true</code> si la cadena contiene text, de lo contrario devuelve <code className="text-yellow-500 font-bold">false</code>.</li>
                    </ul>

                    <p>Veamos ejemplos:</p>
                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Operaciones con cadenas</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">text</span> = <span className="text-red-400">"Código"</span>;</p>
                        <p><span className="text-gray-400"> text.startsWith("C")</span>; <span className="text-gray-200">true</span> <span className="text-gray-400">// 'Código' empieza por 'C'</span></p>
                        <p><span className="text-gray-400">text.startsWith("ó", 1)</span>; <span className="text-gray-200">true</span> <span className="text-gray-400">// 'ódigo' empieza por 'ó'</span></p>
                        <p><span className="text-gray-400">text.endsWith("o")</span>; <span className="text-gray-200">true</span> <span className="text-gray-400">// 'Código' acaba en 'o'</span></p>
                        <p><span className="text-gray-400">text.endsWith("g", 5)</span>; <span className="text-gray-200">true</span> <span className="text-gray-400">// 'Códig' acaba en 'g'</span></p>
                        <p><span className="text-gray-400">text.includes("di")</span>; <span className="text-gray-200">true</span> <span className="text-gray-400">// 'Código' incluye 'di'</span></p>
                        <p><span className="text-gray-400">text.includes("C", 1)</span>; <span className="text-gray-200">false</span> <span className="text-gray-400">// 'ódigo' no incluye 'C'</span></p>
                    </div>

                    <p>Ten en cuenta que los <code className="text-yellow-500 font-bold">number</code> del segundo parámetro, lo que hacen es acortar el <code className="text-yellow-500 font-bold">string</code> (por el inicio o por el final) antes de realizar la comprobación.</p>

                    <h3>Reemplazar cadenas de texto</h3>
                    <p>Si lo que necesitamos es reemplazar un texto, exite una serie de métodos, tanto en versión donde buscas mediante un <code className="text-yellow-500 font-bold">string</code> , como en versión donde buscas mediante una <code className="text-yellow-500 font-bold">regexp</code>:</p>

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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .replace(text, newText)
                                </td>
                                <td className="px-4 py-2">
                                    Reemplaza la primera aparición del <code>text</code> por <code>newText</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .replace(regexp, newText)
                                </td>
                                <td className="px-4 py-2">
                                    Idem, pero busca a partir de una <code>regexp</code> en lugar de un <code>text</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .replaceAll(text, newText)
                                </td>
                                <td className="px-4 py-2">
                                    Reemplaza todas las apariciones del texto <code>text</code> por <code>newText</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .replaceAll(regexp, newText)
                                </td>
                                <td className="px-4 py-2">
                                    Idem, pero busca a partir de una <code>regexp</code> en lugar de un <code>text</code>.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Reemplazar textos</h3>

                    <p>En este caso, usamos los métodos <code className="text-yellow-500 font-bold">.replace()</code> y <code className="text-yellow-500 font-bold">.replaceAll()</code>:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-gray-400">// Operaciones con cadenas</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">text</span> = <span className="text-red-400">"La programación es divertida"</span>;</p>

                        <p><span className="text-gray-400">// Reemplazar la primera ocurrencia</span></p>
                        <p><span className="text-blue-400">text.replace("a", "o")</span>; <span className="text-gray-400">"//Lo programación es divertida"</span></p>
                        <p><span className="text-blue-400">text.replace("o", "u").replace("e", "i")</span>; <span className="text-gray-400">"//La prugramaciún is divertida"</span></p>

                        <p><span className="text-gray-400">// Reemplazar todas las ocurrencias</span></p>
                        <p><span className="text-blue-400">text.replaceAll("a", "o")</span>; <span className="text-gray-400">"//Lo progrómoción es divertido"</span></p>
                        <p><span className="text-blue-400">text.replace(/i/g, "o")</span>; <span className="text-gray-400">"//La programación es dovertoda"</span></p>
                    </div>

                    <div className="bg-red-950 p-2 my-4 rounded-lg shadow-md">
                        <p className="text-white">
                            Ten en cuenta que <code className="text-red-600 font-bold">text</code> no cambia (<code className="text-red-400 font-bold">no muta</code>), es decir, el método <code className="text-red-600 font-bold">.replace()</code>
                            devuelve un nuevo string con el texto original reemplazado. En los ejemplos anteriores, cada línea
                            está actuando sobre la constante <code className="text-red-600 font-bold">text</code> de la primera línea.
                        </p>
                    </div>

                    <p>El primer grupo, reemplaza <span className="text-yellow-500 font-bold">sólo la primera ocurrencia</span> encontrada. Observa que el segundo ejemplo del primer grupo, encadenamos varios <code className="text-yellow-500 font-bold">.replace()</code> consecutivos, por lo que se reemplaza la primera ocurrencia de <code className="text-yellow-500 font-bold">g</code> por <code className="text-yellow-500 font-bold">p</code> y del resultado,
                        se reemplaza la primera ocurrencia de <code className="text-yellow-500 font-bold"> o</code> por <code className="text-yellow-500 font-bold">a</code>.</p>

                    <p>El segundo grupo, por su parte, se utiliza <code className="text-yellow-500 font-bold"> o</code> por <code className="text-yellow-500 font-bold">.replaceAll()</code> o <code className="text-yellow-500 font-bold"> o</code> por <code className="text-yellow-500 font-bold">.replace()</code> con una expresión regular global, por lo que se reemplazan todas las ocurrencias.</p>

                    <h3>Reemplazar todos los textos</h3>
                    <p>Como hemos dicho, la forma más potente de reemplazar todas las ocurrencias, es utilizando <code className="text-yellow-500 font-bold">.replace()</code> consecutivos, por lo que se reemplaza la primera ocurrencia de <code className="text-yellow-500 font-bold">.replace()</code> con una expresión regular global.
                        Las expresiones regulares permiten crear <code className="text-yellow-500 font-bold">patrones complejos</code> que coicindan en múltiples casos. Por ejemplo, el siguiente caso reemplaza todas las letras vocales por una letra <code className="text-yellow-500 font-bold">i</code>:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-gray-400">// Operaciones con cadenas</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">string_var</span> = <span className="text-red-400">"Javascript es un gran lenguaje"</span>;</p>

                        <p><span className="text-gray-400">// Reemplazar todas las vocales 'a', 'e', 'o', 'u' por 'i'</span></p>
                        <p><span className="text-blue-400">string_var.replace(/[aeou]/g, "i")</span>; <span className="text-gray-400">// 'Jiviscript is in grin lingiiji'</span></p>
                    </div>
                    <p>Es posible utilizar <code className="text-yellow-500 font-bold">replaceAll()</code>para reemplazar todas las ocurrencias de un texto o de una expresión regular. Funciona exactamente igual que <code className="text-yellow-500 font-bold">replace()</code>. </p>
                </div>

                {/*Modificar cadenas de texto*/}
                <div id="item_4" className="mt-8">
                    <h2 id="item_H2" tabIndex='0'>«Modificar cadenas de texto»</h2>
                    <p>Si tienes un array y necesitas modificar su contenido aplicando algún tipo de transformación,
                        este artículo te será de gran ayuda.
                        Aquí exploraremos métodos clave para realizar operaciones comunes que permiten modificar el array original de manera eficiente.</p>

                    <h3>Modificar strings</h3>
                    <p>Los siguientes métodos realizan algún tipo de operación de modificación sobre un <code className="text-yellow-500 font-bold">string</code>:</p>

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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .toLowerCase()
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> transformado a minúsculas.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .toUpperCase()
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> transformado a mayúsculas.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .padStart(size, text)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> rellenando el inicio con <code>text</code> hasta llegar al tamaño <code>size</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .padEnd(size, text)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> rellenando el final con <code>text</code> hasta llegar al tamaño <code>size</code>.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .trimStart()
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> eliminando espacios a la izquierda del texto.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .trimEnd()
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> eliminando espacios a la derecha del texto.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .trim()
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> eliminando espacios a la izquierda y derecha del texto.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Mayúsculas y minúsculas</h3>
                    <p>Los métodos <code className="text-yellow-500 font-bold">.toLowerCase()</code> y <code className="text-yellow-500 font-bold">.toUpperCase()</code> devuelven el  original, transformando todo el texto a minúsculas o a mayúsculas respectivamente:</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Transformación a mayúsculas y minúsculas</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">texto</span> = <span className="text-red-400">"JavaScript Es Versátil"</span>;</p>
                        <p><span className="text-blue-400">console.log</span>(texto.<span className="text-green-400">toLowerCase</span>());</p>
                        <p><span className="text-gray-400">// Resultado: "javascript es versátil"</span></p>
                        <p><span className="text-blue-400">console.log</span>(texto.<span className="text-green-400">toUpperCase</span>());</p>
                        <p><span className="text-gray-400">// Resultado: "JAVASCRIPT ES VERSÁTIL"</span></p>
                    </div>

                    <p className="mt-4">Estos métodos son útiles para normalizar texto, hacer comparaciones sin distinguir entre mayúsculas y minúsculas, o
                        para formatear texto según las necesidades de presentación.</p>

                    <h3>Relleno de cadenas</h3>
                    <p>En JavaScript, los métodos <code className="text-yellow-500 font-bold">.padStart(size, text)</code> y <code className="text-yellow-500 font-bold">.padEnd(size, text)</code> se usan para ampliar una cadena a un tamaño especificado (size)
                        añadiendo un carácter de relleno (text).</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Ejemplos de padStart</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">stringNumber</span> = <span className="text-red-400">"15"</span>;</p>

                        <p><span className="text-blue-400">console.log</span>(stringNumber.<span className="text-green-400">padStart</span>(<span className="text-purple-400">5</span>, <span className="text-red-400">"0"</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "00015"</span></p>

                        <p><span className="text-blue-400">console.log</span>(stringNumber.<span className="text-green-400">padStart</span>(<span className="text-purple-400">3</span>, <span className="text-red-400">"0"</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "015"</span></p>

                        <p><span className="text-blue-400">console.log</span>(stringNumber.<span className="text-green-400">padStart</span>(<span className="text-purple-400">2</span>, <span className="text-red-400">"0"</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "15"</span></p>

                        <p><span className="text-blue-400">console.log</span>(stringNumber.<span className="text-green-400">padStart</span>(<span className="text-purple-400">1</span>, <span className="text-red-400">"0"</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "15"</span></p>
                    </div>

                    <div className="bg-red-950 p-2 my-4 rounded-lg shadow-md">
                        <p className="text-white mt-2">
                            Estos métodos resultan especialmente interesantes para formatear horas.
                            Por ejemplo, si queremos que los números menores a 10 siempre aparezcan con dos
                            dígitos (<code className="text-red-600 font-bold">00</code>), en lugar de tener un formato variable. Para números entre 0 y 9,
                            se agrega un dígito 0 al inicio, mientras que los mayores a 9 mantendrán sus dos dígitos.
                        </p>
                    </div>

                    <h3>Eliminación de espacios sobrantes</h3>
                    <p>El método <code>.trim()</code> en JavaScript elimina los espacios en blanco al principio y al final de una cadena,
                        pero no afecta a los espacios entre los caracteres. Los métodos derivados <code className="text-yellow-500 font-bold">.trimStart()</code>y <code className="text-yellow-500 font-bold">.trimEnd() </code>
                        realizan la misma tarea, pero limitados a eliminar los espacios solo al principio o al final,
                        respectivamente.</p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Ejemplos de trim, trimStart, y trimEnd</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">text</span> = <span className="text-red-400">"  ¡Saludad a vuestro nuevo rey gato!  "</span>;</p>

                        <p><span className="text-blue-400">console.log</span>(text.<span className="text-green-400">trim</span>());</p>
                        <p><span className="text-gray-400">// Resultado: "¡Saludad a vuestro nuevo rey gato!"</span></p>

                        <p><span className="text-blue-400">console.log</span>(text.<span className="text-green-400">trimStart</span>());</p>
                        <p><span className="text-gray-400">// Resultado: "¡Saludad a vuestro nuevo rey gato!  "</span></p>

                        <p><span className="text-blue-400">console.log</span>(text.<span className="text-green-400">trimEnd</span>());</p>
                        <p><span className="text-gray-400">// Resultado: "  ¡Saludad a vuestro nuevo rey gato!"</span></p>

                        <p><span className="text-blue-400">console.log</span>(text.<span className="text-green-400">trimStart</span>().<span className="text-green-400">trimEnd</span>() === text.<span className="text-green-400">trim</span>());</p>
                        <p><span className="text-gray-400">// Resultado: true</span></p>
                    </div>

                    <h3>Alternativas para crear strings(concatenar)</h3>
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
                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs mr-2">STRING</span>
                                    .concat(text1, text2...)
                                </td>
                                <td className="px-4 py-2">
                                    Devuelve el <code>STRING</code> unido (concatenado) con las variables <code>text1</code>, <code>text2</code>, etc.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>El método <code>.concat(text1, text2...)</code> permite concatenar (unir) los textos pasados por parámetros al propio string en cuestión.La misma operación se lleva acabo cuando utilizamos el operador <code>+</code>
                        , mucho más legible.
                    </p>

                    <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 font-mono">
                        <p><span className="text-yellow-400">// Ejemplos de concat y operador +</span></p>
                        <p><span className="text-blue-400">const</span> <span className="text-red-400">name</span> = <span className="text-red-400">"Fruta"</span>;</p>

                        <p><span className="text-blue-400">// Utilizando método concat</span></p>
                        <p><span className="text-blue-400">console.log</span>(name.<span className="text-green-400">concat</span>(<span className="text-red-400">"s"</span>, <span className="text-red-400">"ito"</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "Frutasito"</span></p>

                        <p><span className="text-blue-400">console.log</span>(name.<span className="text-green-400">concat</span>(<span className="text-purple-400">4</span>, <span className="text-purple-400">5</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "Fruta45"</span></p>

                        <p><span className="text-blue-400">console.log</span>(name.<span className="text-green-400">concat</span>(<span className="text-purple-400">(4 + 5)</span>));</p>
                        <p><span className="text-gray-400">// Resultado: "Fruta9"</span></p>

                        <p><span className="text-blue-400">// Utilizando operador +</span></p>
                        <p><span className="text-blue-400">console.log</span>(name + <span className="text-red-400">"s"</span> + <span className="text-red-400">"ito"</span>);</p>
                        <p><span className="text-gray-400">// Resultado: "Frutasito"</span></p>

                        <p><span className="text-blue-400">console.log</span>(name + <span className="text-purple-400">4</span> + <span className="text-purple-400">5</span>);</p>
                        <p><span className="text-gray-400">// Resultado: "Fruta45"</span></p>

                        <p><span className="text-blue-400">console.log</span>(name + <span className="text-purple-400">(4 + 5)</span>);</p>
                        <p><span className="text-gray-400">// Resultado: "Fruta9"</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}