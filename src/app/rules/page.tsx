export default function Rules() {
  return (
    <div>
      <p>
        La idea de este juego se basa en seleccionar una playlist personal donde el jugador se sienta seguro que puede adivinar tanto el nombre de la cancion como de los artistas<br />
        que se encuentran en esa y asi conseguir puntos en base a lo que adivina y el momento en el que lo adivina.<br />
        Las canciones se seleccionan de forma aleatoria y solamente se reproducen los primeros 15 segundos. El jugador puede <b>"Solicitarlo"</b> y se reproduciran otros 15 segundos desde<br />
        la mitad de la cancion.
      </p>
      <p>
        Puntaje:<br />
        - <b>1 punto</b> por adivinar el artista principal (el primer artista que se nombra)<br />
        - <b>2 puntos</b> por adivinar el nombre de la cancion en los primeros 15 segundos o <b>1 punto</b> si <b>"Lo Pidio"</b>(se reproducieron los 15 segundos de la mitad)<br />
      </p>
      <p>
        Como jugar:<br />
        - Para empezar a jugar, haz click sobre el nombre del jugador para seleccionar la playlist de la cual se va a reproducir la musica.<br />
        - Una vez seleccionada la playlist, haz click sobre el boton "Comenzar" para que empiece a sonar una cancion aleatoria.<br />
        - Los botones "Mostrar Cancion" y "Mostrar Artistas" revelaran el nombre de la cancion y de los artistas que participaron.<br />
        - En la parte inferior se van a encontrar 4 botones: reproducir, pausa, siguiente cancion y el boton para <b>"Pedir el respectivo"</b>.<br />
        - El boton para <b>"Pedir el respectivo"</b>, hara que se reproduzcan 15 segundos desde el medio de la cancion.
      </p>
    </div>
  );
}