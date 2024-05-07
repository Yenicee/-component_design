import React from "react";
import Link from "next/link";

export default function Links() {

    return (
        <>
            <div className="li-nav">
                <section  >
                    <h2>Introduccion a Javascript</h2>
                    <li><Link href='/'>¿Que es Javascript?</Link></li>
                    <li><Link href='/'>¿Como funciona Javascript?</Link></li>
                    <li><Link href='/'>Tipos de datos</Link></li>
                    <li><Link href='/'>Funciones</Link></li>
                    <li><Link href='/'>Operadores básicos y avanzados</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Number</h2>
                    <li><Link href=''>¿Que es un Number?</Link></li>
                    <li><Link href=''>Conversiones numericas</Link></li>
                    <li><Link href=''>El objeto Math</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Strings</h2>
                    <li><Link href=''>¿Que es un String?</Link></li>
                    <li><Link href=''>Posiciones y substrings</Link></li>
                    <li><Link href=''>Buscar y remplazar</Link></li>
                    <li><Link href=''>Modificar transformaciones en Strings</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Objetos</h2>
                    <li><Link href=''>¿Que son los objetos?</Link></li>
                    <li><Link href=''>Formato JSON</Link></li>
                    <li><Link href=''>Desestructurar datos en objetos</Link></li>
                    <li><Link href=''>Clonar objetos o elementos</Link></li>
                    <li><Link href=''>Iteradores de objetos</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Arrays</h2>
                    <li><Link href=''>¿Que es un array?</Link></li>
                    <li><Link href=''>Buscar y modificar elementos en un array</Link></li>
                    <li><Link href=''>Ordenacion de un array</Link></li>
                    <li><Link href=''>Array functions</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>SET/MAP</h2>
                    <li><Link href='/'>¿Que es un Set</Link></li>
                    <li><Link href='/'>Set:Operaciones de conjuntos</Link></li>
                    <li><Link href='/'>¿Que es un Map?</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />
                <section>
                    <h2>Calidad de código</h2>
                    <li><Link href='/'>ESLint: Linter Javascript</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />
                <section>
                    <h2>Orientacion a objetos(OOP)</h2>
                    <li><Link href='/'>Orientacion a objetos</Link></li>
                    <li><Link href='/'>Clases en Javascript</Link></li>
                    <li><Link href='/'>Propiedades de clase</Link></li>
                    <li><Link href='/'>Métodos de clase</Link></li>
                    <li><Link href='/'>Herencia de clases</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>DOM</h2>
                    <li><Link href='/'>¿Que es el DOM?</Link></li>
                    <li><Link href='/'>Seleccionar elementos del DOM</Link></li>
                    <li><Link href='/'>Crear elementos en el DOM</Link></li>
                    <li><Link href='/'>Gestionar atributos del DOM</Link></li>
                    <li><Link href='/'>La API classList de Javascript</Link></li>
                    <li><Link href='/'>Contenido en el DOM</Link></li>
                    <li><Link href='/'>Insertar elementos en el DOM</Link></li>
                    <li><Link href='/'>Navegar por los elementos del DOM</Link></li>
                    <li><Link href='/'>Animar elementos del DOM</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Eventos</h2>
                    <li><Link href='/'>¿Que son los eventos?</Link></li>
                    <li><Link href='/'>Eventos mediante Javascript</Link></li>
                    <li><Link href='/'>El metodo addEventListener</Link></li>
                    <li><Link href='/'></Link>El objeto Event</li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Eventos del navegador</h2>
                    <li><Link href='/'>Eventos de navegador:¿Que son?</Link></li>
                    <li><Link href='/'>Eventos de teclado</Link></li>
                    <li><Link href='/'>Eventos de puntero</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />

                <section>
                    <h2>Expresiones regulares</h2>
                    <li><Link href='/'>¿Que es una expresion regular?</Link></li>
                    <li><Link href='/'>Buscar y capturar textos</Link></li>
                    <li><Link href='/'>Crear expresiones regulares</Link></li>
                </section>
                <hr className="border-indigo-300 py-2" />
         
               <section>
                <h2>Multimedia</h2>
                <li><Link href='/'>API de audio Javascript</Link></li>
               </section>
               <hr className="border-indigo-300 py-2" />
      
               <section>
                <h2>Web APIS</h2>
                <li><Link href='/'>Temporizadores(metodos setTimeout, setInterval)</Link></li>
               </section>
               <hr className="border-indigo-300 py-2" />
             
             <section>
                <h2>Asincronía</h2>
                <li><Link href='/'>¿Que es la asincronia?</Link></li>
                <li><Link href='/'>Funciones callbacks</Link></li>
                <li><Link href='/'>¿Que son las promesas?</Link></li>
                <li><Link href='/'>Async/Await</Link></li>
                <li><Link href='/'>Promesas en grupo(PromiseAPI)</Link></li>
             </section>
             <hr className="border-indigo-300 py-2" />
             
             <section>
                <h2>Peticiones HTTP</h2>
                <li><Link href='/'>AJAX:Peticiones HTTP</Link></li>
                <li><Link href='/'>XHR: XMLHttpRequest</Link></li>
                <li><Link href='/'>Fetch: Peticiones Asíncronas</Link></li>
                <li><Link href='/'>URL en Javascript</Link></li>
                <li><Link href='/'>Politica CORS</Link></li>
             </section>

            </div>


        </>
    )
}