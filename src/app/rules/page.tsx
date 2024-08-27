import { Disclosure } from "@headlessui/react";

export default function Rules() {
  return (
    <Disclosure as="div" className="mx-auto">
      <div className="mx-auto min-h-40 max-w-7xl px-2 sm:px-6 lg:px-8 rounded-md">
        <div className="grid grid-cols-2 flex-row gap-4 my-4">
          <article className="rounded-md border-4 h-fit basis-1/2">
            <div className="text-xl text-center p-4 border-b-2 bg-gray-100 dark:bg-slate-700 dark:text-white">¿De que trata el juego?</div>
            <p className="font-sans text-base text-pretty px-6 py-3">
              La idea de este juego se basa en seleccionar una playlist donde el jugador se sienta seguro que pueda adivinar tanto el nombre de las canciones,
              como de los artistas que se encuentran en esta, y asi conseguir puntos en base a lo que adivina y el momento en el que lo adivina.
            </p>
            <p className="font-sans text-base text-pretty px-6 pb-6">
              Las canciones se seleccionan de forma aleatoria y solamente se reproducen los primeros 15 segundos.
              El jugador puede <b>"Solicitarlo"</b> y se reproduciran otros 15 segundos desde la mitad de la cancion.
            </p>
          </article>
          <article className="rounded-md border-4 h-fit basis-1/2">
            <div className="text-xl text-center p-4 border-b-2 bg-gray-100 dark:bg-slate-700 dark:text-white">Puntuación</div>
            <ul className="font-sans text-base list-inside list-disc px-6 py-3">
              <li>
                <b>1 punto</b> por adivinar el artista principal.
              </li>
              <li>
                <b>2 puntos</b> por adivinar el nombre de la cancion en los primeros 15 segundos.
              </li>
              <li>
                <b>1 punto</b> por adivinar el nombre de la cancion en la mitad.
              </li>
            </ul>
          </article>
          <article className="rounded-md border-4 basis-1/2">
            <div className="text-xl text-center p-4 border-b-2 bg-gray-100 dark:bg-slate-700 dark:text-white">¿Como se juega?</div>
            <ul className="font-sans text-base text-pretty list-inside list-decimal px-6 py-6">
              <li>
                Para empezar a jugar, haz click sobre el nombre del jugador para seleccionar la playlist de la cual se va a reproducir la musica.
              </li>
              <li>
                Una vez seleccionada la playlist, haz click sobre el boton "Comenzar" para que empiece a sonar una cancion aleatoria.
              </li>
              <li>
                Los botones "Mostrar Cancion" y "Mostrar Artistas" revelaran el nombre de la cancion y de los artistas que participaron.
              </li>
              <li>
                En la parte inferior se van a encontrar 4 botones: reproducir, pausa, siguiente cancion y el boton para <b>"Pedir el respectivo"</b>.
              </li>
              <li>
                El boton para <b>"Pedir el respectivo"</b>, hara que se reproduzcan 15 segundos desde el medio de la cancion.
              </li>
            </ul>
          </article>

        </div>
      </div>
    </Disclosure>

  );
}