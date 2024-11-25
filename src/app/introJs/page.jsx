"use client"

import Link from "next/link";
import { useState } from "react";


export default function Intro() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const menuItems = [
        { href: '#item_1', text: '¿Que es Javascript?' },
        { href: '#item_2', text: '¿Como funciona Javascript?' },
        { href: '#item_3', text: 'Tipos de datos' },
        { href: '#item_4', text: 'Funciones' },
        { href: '#item_5', text: 'Operadores básicos y avanzados' }
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
            <main className={`transition-all duration-300 min-h-screen ${
                    isCollapsed ? 'ml-0' : 'ml-[200px]'
                }`}>
                <div className={`p-8 max-w-4xl mx-auto ${isCollapsed ? 'px-16' : ''}`}>
                    {/*Qué es Javascript */}
                    <section id='item_1' className="mb-16">
                        <h2 id="item_H2" tabindex="0">«¿Qué es Javascript?»</h2>
                        <p>Lenguaje de programación de la web:</p>
                        <p><span className="font-bold text-yellow-500">Javascript</span> es un <span className="text-yellow-500">lenguaje de programación</span>, o lo que es lo mismo, un mecanismo con el que podemos decirle a nuestro navegador que tareas debe realizar, en que orden y cuantas veces (por ejemplo).
                            Muchas de las tareas que realizamos con HTML y CSS se podrían realizar con Javascript. De hecho, es muy probable que al principio nos parezca que es mucho más complicado hacerlo con Javascript, y que por lo tanto no merece la pena. Sin embargo, con el tiempo veremos que Javascript nos ofrece una mayor flexibilidad y un abanico de posibilidades más grande, y que bien usadas, pueden ahorrarnos bastante tiempo.
                            Para comprenderlo, un ejemplo muy sencillo sería el siguiente:</p>

                        <h3>A tener en cuenta:</h3>

                        <p>Aunque <span className="font-bold text-yellow-500">Javascript</span> es ideal en muchos casos, es mucho más complicado aprender Javascript (o un lenguaje de programación de propósito general) que aprender HTML o CSS, los cuales son mucho más sencillos de comprender (o al menos, su base y fundamentos).</p>

                        <h3>Antes de continuar debemos conocer varias detalles:</h3>

                        <ul className="list-disc">
                            <li>• Para <span className="font-bold text-yellow-500">aprender Javascript</span> debemos conocer el lenguaje, pero no podremos hacerlo si no sabemos programar. Se puede aprender a programar con Javascript, pero es recomendable tener una serie de fundamentos básicos de programación antes para que no nos resulte muy duro.</li>
                            <li>• Para <span className="font-bold text-yellow-500">aprender a programar</span> antes debemos saber como «trabaja una máquina». Programar no es más que decirle a una máquina que cosas debe hacer y como debe hacerlas.</li>
                            <li>• Puedes <span className="font-bold text-yellow-500">copiar un programa</span> en segundos, pero eso no significa que lo entiendas.</li>
                            <li>• Puedes <span className="font-bold text-yellow-500">comprender un programa</span>  en minutos, pero eso no significa que lo puedas crear.</li>
                            <li>• Puedes <span className="font-bold text-yellow-500">un programa</span> crear  en horas, pero eso no significa que sepas programar.</li>
                            <li>• Puedes <span className="font-bold text-yellow-500">aprender a programar</span>  en semanas, pero eso no significa que no cometas errores.</li>
                            <li>• Puedes <span className="font-bold text-yellow-500"> aprender a programar bien y sin demasiados errores</span> en meses.</li>
                        </ul>

                        <p className="mt-4">«Pero <span className="font-bold text-yellow-500">dominar la programación</span>  es una tarea que requiere años.»</p>

                    </section>

                    {/*¿Cómo funciona Javascript?*/}
                    <section id='item_2' className="mt-8">
                        <h2 id="item_H2" >«¿Cómo funciona Javascript?»</h2>
                        <p>Una <span className="font-bold text-yellow-500">un documento HTML</span> página web es  que puede incluir referencias a archivos <span className="font-bold text-yellow-500">CSS y JavaScript</span> . El navegador descarga y aplica el CSS para cambiar la apariencia visual y ejecuta el <span className="font-bold text-yellow-500"> JavaScript</span> para realizar acciones.</p>

                        <h3>Script en línea</h3>

                        <div class="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span class="text-blue-500">&lt;html&gt;</span></p>
                            <p class="ml-4"><span class="text-blue-500">&lt;head&gt;</span></p>
                            <p class="ml-8"><span class="text-blue-500">&lt;title&gt;</span><span class="text-green-500">Título de la página</span><span class="text-blue-500">&lt;/title&gt;</span></p>
                            <p class="ml-4"><span class="text-blue-500">&lt;/head&gt;</span></p>
                            <p class="ml-4"><span class="text-blue-500">&lt;body&gt;</span></p>
                            <p class="ml-8"><span class="text-blue-500">&lt;h1&gt;</span><span class="text-green-500">Soy un encabezado h1.</span><span class="text-blue-500">&lt;/h1&gt;</span></p>
                            <p class="ml-8"><span class="text-blue-500">&lt;p&gt;</span><span class="text-green-500">Ejemplo de texto.</span><span class="text-blue-500">&lt;/p&gt;</span></p>
                            <p class="ml-4"><span class="text-blue-500">&lt;/body&gt;</span></p>
                            <p class="ml-8"><span class="text-blue-500">&lt;script </span><span class="text-yellow-500">src=</span><span class="text-red-500">"js/index.js"</span><span class="text-blue-500">&gt;&lt;/script&gt;</span></p>
                            <p><span class="text-blue-500">&lt;/html&gt;</span></p>
                        </div>

                        <p className="mt-4">El texto js/index.js no es más que una referencia a un archivo index.js que se encuentra dentro de una carpeta js, situada en la misma carpeta que el documento HTML del ejemplo.
                            asi esta bien explicado? para el codigo que voy a mostrar</p>

                        <h3>Ubicación de la etiqueta script</h3>
                        <p>Es posible que te hayas encontrado ejemplos donde dicha etiqueta esté ubicada en otra parte del documento HTML. Veamos las posibilidades:</p>

                        <table className="w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="px-4 py-2 text-left">Ubicación</th>
                                    <th className="px-4 py-2 text-left">¿Cómo descarga el archivo Javascript?</th>
                                    <th className="px-4 py-2 text-left">Estado de la página</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        En &lt;head&gt;
                                    </td>
                                    <td className="px-4 py-2">
                                        ANTES de empezar a dibujar la página.
                                    </td>
                                    <td className="px-4 py-2">
                                        Página aún no dibujada.
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        En &lt;body&gt;
                                    </td>
                                    <td className="px-4 py-2">
                                        DURANTE el dibujado de la página.
                                    </td>
                                    <td className="px-4 py-2">
                                        Dibujada hasta donde está la etiqueta &lt;script&gt;.
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        Antes de &lt;/body&gt;
                                    </td>
                                    <td className="px-4 py-2">
                                        DESPUÉS de dibujar la página.
                                    </td>
                                    <td className="px-4 py-2">
                                        Dibujada al 100%.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4">El navegador puede descargar un archivo JavaScript en diferentes momentos durante la carga de la página. Es importante elegir el momento más oportuno para optimizar el rendimiento de la página.</p>
                        <h3 className="mt-4">Recomendación:</h3>
                        <p>La ubicación más adecuada para la etiqueta <span class="font-bold text-yellow-500">&lt;script&gt;</span> es antes del cierre de la etiqueta <span className="font-bold text-yellow-500">&lt;/body&gt;</span>.Esto permite que la página se dibuje completamente antes de ejecutar el JavaScript, mejorando el tiempo de carga y la experiencia del usuario.</p>
                    </section>

                    {/*Tipos de datos*/}
                    <section id="item_3" className="mt-8">
                        <h2 id="item_H2" >«Tipos de datos»</h2>
                        <p>Los <span className="font-bold text-yellow-500">tipos de datos</span>  definen el contenido de una variable o constante. Por ejemplo, una variable con contenido <span className="font-bold text-yellow-500">90</span> es un número, y una con contenido <span className="font-bold text-yellow-500">"Hola Mundo"</span> su tipo de dato es texto.</p>
                        <h3>Los siguentes datos principales son:</h3>

                        <table className="w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="px-4 py-2 text-left">Tipo de dato</th>
                                    <th className="px-4 py-2 text-left">Descripción</th>
                                    <th className="px-4 py-2 text-left">Ejemplo básico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-sky-600 inline-block">
                                            <p className="text-white text-xs">Number</p>
                                        </div>
                                        Number
                                    </td>
                                    <td className="px-4 py-2">Valor numérico (enteros, decimales, etc...)</td>
                                    <td className="px-4 py-2">42</td>
                                </tr>

                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-gray-600 inline-block">
                                            <p className="text-white text-xs">BigInt</p>
                                        </div>
                                        BigInt
                                    </td>
                                    <td className="px-4 py-2">Valor numérico grande</td>
                                    <td className="px-4 py-2">1234567890123456789t</td>
                                </tr>

                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-yellow-800 inline-block">
                                            <p className="text-white text-xs">String</p>
                                        </div>
                                        String
                                    </td>
                                    <td className="px-4 py-2">Valor de texto (cadenas de texto, caracteres, etc...)</td>
                                    <td className="px-4 py-2">'MZ'</td>
                                </tr>

                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-red-600 inline-block">
                                            <p className="text-white text-xs">Boolean</p>
                                        </div>
                                        Boolean
                                    </td>
                                    <td className="px-4 py-2">Valor booleano (valores verdadero o falso)</td>
                                    <td className="px-4 py-2">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-zinc-700 inline-block">
                                            <p className="text-white text-xs">undefined</p>
                                        </div>
                                        undefined
                                    </td>
                                    <td className="px-4 py-2">Valor sin definir (variable sin inicializar)</td>
                                    <td className="px-4 py-2">undefined</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-orange-600 inline-block">
                                            <p className="text-white text-xs">Function</p>
                                        </div>
                                        Function
                                    </td>
                                    <td className="px-4 py-2">Función (función guardada en una variable)</td>
                                    <td className="px-4 py-2">function() &#123;&#125;</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-lime-700 inline-block">
                                            <p className="text-white text-xs">Symbol</p>
                                        </div>
                                        Symbol
                                    </td>
                                    <td className="px-4 py-2">Símbolo (valor único)</td>
                                    <td className="px-4 py-2">Symbol(1)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-indigo-800 inline-block">
                                            <p className="text-white text-xs">Object</p>
                                        </div>
                                        Object
                                    </td>
                                    <td className="px-4 py-2">Objeto (estructura más compleja)</td>
                                    <td className="px-4 py-2">&#123;&#125;</td>
                                </tr>
                            </tbody>
                        </table>


                        <p className="mt-6">Para saber que tipo de dato tiene una variable, debemos observar que valor le hemos dado. Si es un valor numérico, será de tipo number. Si es un valor de texto, será de tipo string, si es verdadero o falso, será de tipo booleano.</p>
                        <h3 className="mt-4">Veamos un ejemplo  en el que identificaremos que tipo de dato tiene cada variable:</h3>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-400">let</span> text = "Hola, me llamo Manz"; // Tipo de dato: string</p>
                            <p><span className="text-blue-400">let</span> number = 42; // Tipo de dato: number</p>
                            <p><span className="text-blue-400">let</span> boolean = true; // Tipo de dato: boolean</p>
                            <p><span className="text-blue-400">let</span> notDefined; // Tipo de dato: undefined</p>
                        </div>

                        <h3 className="mt-4">¿Qué tipo de dato tiene?</h3>
                        <p>
                            A veces no es fácil determinar el tipo de dato de una variable en JavaScript, especialmente si el valor proviene de una función u otra fuente oculta. Existen varias formas de identificar el tipo de dato de una variable.</p>

                        <h3>Utilizando typeof():</h3>
                        <p>Si tenemos dudas sobre el tipo de dato de una variable en JavaScript, podemos utilizar la función typeof. Esta función devuelve el tipo de dato de la variable que se le pasa como argumento. Veamos qué devuelve typeof para las variables del ejemplo anterior:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-indigo-200">console.log(<span className="text-blue-400">typeof</span> text);</span> // "string"</p>
                            <p><span className="text-indigo-200">console.log(<span className="text-blue-400">typeof</span> number);</span> // "number"</p>
                            <p><span className="text-indigo-200">console.log(<span className="text-blue-400">typeof</span> boolean);</span> // "boolean"</p>
                            <p><span className="text-indigo-200">console.log(<span className="text-blue-400">typeof</span> notDefined);</span> // "undefined"</p>
                        </div>

                        <div className="bg-red-950 p-2 my-4 mt-5 rounded-lg shadow-md ">
                            <p className="text-white">
                                <span className="text-red-600 font-bold text-2xl"> OJO:</span>  La función <span className="text-red-600 font-bold">typeof()</span>  no nos servirá para variables con <span className="text-red-600 font-bold">tipos de datos</span> más complejos, ya que siempre los mostrará como <span className="text-red-600 font-bold">object</span>. Es mejor utilizar <span className="text-red-600 font-bold">constructor.name</span>.
                            </p>
                        </div>

                        <h3>Utilizando constructor.name </h3>
                        <p>Más adelante, nos encontraremos que en muchos casos, <span className="font-bold text-yellow-500">typeof()</span> resulta insuficiente porque en tipos de datos más avanzados simplemente nos indica que son objetos. Con <span className="font-bold text-yellow-500">constructor.name</span>  podemos obtener el tipo de constructor que se utiliza, un concepto que veremos más adelante</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-indigo-200">console.log(text.constructor.name);</span> // String</p>
                            <p><span className="text-indigo-200">console.log(number.constructor.name);</span> // Number</p>
                            <p><span className="text-indigo-200">console.log(boolean.constructor.name);</span> // Boolean</p>
                            <p><span className="text-indigo-200">console.log(notDefined.constructor.name);</span> // ERROR, sólo funciona con variables definidas</p>
                        </div>

                        <div className="bg-red-950 p-2 my-4 mt-4">
                            <p className="text-white">
                                <span className="text-red-600 font-bold text-2xl"> OJO:</span> Sólo funciona en variables definidas  <span className="text-red-600 font-bold">(no undefined)</span> y sólo en  o superiores.
                            </p>
                        </div>

                        <p>Que Javascript determine los <span className="font-bold text-yellow-500">tipos de datos automáticamente </span> no quiere decir que no debamos preocuparnos por ello. En muchos casos, debemos conocer el tipo de dato de una variable e incluso necesitaremos convertirla a otros tipos de datos antes de usarla.</p>

                    </section>

                    {/*Funciones*/}
                    <section id="item_4" className="mt-8">
                        <h2 id="item_H2" >«¿Qué es una función?»</h2>
                        <p>Las <span className="text-yellow-500 font-bold ">funciones</span> nos permiten agrupar líneas de código en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer 2 cosas:</p>

                        <ul className="list-disc">
                            <li> <span className="font-bold text-yellow-500">Declarar la función</span>: Preparar la función, darle un nombre y decirle las tareas que realizará.</li>
                            <li> <span className="font-bold text-yellow-500">Ejecutar la función</span>: «Llamar» a la función para que realice las tareas de su contenido.</li>
                        </ul>

                        <p>En Javascript, las funciones son uno de los tipos de datos más importantes, ya que estamos continuamente utilizándolas a lo largo de nuestro código.

                            Y no, no me he equivocado ni he escrito mal el texto anterior; a continuación veremos que las funciones también pueden ser tipos de datos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p className="text-indigo-200">typeof function() &#123;&#125; //'function'</p>
                        </div>

                        <h3 className="mt-6">Tipos de funciones</h3>
                        <p>Hay varias formas de crear funciones en Javascript: por <span className="text-yellow-500 font-bold">declaración</span>(la más usada por principiantes), por <span className="text-yellow-500 font-bold">expresión</span>(la más habitual en programadores con experiencia) o mediante constructor de <span className="text-yellow-500 font-bold">objeto</span>(no recomendada):</p>

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
                                        <div className="rounded-xl bg-sky-600 inline-block">
                                            <p className="text-white text-xs">function</p>
                                        </div>
                                        function nombre(p1, p2...) &#123;&#125;
                                    </td>
                                    <td className="px-4 py-2">Crea una función mediante declaración.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-sky-600 inline-block">
                                            <p className="text-white text-xs">function</p>
                                        </div>
                                        var nombre = function(p1, p2...) &#123;&#125;;
                                    </td>
                                    <td className="px-4 py-2">Crea una función mediante expresión.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">
                                        <div className="rounded-xl bg-sky-600 inline-block">
                                            <p className="text-white text-xs">function</p>
                                        </div>
                                        new Function(p1, p2..., code);
                                    </td>
                                    <td className="px-4 py-2">Crea una función mediante un constructor de objeto.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="mt-4">Funciones por declaración</h3>
                        <p>Es la forma más popular de estas tres, y a la que estaremos acostumbrados si venimos de otros lenguajes de programación, es la primera, a la <span className="text-yellow-500 font-bold">creación de funciones por declaración</span>. </p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>function saludar() &#123;</p>
                            <p><span className="text-blue-400">return</span>'Hola';</p>
                            <p>&#125; </p>
                            <p>saludar(); //Hola</p>
                            <p> <span className="text-blue-300">typeof</span> saludar; //'function'</p>
                        </div>

                        <p className="mt-4">Ademas, podríamos ejecutar la función saludar() incluso antes de haberla creado y funcionaría correctamente, ya que Javascript primero busca las declaraciones de funciones y luego procesa el resto del código.</p>

                        <h3 className="mt-4">Funciones por expresión</h3>
                        <p>Ademas, en Javascript es muy habitual encontrarse códigos donde los programadores «guardan funciones» dentro de variables, para posteriormente «ejecutar dichas variables». Se trata de un enfoque diferente, creación de funciones por expresión, que fundamentalmente, hacen lo mismo con algunas diferencias:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>const saludo = function saludar()&#123;</p>
                            <p><span className="text-blue-300">return</span> "Hola";</p>
                            <p>&#125; </p>
                            <p>saludo(); //'Hola'</p>
                        </div>

                        <p className="mt-4">Podemos crear funciones dentro de <span className="text-yellow-500 font-bold"> variables</span>, lo que nos permite ejecutar la variable como si fuera una función. En este enfoque, el nombre de la función original se vuelve inútil. Por ejemplo, si intentamos ejecutar <span className="text-yellow-500 font-bold">saludar()</span>, no funcionará, pero <span className="text-yellow-500 font-bold">saludo()</span> sí lo hará. Esto sucede porque el nombre de la función se convierte en el nombre de la variable y el nombre original de la función desaparece. Estas son conocidas como <span className="text-yellow-500 font-bold">funciones anónimas</span> o <span className="text-yellow-500 font-bold">funciones lambda</span>.</p>

                        <h3 className="mt-4">Funciones como objetos</h3>
                        <p>Como curiosidad, debes saber que se pueden declarar funciones como si fueran objetos. Sin embargo, es un enfoque que no se suele utilizar en producción. Simplemente es interesante saberlo para darse cuenta que en Javascript todo pueden ser objetos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-500">const</span> saludar = new <span className="text-yellow-300">Function</span>("return 'Hola';");</p>
                            <p><span className="text-blue-300">saludar</span>(); // 'Hola'</p>
                        </div>

                        <h3 className="mt-4">Callbacks</h3>

                        <p>Podremos comprender más fácilmente como utilizar callbacks (también llamadas funciones callback o retrollamadas). A grandes rasgos, un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>//fB = Función B</p>
                            <p><span className="text-blue-500">const</span> fB = <span className="text-yellow-300">function</span>()&#123;</p>
                            <p>console.log("Función B ejecutada.");</p>
                            <p>&#125;</p>
                            <p>//fA = Función A</p>
                            <p><span className="text-blue-500">const</span> fA = <span className="text-yellow-300">function</span>(callback)&#123;</p>
                            <p>callback();</p>
                            <p>&#125;</p>
                            <p>fA(fB);</p>
                        </div>
                        <p className="mt-4">De hecho, los callbacks muchas veces son la primera estrategia que se suele utilizar en Javascript para trabajar la asincronía, uno de los temas que veremos más adelante:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>// fB = Función B (callback)</p>
                            <p><span className="text-blue-500">const</span> fB = <span className="text-yellow-300">function</span> () &#123;</p>
                            <p>  console.log(<span className="text-green-500">"Función B ejecutada."</span>);</p>
                            <p>&#125;;</p>
                            <p>// fError = Función Error (callback)</p>
                            <p><span className="text-blue-500">const</span> fError = <span className="text-yellow-300">function</span> () &#123;</p>
                            <p>  console.error(<span className="text-red-500">"Error"</span>);</p>
                            <p>&#125;;</p>
                            <p>// fA = Función A</p>
                            <p><span className="text-blue-500">const</span> fA = <span className="text-yellow-300">function</span> (callback, callbackError) &#123;</p>
                            <p>  <span className="text-blue-500">const</span> n = <span className="text-green-500">~~(Math.random() * 5)</span>;</p>
                            <p>  <span className="text-blue-500">if</span> (n &gt; 2) callback();</p>
                            <p>  <span className="text-blue-500">else</span> callbackError();</p>
                            <p>&#125;;</p>
                            <p>fA(fB, fError); <span className="text-green-500">// Si ejecutamos varias veces, algunas darán error y otras no</span></p>
                        </div>

                        <p className="mt-4">Viendo este ejemplo, podemos planear ejecutar la función fA() cambiando los callbacks según nos interese, sin necesidad de crear funciones con el mismo código repetido una y otra vez.</p>

                        <h3 className="mt-4">Arrow functions </h3>
                        <p>Las Arrow functions, funciones flecha o <span className="text-yellow-500 font-bold"> «fat arrow»</span> son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata de reemplazar eliminar la palabra function y añadir =&gt; antes de abrir las llaves:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300">function</span> () &#123;</p>
                            <p>  <span className="text-blue-500">return</span> <span className="text-green-500">"Función tradicional."</span>;</p>
                            <p>&#125;;</p>
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300">&#40;&#41; =&gt;</span> &#123;</p>
                            <p>  <span className="text-blue-500">return</span> <span className="text-green-500">"Función flecha."</span>;</p>
                            <p>&#125;;</p>
                        </div>

                        <h3 className="mt-6">Veamos los beneficios de las funciones flechas a la hora de simplificar código:</h3>

                        <div className="mt-4">
                            <ul className="list-disc">
                                <li>Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves (&#123;&#125;).</li>
                                <li>Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el <span className="text-yellow-500 font-bold">return</span>.</li>
                                <li>En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =&gt;.</li>
                                <li>En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =&gt;.</li>
                                <li>En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =&gt;.</li>
                                <li>Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: <span className="text-yellow-500 font-bold">(&#123;name:'Martin'&#125;)</span>.</li>
                            </ul>
                        </div>

                        <h3 className="mt-4">Ahora veamos ejemplos:</h3>
                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>// Función flecha sin parámetros y una sola línea</p>
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300">&#40;&#41; =&gt; "Función sin parámetros"</span>;</p>

                            <p>// Función flecha con un solo parámetro</p>
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300"> e = &gt;</span> <span className="text-green-500">`Función con parámetro: $&#123; e &#125;`</span>;</p>

                            <p>// Función flecha con dos parámetros</p>
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300">&#40;a, b&#41; =&gt;</span> <span className="text-green-500">`Suma: $&#123; a + b&#125;`</span>;</p>

                            <p>// Función flecha que devuelve un objeto</p>
                            <p><span className="text-blue-500">const</span> func = <span className="text-yellow-300">&#40;&#41; =&gt; &#40;&#123; name: 'Martin' &#125;&#41;</span>;</p>
                        </div>

                        <p className="mt-4">Las funciones flecha hacen que el código sea mucho más legible y claro de escribir, mejorando la productividad y la claridad a la hora de escribir código.</p>

                        <h2>Parámetros de una función</h2>
                        <p>Las funciones son mucho más flexibles y potentes de lo que hemos visto hasta ahora. A las funciones se les pueden pasar parámetros, que no son más que variables que les pasamos desde fuera hacia dentro de la función. Además, también podemos hacer que la función realice sus tareas y nos devuelva un resultado hacia el exterior de la función.</p>
                        <p className="mt-4">Veamos el siguiente ejemplo, donde utilizamos el parámetro hasta para indicar hasta donde debe llegar:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>//Declaración</p>
                            <p><span className="text-blue-500">function</span> tablaDelUno(hasta) &#123;</p>
                            <p>  <span className="text-blue-500">for</span> (<span className="text-blue-500">let</span> i = 0; i &lt;= hasta; i++) &#123;</p>
                            <p>    console.log(<span className="text-green-500">"1 x"</span>, i, <span className="text-green-500">"="</span>, 1 * i);</p>
                            <p>  &#125;</p>
                            <p>&#125;</p>

                            <p>//Ejecución</p>
                            <p>tablaDelUno(10); <span className="text-green-500">// Tabla del 1</span></p>
                            <p>tablaDelUno(5);  <span className="text-green-500">// Tabla del 1</span></p>
                        </div>

                        <p className="mt-4">Como podemos ver, en el interior de los paréntesis de la función se ha indicado una variable llamada hasta. Esa variable contiene el valor que se le da a la hora de ejecutar la función, que en este ejemplo, si nos fijamos bien, se ejecuta dos veces: una con valor 10 y otra con valor 5.</p>

                        <div className="bg-blue-950 p-2 my-4 ">
                            <p className="text-white ">Las funciones ayudan a enfocarnos en el código de la declaración, y una vez lo tengamos funcionando, nos podemos olvidar de él porque está <span className="text-blue-500 font-bold">encapsulado</span> dentro de la función. Simplemente tendremos que recordar el nombre de la función y los parámetros que hay que pasarle. Esto hace que sea mucho más fácil trabajar.</p>
                        </div>

                        <h3 className="mt-4">Parámetros múltiples</h3>
                        <p className="mt-2">Vamos a tener en cuenta que cuando creamos una función puede tener muchos más parámetros. Vamos a crear otro ejemplo, mucho más útil donde convertimos nuestra función en algo más práctico y útil: </p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>//Declaración</p>
                            <p><span className="text-blue-500">function</span> tablaMultiplicar(tabla, hasta) &#123;</p>
                            <p>  <span className="text-blue-500">for</span> (<span className="text-blue-500">let</span> i = 0; i &lt;= hasta; i++) &#123;</p>
                            <p>    console.log(tabla, <span className="text-green-500">"x"</span>, i, <span className="text-green-500">"="</span>, tabla * i);</p>
                            <p>&#125;</p>
                            <p>&#125;</p>

                            <p>//Ejecución</p>
                            <p>tablaMultiplicar(1, 10); <span className="text-green-500">// Tabla del 1</span></p>
                            <p>tablaMultiplicar(5, 10); <span className="text-green-500">// Tabla del 5</span></p>
                        </div>

                        <p>Esta función necesita que le pasemos dos parámetros: tabla (la tabla de multiplicar en cuestión) y hasta (el número hasta donde llegará la tabla de multiplicar).</p>

                        <div className="bg-blue-950 p-2 my-4 ">
                            <p className="text-white ">Podemos añadir <span className="text-blue-500 font-bold">más parámetros</span> a la función según nuestras necesidades. Es importante recordar que el orden de los parámetros es importante y que los nombres de cada parámetro no se pueden repetir en una misma función.</p>
                        </div>

                        <h3 className="mt-4">Devolución de valores</h3>
                        <p>Hasta ahora hemos utilizado funciones simples que realizan acciones o tareas <span className="text-gray-600 font-semibold">(en nuestro caso, mostrar por consola)</span>, pero habitualmente, lo que buscamos es que esa función realice una tarea y nos devuelva la información al exterior de la función, para así utilizarla o guardarla en una variable, que utilizaremos posteriormente para nuestros objetivos.</p>
                        <p>La palabra clave es <span className="text-yellow-500 font-bold">return</span>,suele colocarse al final de la función, ya que con dicha devolución terminamos la ejecución de la función. </p>

                        <p className="mt-4">Bien veamos ejemplo de esto:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>// Declaración de la función</p>
                            <p><span className="text-blue-500">function</span> <span className="text-yellow-300">sumar</span>(<span className="text-gray-400">a, b</span>) &#123;</p>
                            <p className="ml-4"><span className="text-blue-500">return</span> a + b; <span className="text-gray-400">// Devolvemos la suma de a y b al exterior</span></p>
                            <p className="ml-4">console.log(<span className="text-green-500">"Suma realizada."</span>); <span className="text-gray-400">// Este código nunca se ejecutará</span></p>
                            <p>&#125;</p>

                            <p>// Ejecución</p>
                            <p><span className="text-blue-500">const</span> <span className="text-yellow-300">resultado</span> = sumar(<span className="text-green-500">5, 5</span>); <span className="text-gray-400">// Se guarda 10 en la variable resultado</span></p>
                            <p>console.log(<span className="text-green-500">"Resultado = "</span>, resultado); <span className="text-gray-400">// Mostramos el resultado por consola</span></p>
                        </div>

                        <p className="mt-4">En este ultimo ejemplo, como podemos ver nos permite crear funciones más modulares y reutilizables que podremos utilizar en multitud de casos </p>

                    </section>

                    {/*Operadores básicos y avanzados*/}
                    <section id="item_5" className="mt-8">
                        <h2 id="item_H2">«Operadores básicos»</h2>
                        <p>Al trabajar con Javascript <span className="text-yellow-500 font-bold">(o con cualquier lenguaje de programación)</span>, es muy habitual hacer uso de los llamados operadores. Se trata de unos símbolos que nos permitirán hacer una serie de operaciones con uno o más operadores <span className="text-yellow-500 font-bold">(generalmente, números)</span>.</p>

                        <p className="mt-4">Vamos a desglosar los <span className="text-yellow-500 font-bold">operadores básicos</span> en una serie de bloques y a explicarlos para que se entienda lo mejor posible:</p>

                        <ul className="mt-4 list-disc">
                            <li><span className="text-yellow-500 font-bold">Aritméticos</span>: Operadores para realizar operaciones matemáticas.</li>
                            <li><span className="text-yellow-500 font-bold">Asignación</span>: Operadores para guardar información en variables.</li>
                            <li><span className="text-yellow-500 font-bold">Unarios</span>: Operadores que se utilizan con un sólo operando.</li>
                            <li><span className="text-yellow-500 font-bold">Comparación</span>: Operadores para realizar comprobaciones.</li>
                            <li><span className="text-yellow-500 font-bold">Binarios</span>: Operadores a bajo nivel (a nivel de bits).</li>
                        </ul>

                        <h3 className="mt-4">Operadores aritméticos</h3>
                        <p>Los operadores aritméticos son símbolos utilizados en la programación y en las matemáticas para realizar operaciones sobre valores numéricos.</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Suma</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a + b</span>
                                    </td>
                                    <td className="px-4 py-2">Suma el valor de a al valor de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Resta</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a - b</span>
                                    </td>
                                    <td className="px-4 py-2">Resta el valor de b al valor de a.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Multiplicación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a * b</span>
                                    </td>
                                    <td className="px-4 py-2">Multiplica el valor de a por el valor de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">División</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a / b</span>
                                    </td>
                                    <td className="px-4 py-2">Divide el valor de a entre el valor de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Módulo</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a % b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve el resto de la división de a entre b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Exponenciación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a ** b</span>
                                    </td>
                                    <td className="px-4 py-2">Eleva a a la potencia de b, es decir, a^b. Equivalente a Math.pow(a, b).</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="bg-red-950 p-2 my-4 mt-5 ">
                            <p className="text-white">
                                <span className="text-red-600 font-bold text-2xl"> OJO:</span> Menos frecuentes suelen ser el <span className="text-red-600 font-bold">módulo</span> o la <span className="text-red-600 font-bold">exponenciación</span>, sin embargo, muy útiles en algunas situaciones.
                            </p>
                        </div>

                        <h3 className="mt-4">Operadores de asignación</h3>

                        <p>Estos <span className="text-yellow-500 font-bold">operadores</span> nos permiten asignar valores a variables utilizando el símbolo <span className="text-yellow-500 font-bold">"="</span>, como en matemáticas. Sin embargo, también existen contracciones para realizar operaciones de forma más concisa:</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">c = a + b</span>
                                    </td>
                                    <td className="px-4 py-2">Asigna el valor de la parte derecha (en este ejemplo, una suma) a c.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Suma y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a += b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a + b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Resta y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a -= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a - b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Multiplicación y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a *= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a * b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">División y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a /= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a / b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Módulo y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a %= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a % b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Exponenciación y asignación</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a **= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a = a ** b.</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4">Por ejemplo, realizar la asignación <span className="text-yellow-500 font-bold">a = a * b</span> sería lo mismo que escribir <span className="text-yellow-500 font-bold"> a *= b</span>, sólo que esta última está escrita de una forma más resumida.</p>

                        <h3 className="mt-4">Operadores unarios</h3>

                        <p>Son aquellos que en lugar de tener <span className="text-yellow-500 font-bold">dos operandos</span>, como los anteriores, sólo tienen <span className="text-yellow-500 font-bold">uno</span>. Es decir, se realizan sobre un sólo valor almacenado en una variable.</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Incremento</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a++</span>
                                    </td>
                                    <td className="px-4 py-2">Usa el valor de a y luego lo incrementa. También llamado postincremento.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Decremento</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a--</span>
                                    </td>
                                    <td className="px-4 py-2">Usa el valor de a y luego lo decrementa. También llamado postdecremento.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Incremento previo</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">++a</span>
                                    </td>
                                    <td className="px-4 py-2">Incrementa el valor de a y luego lo usa. También llamado preincremento.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Decremento previo</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">--a</span>
                                    </td>
                                    <td className="px-4 py-2">Decrementa el valor de a y luego lo usa. También llamado predecremento.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Resta unaria</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">-a</span>
                                    </td>
                                    <td className="px-4 py-2">Cambia de signo (niega) a a.</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4">Los <span className="text-yellow-500 font-bold">operadores</span> de <span className="text-yellow-500 font-bold">preincremento (++a)</span> y <span className="text-yellow-500 font-bold">postincremento (a++)</span> son herramientas comunes para incrementar variables en programación. Cuando usamos el <span className="text-yellow-500 font-bold">preincremento (++a)</span>, primero aumentamos el valor de la variable y luego usamos el nuevo valor en la expresión. Por otro lado, con el <span className="text-yellow-500 font-bold"> postincremento (a++)</span>, primero usamos el valor actual de la variable en la expresión y luego incrementamos la variable.</p>

                        <h3 className="mt-4">Operadores de comparación</h3>
                        <p>Estas expresiones de comparación se utilizan en el código, especialmente dentro de estructuras como <span className="text-yellow-500 font-bold">"if"</span>, para realizar comprobaciones. Devuelven un <span className="text-yellow-500 font-bold">booleano</span>, con valor de <span className="text-yellow-500 font-bold">true</span> o <span className="text-yellow-500 font-bold">false</span>.</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador de igualdad ==</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a == b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a es igual al de b. No comprueba tipo de dato.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador de desigualdad !=</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a != b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a no es igual al de b. No comprueba tipo de dato.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador mayor que &gt;</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &gt; b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a es mayor que el de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador mayor/igual que &gt;=</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &gt;= b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a es mayor o igual que el de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador menor que &lt;</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &lt; b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a es menor que el de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador menor/igual que &lt;=</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &lt;= b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor de a es menor o igual que el de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador de identidad ===</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a === b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor y el tipo de dato de a es igual al de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador no idéntico !==</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a !== b</span>
                                    </td>
                                    <td className="px-4 py-2">Comprueba si el valor y el tipo de dato de a no es igual al de b.</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="mt-4">Recuerda que hay diferencia entre <span className="text-yellow-500 font-bold">== (igualdad)</span>  y <span className="text-yellow-500 font-bold"> === (identidad)</span>. Mientras que el primero sólo comprueba el valor de la comparación, el segundo comprueba <span className="text-yellow-500 font-bold">el valor y el tipo de dato</span> de la comparación.</p>

                        <p>Veamos un breve ejemplo:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p>5 == 5 <span className="text-green-400">// true (ambos son iguales, coincide su valor)</span></p>
                            <p>"5" == 5 <span className="text-green-400">// true (ambos son iguales, coincide su valor)</span></p>
                            <p>5 === 5 <span className="text-green-400">// true (ambos son idénticos, coincide su valor y su tipo de dato)</span></p>
                            <p>"5" === 5 <span className="text-green-400">// false (no son idénticos, coincide su valor, pero no su tipo de dato)</span></p>
                        </div>

                        <h3 className="mt-4">Operadores binarios</h3>
                        <p>Aunque no es algo que se utilice demasiado, existen los denominados <span className="text-yellow-500 font-bold">operadores a nivel de bit</span>.Son una serie de operadores que nos permiten realizar operaciones básicas trabajando a nivel binario, donde los operandos solo pueden tomar valores de 0 o 1.</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador AND</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a & b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve 1 si ambos operandos son 1.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador OR</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a | b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve 1 si al menos un operando es 1.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador XOR (OR exclusivo)</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a ^ b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve 1 si ambos operandos son diferentes.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador NOT (unario)</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">~a</span>
                                    </td>
                                    <td className="px-4 py-2">Invierte los bits del operando (por ejemplo, 000101 pasa a 111010). Trunca a 32 bits.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador LEFT SHIFT</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &lt;&lt; b</span>
                                    </td>
                                    <td className="px-4 py-2">Desplazamiento de bits hacia la izquierda. Ej: 11 (3) pasa a 110 (6).</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador RIGHT SHIFT</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &gt;&gt; b</span>
                                    </td>
                                    <td className="px-4 py-2">Desplazamiento de bits hacia la derecha. Ej: 11 (3) pasa a 1 (1).</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador RIGHT SHIFT sin signo</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a &gt;&gt;&gt; b</span>
                                    </td>
                                    <td className="px-4 py-2">Desplazamiento de bits hacia la derecha, como un operador sin signo.</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Los tres primeros suelen ser los más habituales, donde podríamos crear las llamadas tablas de verdad, sin embargo, también podemos combinarlo con el NOT y conseguir variaciones.</p>
                        <div className="bg-red-950 p-2 my-4 mt-5 ">
                            <p className="text-white">
                                <span className="text-red-600 font-bold text-2xl"> OJO:</span> Ten en cuenta que los operadores a <span className="text-red-600 font-bold">nivel de bit</span> son más complejos y pueden utilizarse en Javascript con valores diferentes de 0 y 1, por lo que necesitaríamos más conocimientos de como operar con <span className="text-red-600 font-bold">números binarios</span> y sus fundamentos.
                            </p>
                        </div>

                        <h2 id="item_H2">«Operadores avanzados»</h2>
                        <p>Los operadores avanzados permiten realizar operaciones más complejas y específicas que las básicas aritméticas. Algunos de estos operadores incluyen:</p>

                        <ul className="list-disc">
                            <li>• <span className="text-yellow-500 font-bold">Operadores de Strings</span>: Operaciones con variables y/o string</li>
                            <li>• <span className="text-yellow-500 font-bold">Operadores lógicos</span>: Como trabajar con valores boolean o similares</li>
                            <li>• <span className="text-yellow-500 font-bold">Otros operadores</span>: Otros operadores sin relación directa con los apartados anteriores</li>
                        </ul>

                        <h3 className="mt-4">Operadores de Strings</h3>
                        <p>Estos operadores se utilizan con valores que no son numéricos, por ejemplo, con string, veamos: </p>


                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Concatenación de texto</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a + b</span>
                                    </td>
                                    <td className="px-4 py-2">Une el contenido de a con el contenido de b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Conversión a número (Suma unaria)</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">+a</span>
                                    </td>
                                    <td className="px-4 py-2">Si a no es un número, intenta convertirlo en un número.</td>
                                </tr>
                            </tbody>
                        </table>


                        <h3 className="mt-4">Operadores lógicos</h3>
                        <p>Utilizados en su forma básica, sin embargo, tienen bastantes particularidades y matices, que intentaré explicar en esta sección. Dentro del apartado de operadores lógicos tenemos los siguientes:</p>

                        <table className="table-auto w-full bg-slate-950 text-white mt-6">
                            <thead className="bg-blue-900">
                                <tr>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Operador</th>
                                    <th className="border border-gray-700 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador lógico AND</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a && b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve a si es false, sino devuelve b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador ternario ?: </td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a ? b : c</span>
                                    </td>
                                    <td className="px-4 py-2">Si a es true, devuelve b, sino devuelve c.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador lógico OR</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a || b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve a si es true, sino devuelve b.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador lógico Nullish coalescing</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a ?? b</span>
                                    </td>
                                    <td className="px-4 py-2">Devuelve b si a es null o undefined, sino devuelve a.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador de asignación lógica nula ??=</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">a ??= b</span>
                                    </td>
                                    <td className="px-4 py-2">Es equivalente a a ?? (a = b).</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador de encadenamiento opcional ?.</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">data?.name</span>
                                    </td>
                                    <td className="px-4 py-2">Permite intentar acceder a una propiedad, aunque su padre no exista.</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-2">Operador unario lógico NOT</td>
                                    <td className="px-4 py-2">
                                        <span className="text-indigo-400 font-semibold">!a</span>
                                    </td>
                                    <td className="px-4 py-2">Invierte el valor. Si es true devuelve false y viceversa.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="mt-4">Operador AND lógico</h3>
                        <p>Establece una condición donde devolverá el primer valor si es false, o el segundo valor si el primero es true.</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-red-400">false</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">false</span> <span className="text-yellow-400">// false (si ninguno de los dos es true, false)</span></p>
                            <p><span className="text-red-400">true</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">false</span> <span className="text-yellow-400">// false (idem)</span></p>
                            <p><span className="text-red-400">false</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">true</span> <span className="text-yellow-400">// false (idem)</span></p>
                            <p><span className="text-red-400">true</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">true</span> <span className="text-yellow-400">// true (si ambos son true, true)</span></p>
                        </div>

                        <p className="mt-4 font-semibold">veamos mas ejemplos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-red-400">0</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">undefined</span> <span className="text-yellow-400">// 0 (se evalúa como false && false, devuelve el primero)</span></p>
                            <p><span className="text-red-400">undefined</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">0</span> <span className="text-yellow-400">// undefined (se evalúa como false && false, devuelve el primero)</span></p>
                            <p><span className="text-red-400">55</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">null</span> <span className="text-yellow-400">// null (se evalúa como true && false, devuelve el segundo)</span></p>
                            <p><span className="text-red-400">null</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">55</span> <span className="text-yellow-400">// null (se evalúa como false && true, devuelve el primero)</span></p>
                            <p><span className="text-red-400">44</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-red-400">20</span> <span className="text-yellow-400">// 20 (se evalúa como true && true, devuelve el segundo)</span></p>
                        </div>

                        <p className="mt-4">Veamos algunos ejemplos de como utilizarlo.No obstante, ten en cuenta que este patrón puede ser interesante en algunos casos simples, pero en otros puede complicar la <span className="text-yellow-500 font-bold">legibilidad de código</span>.</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-red-400">60</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-green-400">"OK"</span> <span className="text-yellow-400">// "OK"</span></p>
                            <p><span className="text-red-400">false</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-green-400">"OK"</span> <span className="text-yellow-400">// false</span></p>
                            <p className="mt-4"><span className="text-blue-400">const</span> <span className="text-green-400">doTask</span> <span className="text-blue-400">=</span> <span className="text-yellow-400">()</span> <span className="text-blue-400">=&#62;</span> <span className="text-green-400">"OK!"</span><span className="text-yellow-400">; </span> <span className="text-gray-400">// Creamos función que devuelve "OK!"</span></p>
                            <p><span className="text-red-400">isCorrect</span> <span className="text-blue-400">&amp;&amp;</span> <span className="text-green-400">doTask()</span> <span className="text-gray-400">// Si isCorrect es true, ejecuta doTask()</span></p>
                        </div>

                        <h3 className="mt-4">Operador ternario</h3>
                        <p>Es una especie de if compacto que tienen la mayoría de los lenguajes de programación, donde en lugar de utilizar un if / else tradicional, para escribir en varias líneas, podemos hacerlo mediante el operador ternario. Su estructura es la siguiente:</p>
                        <p className="text-yellow-900 font-semibold">(condición) ? valor verdadero : valor falso.</p>
                        <p>Veamos como la utilizaríamos, comparándolo con un if:</p>
                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-gray-400">// Sin operador ternario</span></p>
                            <p><span className="text-blue-400">let</span> <span className="text-green-400">role</span><span className="text-yellow-400">;</span></p>
                            <p><span className="text-blue-400">if</span> <span className="text-yellow-400">(</span><span className="text-red-400">name</span> <span className="text-blue-400">===</span> <span className="text-green-400">"Martin"</span><span className="text-yellow-400">)</span> <span className="text-yellow-400">&#123;</span></p>
                            <p className="ml-4"><span className="text-red-400">role</span> <span className="text-blue-400">=</span> <span className="text-green-400">"Chemical Engineer"</span><span className="text-yellow-400">;</span></p>
                            <p><span className="text-yellow-400">&#125;</span> <span className="text-blue-400">else</span> <span className="text-yellow-400">&#123;</span></p>
                            <p className="ml-4"><span className="text-red-400">role</span> <span className="text-blue-400">=</span> <span className="text-green-400">"user"</span><span className="text-yellow-400">;</span></p>
                            <p><span className="text-yellow-400">&#125;</span></p>
                            <p className="mt-4"><span className="text-gray-400">// Con operador ternario</span></p>
                            <p><span className="text-blue-400">const</span> <span className="text-green-400">role</span> <span className="text-blue-400">=</span> <span className="text-red-400">name</span> <span className="text-blue-400">===</span> <span className="text-green-400">"Martin"</span> <span className="text-blue-400">?</span> <span className="text-green-400">"Chemical Engineer"</span> <span className="text-blue-400">:</span> <span className="text-green-400">"user"</span><span className="text-yellow-400">;</span></p>
                        </div>

                        <p className="font-semibold mt-4">Veamos otro ejemplo del como usar este operador:</p>
                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-400">let</span> <span className="text-green-400">nota</span> <span className="text-blue-400">=</span> <span className="text-red-400">7</span><span className="text-yellow-400">;</span></p>
                            <p><span className="text-green-400">console</span><span className="text-blue-400">.</span><span className="text-yellow-400">log</span><span className="text-yellow-400">(</span><span className="text-green-400">"He realizado mi examen. Mi resultado es el siguiente:"</span><span className="text-yellow-400">);</span></p>
                            <p className="mt-4"><span className="text-gray-400">// Operador ternario: (condición ? verdadero : falso)</span></p>
                            <p><span className="text-blue-400">let</span> <span className="text-green-400">calificacion</span> <span className="text-blue-400">=</span> <span className="text-red-400">nota</span> <span className="text-blue-400">&lt;</span> <span className="text-red-400">5</span> <span className="text-blue-400">?</span> <span className="text-green-400">"suspendido"</span> <span className="text-blue-400">:</span> <span className="text-green-400">"aprobado"</span><span className="text-yellow-400">;</span></p>
                            <p><span className="text-green-400">console</span><span className="text-blue-400">.</span><span className="text-yellow-400">log</span><span className="text-yellow-400">(</span><span className="text-green-400">"Estoy"</span><span className="text-yellow-400">,</span> <span className="text-red-400">calificacion</span><span className="text-yellow-400">);</span></p>
                        </div>

                        <p className="mt-4">La idea del operador ternario es que podemos condensar mucho código y tener un if en una sola línea. Es muy práctico, legible e ideal para ejemplos pequeños donde almacenamos la información en una variable para luego utilizarla.</p>

                        <h3 className="mt-4">Operador OR lógico</h3>

                        <p>Establece una condición donde devolverá el primer valor si es true, o el segundo valor si el primero es false. Esto se puede leer de forma que <span className="text-yellow-500 font-bold">«devuelve a (si es verdadero), o si no, b»</span>.</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-red-400">false</span> <span className="text-blue-400">||</span> <span className="text-red-400">false</span> <span className="text-yellow-400">// false (si ninguno de los dos es true, false)</span></p>
                            <p><span className="text-red-400">true</span> <span className="text-blue-400">||</span> <span className="text-red-400">false</span> <span className="text-yellow-400">// true (desde que uno sea true, true)</span></p>
                            <p><span className="text-red-400">false</span> <span className="text-blue-400">||</span> <span className="text-red-400">true</span> <span className="text-yellow-400">// true (idem)</span></p>
                            <p><span className="text-red-400">true</span> <span className="text-blue-400">||</span> <span className="text-red-400">true</span> <span className="text-yellow-400"> // true (idem)</span></p>
                        </div>

                        <p className="font-semibold mt-4">Veamos que ocurre con otros tipos de datos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-red-400">0</span> <span className="text-blue-400">||</span> <span className="text-red-400">null</span> <span className="text-yellow-400"> // null (se evalua como false || false, devuelve el segundo)</span></p>
                            <p><span className="text-red-400">44</span> <span className="text-blue-400">||</span> <span className="text-red-400">undefined</span> <span className="text-yellow-400"> //44 (se evalua como true || false, devuelve el primero)</span></p>
                            <p><span className="text-red-400">0</span> <span className="text-blue-400">||</span> <span className="text-red-400">17</span> <span className="text-yellow-400"> // 17 (se evalua como false || true, devuelve el segundo)</span></p>
                            <p><span className="text-red-400">2</span> <span className="text-blue-400">||</span> <span className="text-red-400">10</span> <span className="text-yellow-400"> //2 (se evalua como true || true, devuelve el primero)</span></p>
                        </div>

                        <p className="mt-4">Teniendo todo esto en cuenta, el operador || nos podría venir bastante bien para situaciones donde se necesita comprar condiciones.</p>

                        <h3 className="mt-4">Encadenamiento opcional</h3>
                        <p>Existe un operador muy interesante denominado optional chaining  (operador de encadenamiento opcional). Este operador nos permite acceder a propiedades, aunque su elemento padre no exista, de forma que podamos evitar un error que es bastante frecuente.</p>
                        <p className="mt-4">Veámoslo con un ejemplo, para situarnos mejor. Tenemos el siguiente objeto:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-400">const</span> <span className="text-green-400">user</span> <span className="text-blue-400">=</span> <span className="text-yellow-400">{'{'}</span></p>
                            <p className="ml-4"><span className="text-green-400">name</span>: <span className="text-red-400">"Manz"</span>,</p>
                            <p className="ml-4"><span className="text-green-400">role</span>: <span className="text-red-400">"streamer"</span>,</p>
                            <p className="ml-4"><span className="text-green-400">attrs</span>: <span className="text-yellow-400">{'{'}</span></p>
                            <p className="ml-8"><span className="text-green-400">life</span>: <span className="text-red-400">100</span>,</p>
                            <p className="ml-8"><span className="text-green-400">power</span>: <span className="text-red-400">25</span></p>
                            <p className="ml-4"><span className="text-yellow-400">{'}'}</span></p>
                            <p><span className="text-yellow-400">{'}'}</span></p>
                        </div>
                        <p className="mt-4">Si intentamos acceder a una de sus propiedades en el interior de attrs lo haremos sin problema:</p>
                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-green-400">user</span>.<span className="text-green-400">attrs</span>.<span className="text-green-400">power</span> <span className="text-yellow-400">// 25</span></p>
                            <p><span className="text-green-400">user</span>.<span className="text-green-400">attrs</span>.<span className="text-green-400">life</span> <span className="text-yellow-400">// 100</span></p>
                        </div>

                        <p className="mt-4">Como puedes ver, ahora podemos hacer el intento de acceso sin que nos lance un error. Nos devuelve undefined porque no está definido, pero podemos acceder de forma segura.</p>

                        <h3 className="mt-4">Operador lógico NOT</h3>

                        <p className="mt-4">Se utiliza para negar un valor, es decir, para invertir su valor . Si una variable vale true, al negarla valdrá false y si una variable vale false, al negarla, valdrá false. Para negar una variable, se precede del símbolo !.</p>
                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-400">!</span><span className="text-red-400">true</span> <span className="text-yellow-400">// false</span></p>
                            <p><span className="text-blue-400">!</span><span className="text-red-400">false</span> <span className="text-yellow-400">// true</span></p>
                            <p><span className="text-blue-400">!!</span><span className="text-red-400">true</span> <span className="text-yellow-400">// true</span></p>
                            <p><span className="text-blue-400">!!</span><span className="text-red-400">false</span> <span className="text-yellow-400">// false</span></p>
                            <p><span className="text-blue-400">!!!</span><span className="text-red-400">true</span> <span className="text-yellow-400">// false</span></p>
                        </div>
                        <p className="mt-4">Sin embargo, también lo podemos hacer con variables con otros tipos de datos:</p>

                        <div className="p-4 mt-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200">
                            <p><span className="text-blue-400">!</span><span className="text-red-400">44</span> <span className="text-yellow-400">// false (se evalua como !true)</span></p>
                            <p><span className="text-blue-400">!</span><span className="text-red-400">0</span> <span className="text-yellow-400">// true (se evalua como !false)</span></p>
                            <p><span className="text-blue-400">!</span><span className="text-red-400">""</span> <span className="text-yellow-400">// true (es lo mismo que !0, que a su vez es !false)</span></p>
                            <p><span className="text-blue-400">!</span><span className="text-yellow-400">(</span><span className="text-red-400">10</span> <span className="text-blue-400">||</span> <span className="text-red-400">23</span><span className="text-yellow-400">)</span> <span className="text-yellow-400">// false (se evalua como !10, que es !true)</span></p>
                        </div>
                        <p className="mt-4">Observa que, como se aprecia en el último caso, también podemos usarlo con expresiones más complejas.</p>
                    </section>

                </div>

            </main>

        </div>

    )
}