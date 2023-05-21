//Importa una libreria react y la funcion usesState de react.
import React, { useState } from "react";

/*Crea un componente que lea muchos números y calcule su promedio.
Utiliza una variable de estado para guardar el arreglo y mostrar el
resultado.*/




//Se define una constante PromedioNumeros que es una función flecha.
const PromedioNumeros = () => {
  //Se utiliza useState para definir dos variables de estado: numeros y promedio, 
  //y setNumeros y setPromedio como funciones para actualizar esos estados.
  const [numeros, setNumeros] = useState([]);
  const [promedio, setPromedio] = useState(0);

//Se define una función AgregarNumero que se ejecuta cuando se envía el formulario.
  const AgregarNumero = (event) => {
    // Esta función evita que el formulario se recargue.
    event.preventDefault();
    //Obtiene el número ingresado y valida realizando un evento que recibe el dato.
    const numero = Number(event.target.numero.value);
    //lo agrega al arreglo de números utilizando setNumeros
    setNumeros([...numeros, numero]); 
    // calcula el promedio actualizado utilizando setPromedio.
    setPromedio((promedio * (numeros.length) + numero) / (numeros.length+1));
    //Restablece el campo una ves enviado el formulario
    event.target.numero.value = "";
  };

  return (
    //Se muestra un formulario donde se ingresa un número, y un botón para agregarlo.
   
    <>
    {/* onSubmit permite asociar una funcion en este caso se asocia la funcion de envio. */}
      <form onSubmit={AgregarNumero}>
        <label>Ingrese un número:</label>
        {/* type permite asignar el tipo de dato. */}
        {/* name lo utilizamos para identificar un dato. */}
        <input type="number" name="numero" required />
        <button type="submit">Agregar</button>
      </form>
      {/*Condicion ternaria  */}
      {numeros.length > 0 ? (
        <div>
        {/* Si los datos son mayores a cero muestra los siguientes textos. */}
        {/* join hace que sea posible generar la vista de los numeros. */}
          <p>Los números ingresados son: {numeros.join(", ")}</p>
          {/* toFixed utilizado para definir la cantidad de decimales. */}
          <p>El promedio es: {promedio.toFixed(2)}</p>
        </div>
        //sino muestra el siguiente texto 
      ) : (
        <p>No se han ingresado números aún</p>
      )}
    </>
  );
};
//permite que la funcion por defecto, sea exportable.
export default PromedioNumeros;