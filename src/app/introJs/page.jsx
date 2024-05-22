import Link from "next/link";
import { Children } from "react";

export default function Intro() {
    return (
        <div className="flex p-10 ">
            <div className="w-1/3">
                <div className="sticky top-0">

                    <h2 className="text-lg font-semibold">Busca el artículo que quieres estudiar</h2>

                    <ul >
                        <li className="flex"><img src="DocFile.svg" alt="doc" />¿Qué es Javascript?</li>
                        <li className="flex"><img src="DocFile.svg" alt="doc" /> ¿Cómo funciona Javascript?</li>
                        <li className="flex"><img src="DocFile.svg" alt="doc" /> Tipos de datos</li>
                        <li className="flex"><img src="DocFile.svg" alt="doc" /> Funciones</li>
                        <li className="flex"><img src="DocFile.svg" alt="doc" />Operadores básicos y avanzados</li>
                        <li className="flex"><img src="DocFile.svg" alt="doc" />Operadores básicos y avanzados</li>
                    </ul>

                    <div className="mt-48">
                        <hr className="border-indigo-300 py-2" style={{ width: '80%' }} />
                        <li className="flex">
                            <Link href='#'>Volver al inicio</Link>
                        </li>
                    </div>
                </div>

            </div>

            {/*envuelve todas las paginas*/}
            <div className="w-5/6 container-global">

                <div>
                    <h2>¿Qué es Javascript?</h2>
                    <p>Lenguaje de programación de la web:</p>
                    <p><span className="font-bold text-yellow-500">Javascript</span> es un <span className="text-yellow-500">lenguaje de programación</span>, o lo que es lo mismo, un mecanismo con el que podemos decirle a nuestro navegador que tareas debe realizar, en que orden y cuantas veces (por ejemplo).
                        Muchas de las tareas que realizamos con HTML y CSS se podrían realizar con Javascript. De hecho, es muy probable que al principio nos parezca que es mucho más complicado hacerlo con Javascript, y que por lo tanto no merece la pena. Sin embargo, con el tiempo veremos que Javascript nos ofrece una mayor flexibilidad y un abanico de posibilidades más grande, y que bien usadas, pueden ahorrarnos bastante tiempo.
                        Para comprenderlo, un ejemplo muy sencillo sería el siguiente:</p>

                    <h2>A tener en cuenta:</h2>
                    <p>Aunque <span className="font-bold text-yellow-500">Javascript</span> es ideal en muchos casos, es mucho más complicado aprender Javascript (o un lenguaje de programación de propósito general) que aprender HTML o CSS, los cuales son mucho más sencillos de comprender (o al menos, su base y fundamentos).</p>

                    <h2>Antes de continuar debemos conocer varias detalles:</h2>

                    <ul className="list-disc">
                        <li>Para <span className="font-bold text-yellow-500">aprender Javascript</span> debemos conocer el lenguaje, pero no podremos hacerlo si no sabemos programar. Se puede aprender a programar con Javascript, pero es recomendable tener una serie de fundamentos básicos de programación antes para que no nos resulte muy duro.</li>
                        <li>Para <span className="font-bold text-yellow-500">aprender a programar</span> antes debemos saber como «trabaja una máquina». Programar no es más que decirle a una máquina que cosas debe hacer y como debe hacerlas.</li>
                        <li>Puedes <span className="font-bold text-yellow-500">copiar un programa</span> en segundos, pero eso no significa que lo entiendas.</li>
                        <li>Puedes <span className="font-bold text-yellow-500">comprender un programa</span>  en minutos, pero eso no significa que lo puedas crear.</li>
                        <li>Puedes <span className="font-bold text-yellow-500">un programa</span> crear  en horas, pero eso no significa que sepas programar.</li>
                        <li>Puedes <span className="font-bold text-yellow-500">aprender a programar</span>  en semanas, pero eso no significa que no cometas errores.</li>
                        <li>Puedes <span className="font-bold text-yellow-500"> aprender a programar bien y sin demasiados errores</span> en meses.</li>
                        <p>Pero <span className="font-bold text-yellow-500">dominar la programación</span>  es una tarea que requiere años.</p>
                    </ul>

                </div>

                <div>
                    <h2>¿Cómo funciona Javascript?</h2>
                    <p>Una <span className="font-bold text-yellow-500">un documento HTML</span> página web es  que puede incluir referencias a archivos <span className="font-bold text-yellow-500">CSS y JavaScript</span> . El navegador descarga y aplica el CSS para cambiar la apariencia visual y ejecuta el <span className="font-bold text-yellow-500"> JavaScript</span> para realizar acciones.</p>

                    <h2>Script en línea</h2>

                    <div class="p-4 bg-black border border-gray-300 rounded-md shadow-md text-gray-200 ">
                        <p>&lt;html&gt;</p>
                        <p className="ml-4">&lt;head&gt;</p>
                        <p className="ml-8">&lt;title&gt;Título de la página&lt;/title&gt;</p>
                        <p className="ml-4">&lt;/head&gt;</p>
                        <p className="ml-4">&lt;body&gt;</p>
                        <p className="ml-8">&lt;h1&gt;Soy un encabezado h1.&lt;/h1&gt;</p>
                        <p className="ml-8">&lt;p&gt;Ejemplo de texto.&lt;/p&gt;</p>
                        <p className="ml-4">&lt;/body&gt;</p>
                        <p className="ml-8">&lt;script src="js/index.js"&gt;&lt;/script&gt;</p>
                        <p>&lt;/html&gt;</p>
                    </div>

                    <p className="mt-4">El texto js/index.js no es más que una referencia a un archivo index.js que se encuentra dentro de una carpeta js, situada en la misma carpeta que el documento HTML del ejemplo.
                        asi esta bien explicado? para el codigo que voy a mostrar</p>

                    <h2>Ubicación de la etiqueta script</h2>
                    <p>Es posible que te hayas encontrado ejemplos donde dicha etiqueta esté ubicada en otra parte del documento HTML. Veamos las posibilidades:</p>

                    <table className="table-auto border-collapse border mt-4">
                        <thead>
                            <tr>
                                <th className="border border-yellow-500 px-4 py-2">Ubicación</th>
                                <th className="border border-yellow-500 px-4 py-2">¿Cómo descarga el archivo Javascript?</th>
                                <th className="border border-yellow-500 px-4 py-2">Estado de la página</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-yellow-500 px-4 py-2">En &lt;head&gt;</td>
                                <td className="border border-yellow-500 px-4 py-2">ANTES de empezar a dibujar la página.</td>
                                <td className="border border-yellow-500 px-4 py-2">Página aún no dibujada.</td>
                            </tr>
                            <tr>
                                <td className="border border-yellow-500 px-4 py-2">En &lt;body&gt;</td>
                                <td className="border border-yellow-500 px-4 py-2">DURANTE el dibujado de la página.</td>
                                <td className="border border-yellow-500 px-4 py-2">Dibujada hasta donde está la etiqueta &lt;script&gt;.</td>
                            </tr>
                            <tr>
                                <td className="border border-yellow-500 px-4 py-2">Antes de &lt;/body&gt;</td>
                                <td className="border border-yellow-500 px-4 py-2">DESPUÉS de dibujar la página.</td>
                                <td className="border border-yellow-500 px-4 py-2">Dibujada al 100%.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>

        </div>

    )
}