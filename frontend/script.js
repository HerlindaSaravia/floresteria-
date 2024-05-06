document.addEventListener("DOMContentLoaded", function () {
  
  $("#guardararreglos").on("click", function () {
    let datos = {
      nombre: $("#nombre").val(),
      ideologia: $("#color").val(),
      lider: $("#tipo").val(),
      fundacion: $("#precio").val(),
    };
    if ($("#id-arreglos").val() === "") {
      creararreglos(datos);
    } else {
      datos.id = $("#id-arreglos").val();
      editararreglos(datos);
    }
  });

  

  $("#agregararreglos").on("click", function () {
    $("#id-arreglos").val("");
  });
  $(".btn-warning").on("click", function () {
    let idarreglos = $(this).data("id");
    $("#id-arreglos").val(idarreglos);
  });

  $(".btnEliminar").on("click", function () {
    let idarreglos = $(this).data("id");
    $("#id-arreglos").val(idarreglos);
  });

  $("#btnEliminararreglos").click(function () {
    let id = $("#id-arreglos").val();
    eliminar(id);
  });
});
//al abrir el modalverifica si hay un id valido si lo hay lo rellena para un actualizar
$("#arreglos").on("shown.bs.modal", function () {


  if ($("#id-arreglos").val() !== "") {
    $.ajax({
      type: "GET",
      url: "http://localhost/floresteria/backend/get_id_arreglos.php",
      dataType: "JSON",
      data: { id: $("#id-arreglos").val() },
      success: function (respuesta) {
        $("#Nombre").val(respuesta[0].Nombre);
        $("#Color").val(respuesta[0].Color);
        $("#Tipo").val(respuesta[0].Tipo);
        $("#Precio").val(respuesta[0].Precio);
      },
      error: function (error) {
        // Manejar errores
        console.error("Error en la solicitud AJAX:", error);
        Swal.fire({
          title: "Error",
          text: "error:" + error,
          icon: "error",
        });
      },
    });
  }else{
        $("#Nombre").val("");
        $("#Color").val("");
        $("#Tipo").val("");
        $("#Precio").val("");
  }
  
});

function creararreglos(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost/floresteria/backend/create_arreglos.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#arreglos").modal("hide");

      $("#Nombre").val(""),
        $("#Color").val(""),
        $("#Tipo").val(""),
        $("#Precio").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function editararreglos(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "PUT",
    url: "http://localhost/floresteria/backend/update_arreglos.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#arreglos").modal("hide");

      $("#Nombre").val(""),
        $("#Color").val(""),
        $("#Tipo").val(""),
        $("#Precio").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function eliminar(id) {
  console.log(id);
  $.ajax({
    type: "DELETE",
    url: "http://localhost/floresteria/backend/delete_arreglos.php?id=" + id,
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta);
      $('#modalEliminar').modal('hide'); // Corregido el selector
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}


