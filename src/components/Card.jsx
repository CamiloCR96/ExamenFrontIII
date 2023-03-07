import React from "react";


const Card =({nombre,cancionFav,cantanteFav})=>{

return(
<div>
<h2>Señorit@ {nombre}, tu cancion favorita es {cancionFav} del cantante {cantanteFav} </h2>

</div>

)

}

export default Card