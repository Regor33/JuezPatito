import { Outlet } from "react-router-dom"

const ResidenteLayout = () => {
  return (
    <div className="w-screen h-screen bg-white">
      {/* No hay Navbar acá */}
      {/*ACA SE PONE EL CODIGO */}
      <P>HOLA ESTA ES LA INTEFAZ DEL RESIDENTE</P>
      <Outlet />
    </div>
  )
}

export default ResidenteLayout

// LO QUE TENEMOS q hacer ahora es por ejemplo que estos dos ventans que contiene el las otras direciones de ruta ahora estas se tiene que ir a APP porque en ahi es donde estran las direciones de ruta que no redirecionaran a estas paginas entoces eso es lo que ahora hay que hacer estas tiewne que ser redirecionadas las dos ventas al APP que despues esa APP que esta en el main.jsx solo sea ese componente para que todo este dentro de ahi;
// entoces ahorita jhay que bloear las anteriores barras y con eso luego ponemos estas nuevas barras y en el main tenemos que borrar casi todo y dejar solo el APPS