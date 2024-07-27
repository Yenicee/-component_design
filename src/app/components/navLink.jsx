import Link from "next/link";


export default function Links() {

    return (
        <>
            <div className="li-nav">
                <section>
                    <h2>Introduccion a Javascript</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/introJs'>¿Que es Javascript?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/introJs'>¿Como funciona Javascript?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/introJs'>Tipos de datos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/introJs'>Funciones</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/introJs'>Operadores básicos y avanzados</Link></li>

                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Number</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/numberJs'>¿Que es un Number?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/numberJs'>Conversiones numericas</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/numberJs'>El objeto Math</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Strings</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/stringsJs'>¿Que es un String?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/stringsJs'>Posiciones y substrings</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/stringsJs'>Buscar y remplazar</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/stringsJs'>Modificar transformaciones en Strings</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Objetos</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/objectsJs'>¿Que son los objetos?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/objectsJs'>Formato JSON</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/objectsJs'>Desestructurar datos en objetos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/objectsJs'>Clonar objetos o elementos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/objectsJs'>Iteradores de objetos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2"/><Link href='/objectsJs'>Agrupar datos por criterio</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Arrays</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href=''>¿Que es un array?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href=''>Buscar y modificar elementos en un array</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href=''>Ordenacion de un array</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href=''>Array functions</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>SET/MAP</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que es un Set</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Set:Operaciones de conjuntos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que es un Map?</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />
                <section>
                    <h2>Calidad de código</h2>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>ESLint: Linter Javascript</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />
                <section>
                    <h2>Orientacion a objetos(OOP)</h2>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Orientacion a objetos</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Clases en Javascript</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Propiedades de clase</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Métodos de clase</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Herencia de clases</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>DOM</h2>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que es el DOM?</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Seleccionar elementos del DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Crear elementos en el DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Gestionar atributos del DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>La API classList de Javascript</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Contenido en el DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Insertar elementos en el DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Navegar por los elementos del DOM</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Animar elementos del DOM</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Eventos</h2>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que son los eventos?</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Eventos mediante Javascript</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>El metodo addEventListener</Link></li>
                   <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'></Link>El objeto Event</li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Eventos del navegador</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Eventos de navegador:¿Que son?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Eventos de teclado</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Eventos de puntero</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Expresiones regulares</h2>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que es una expresion regular?</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Buscar y capturar textos</Link></li>
                    <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Crear expresiones regulares</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

               <section>
                <h2>Multimedia</h2>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>API de audio Javascript</Link></li>
               </section>
               <hr className="border-indigo-300 py-2" />

               <section>
                <h2>Web APIS</h2>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Temporizadores(metodos setTimeout, setInterval)</Link></li>
               </section>
               <hr className="border-indigo-300 py-2" />

             <section>
                <h2>Asincronía</h2>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que es la asincronia?</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Funciones callbacks</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>¿Que son las promesas?</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Async/Await</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Promesas en grupo(PromiseAPI)</Link></li>
             </section>
             <hr className="border-indigo-300 py-2" />

             <section>
                <h2>Peticiones HTTP</h2>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>AJAX:Peticiones HTTP</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>XHR: XMLHttpRequest</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Fetch: Peticiones Asíncronas</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>URL en Javascript</Link></li>
                <li className="flex items-center "><img src="icon_js.svg"alt="icon js"className="mr-2" /><Link href='/'>Politica CORS</Link></li>
             </section>

            </div>


        </>
    )
}