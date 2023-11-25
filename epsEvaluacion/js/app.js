// FUNCIONES ACEPTAP SE CREAN PARA TRAER ELEMENTOS ID DEL HTML, Y SE TRASLADA ESE VALOR A OTRA VARIABLE QUE SE USARA A TRAVES DE LAS FUNCIONES DE mostrar, DONDE DARAN PASO A LA EJECUCION

function aceptaP1(){
    var resultado= "Su compra fue realizada con exito, se añadio su plan satisfactoriamente para no ser atendido."
    var res=document.getElementById("resultado")
    res.innerHTML=`${resultado}`;
}
function aceptaP2(){
    var resultado2= "Su compra fue realizada con exito, se añadio su plan y cargo durante 12 años de vida sin derecho a salir de la eps."
    var res=document.getElementById("resultado2")
    res.innerHTML=`${resultado2}`;
}
function aceptaP3(){
    var resultado3= "Su compra fue realizada con exito, se añadio su plan y alma por toda la etenernidad, y ya debe hasta la casa."
    var res=document.getElementById("resultado3")
    res.innerHTML=`${resultado3}`;
}

function mostrar1() {
    event.preventDefault();
    let opc = parseInt(document.getElementById("opc").value)
        switch(opc){
            case 1:
                aceptaP1()
                break;
    }
}
function mostrar2() {
    event.preventDefault();
    let opc1 = parseInt(document.getElementById("opc1").value)
        switch(opc1){
            case 2:
                aceptaP2()
                break;
    }
}
function mostrar3() {
    let opc2 = parseInt(document.getElementById("opc2").value)
        switch(opc2){
            case 3:
                aceptaP3()
                break;
    }
}







// Función para manejar el cambio en el tipo de cita
function actualizarPrecio() {
    // Obtener el tipo de cita seleccionado
    var tipoCita = document.getElementById("tipoCita").value;

    // Inicializar la variable de precio
    var precio;

    // Utilizar un switch para determinar el precio según el tipo de cita
    switch (tipoCita) {
      case "basica":
        precio = 50000; // Precio para la cita básica
        break;
      case "prioritaria":
        precio = 10000; // Precio para la cita prioritaria
        break;
      case "instantanea":
        precio = 150000; // Precio para la cita al instante
        break;
      default:
        precio = 0; // Precio predeterminado si no se selecciona ningún tipo
    }

    // Asignar el precio al campo de texto y al elemento de visualización
    document.getElementById("precio").value = "$" + precio;
  }

  // Función para validar y manejar el formulario
  function validarCita() {
    // Obtener el tipo de cita seleccionado
    var tipoCita = document.getElementById("tipoCita").value;

    // Validar que se haya seleccionado un tipo de cita
    if (tipoCita === "") {
      alert("Seleccione un tipo de cita antes de agendar.");
      return;
    }

    // Obtener el nombre y teléfono del formulario
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;

    // Obtener el precio
    var precio = document.getElementById("precio").value;

    // Mostrar un prompt indicando que la cita ha sido agendada con éxito
    alert("Cita agendada con éxito\n\nDetalles:\nTipo de Cita: " + tipoCita + "\n" + precio + "\nNombre: " + nombre + "\nTeléfono: " + telefono);
  }









  //MEDICINAS FUNCIONES:
  // Objeto para almacenar los valores totales de cada producto
  let valoresTotales = {};

  // Función que incrementa
  function incrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML) + 1;

    cantidadElement.innerHTML = contador;

    if (valoresTotales[producto] === undefined) {
      valoresTotales[producto] = 0;
    }

    valoresTotales[producto] += valorProducto; // Sumar al valor total
    valorTElement.innerHTML = valoresTotales[producto].toFixed(2);
  }

  // Función que decrementa
  function decrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML);

    if (contador > 0) {
      contador -= 1;
      cantidadElement.innerHTML = contador;
      // Verificar si ya hay un valor total almacenado para este producto
      if (valoresTotales[producto] === undefined) {
        valoresTotales[producto] = 0;
      }
      valoresTotales[producto] -= valorProducto; // Restar al valor total
      valorTElement.innerHTML = valoresTotales[producto].toFixed(2);
    } else {
      contador <= 0;
      cantidadElement.innerHTML = contador;
      valorTElement.innerHTML = 0;
    }
  }

  // Función que resetea
  function resetearC(producto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
  
    if (valoresTotales[producto] === undefined) {
      valoresTotales[producto] = 0;
    }
    valoresTotales[producto] -= parseFloat(valorTElement.innerHTML); 
    cantidadElement.innerHTML = 0;
    valorTElement.innerHTML = 0;
  }




  // Función para realizar la compra
  function comprar() {
    let totalCompra = 0;

    // Sumar todos los valores totales
    for (const producto in valoresTotales) {
      totalCompra += valoresTotales[producto];
    }

    alert(`Compra realizada con éxito. Total: $${totalCompra.toFixed(2)}`);
    resetearC()

    valoresTotales = {};
  }
