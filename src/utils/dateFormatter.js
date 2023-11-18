export function now_date_to_unix() {
  let currentDate = new Date();
  return Math.floor(currentDate.getTime() / 1000);
}

export function unix_to_date(unixTimestamp) {
  let date = new Date(unixTimestamp * 1000);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return day + "/" + month + "/" + year;
}

export function iso_to_date(fechaISO) {
  // Crear un objeto de fecha a partir de la cadena ISO
  var fecha = new Date(fechaISO);

  // Obtener los componentes de la fecha
  var dia = fecha.getUTCDate();
  var mes = fecha.getUTCMonth() + 1; // Sumar 1 porque los meses comienzan desde 0
  var anio = fecha.getUTCFullYear();

  // Formatear la cadena en el formato DD/MM/YYYY
  var fechaFormateada = (dia < 10 ? '0' : '') + dia + '/' +
                        (mes < 10 ? '0' : '') + mes + '/' +
                        anio;

  return fechaFormateada;
}

