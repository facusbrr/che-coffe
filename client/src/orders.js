import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar componentes
import { navbar } from "./components/navbar";
import { listOfOrders } from "./components/listOfOrders";

// Obtener el elemento raíz del DOM donde se montarán los componentes
const $root = document.getElementById("root");

// Realizar una solicitud para obtener la sesión del usuario actual
await fetch("http://localhost:4321/auth/me", {})
  .then((response) => {
    // Verificar si la respuesta es exitosa
    if (response.ok) {
      return response.json(); // Convertir la respuesta a JSON
    } else {
      return null; // Devolver null si la respuesta no es exitosa
    }
  })
  .then((session) => {
    if (session) {
      // Añadir el componente de la barra de navegación al elemento raíz
      $root.appendChild(navbar({ user: session }));
      // Añadir el componente de orders al elemento raíz
      $root.appendChild(listOfOrders());
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "/pages/login";
    }
  });
