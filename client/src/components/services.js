import Img2 from "../assets/coffee2.png";
import Swal from "sweetalert2";

// Datos de los servicios, incluyendo id, imagen, nombre, descripción y retraso de animación
const data = [
  {
    id: "1",
    img: Img2,
    coffee: "Espresso",
    description:
      "A concentrated coffee served in small shots, known for its intense flavor.",
  },
  {
    id: "2",
    img: Img2,
    coffee: "Americano",
    description:
      "An espresso with added hot water, making it smoother and less dense.",
  },
  {
    img: Img2,
    coffee: "Cappuccino",
    description:
      "Combines espresso with steamed milk and foam, creating a creamy texture and balance between coffee and milk.",
  },
];

// Función que crea y devuelve el fragmento de HTML para la sección de servicios
export const services = (session) => {
  // Crear un fragmento de documento para contener los elementos
  const fragment = document.createDocumentFragment();

  // Crear un elemento <span> con id "services" y añadirlo al fragmento
  const span = document.createElement("span");
  span.id = "services";
  fragment.appendChild(span);

  // Crear un contenedor <div> con padding vertical y añadirlo al fragmento
  const pyDiv = document.createElement("div");
  pyDiv.className = "py-10";

  // Crear un contenedor <div> para la sección de servicios
  const containerDiv = document.createElement("div");
  containerDiv.className = "container";

  // Sección de encabezado
  const headingDiv = document.createElement("div");
  headingDiv.className = "text-center mb-20";

  const headingH1 = document.createElement("h1");
  headingH1.className = "text-4xl font-bold font-cursive text-gray-800";
  headingH1.textContent = "Best Coffee For You";

  headingDiv.appendChild(headingH1);

  // Sección de tarjetas de servicios
  const gridDiv = document.createElement("div");
  gridDiv.className =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center";

  // Mapear los datos de los servicios para crear las tarjetas
  data.map((service) => {
    // Crear un contenedor <div> para cada tarjeta de servicio
    const serviceDiv = document.createElement("div");
    serviceDiv.className =
      "rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]";
    serviceDiv.key = service.id;

    // Crear un contenedor <div> para la imagen del servicio
    const imgDiv = document.createElement("div");
    imgDiv.className = "h-[122px]";

    // Crear el elemento <img> para la imagen del servicio
    const img = document.createElement("img");
    img.src = service.img;
    img.alt = "";
    img.className =
      "max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300";

    imgDiv.appendChild(img);

    // Crear un contenedor <div> para el texto del servicio
    const textDiv = document.createElement("div");
    textDiv.className = "p-4 text-center";

    // Crear el elemento <h1> para el nombre del servicio
    const textH1 = document.createElement("h1");
    textH1.className = "text-xl font-bold";
    textH1.textContent = service.coffee;

    // Crear el elemento <p> para la descripción del servicio
    const textP = document.createElement("p");
    textP.className =
      "text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2";
    textP.textContent = service.description;

    // Anidar el nombre y la descripción en el contenedor de texto
    textDiv.appendChild(textH1);
    textDiv.appendChild(textP);

    // Anidar la imagen y el texto en el contenedor de la tarjeta de servicio
    serviceDiv.appendChild(imgDiv);
    serviceDiv.appendChild(textDiv);

    // Añadir la tarjeta de servicio al contenedor de la cuadrícula
    gridDiv.appendChild(serviceDiv);

    serviceDiv.addEventListener("click", () => {
      if (!session) {
        return Swal.fire({
          title: "You need to login first",
          icon: "error",
          confirmButtonText: "Login",
          showCancelButton: true,
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/pages/login";
          }
        });
      }

      Swal.fire({
        title: service.coffee,
        text: service.description,
        imageUrl: Img2,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: service.coffee,
        confirmButtonText: "Create Order",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isDismissed) return;

        const coffe = service.coffee;

        // ! IMPLEMENTAR LÓGICA PARA CREAR UNA ORDEN
      });
    });
  });

  // Anidar el encabezado y la cuadrícula de servicios en el contenedor principal
  containerDiv.appendChild(headingDiv);
  containerDiv.appendChild(gridDiv);
  pyDiv.appendChild(containerDiv);
  fragment.appendChild(pyDiv);

  // Devolver el fragmento de documento completo
  return fragment;
};
