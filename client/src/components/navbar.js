import Logo from "../assets/website/coffee_logo.png";

const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
];

// Mapea el array de menús para crear una lista de elementos <li> con enlaces <a>
const menues = menuList.map((menu) => {
  // Crear un elemento <li> para cada menú
  const li = document.createElement("li");

  // Crear un elemento <a> para el enlace del menú
  const a = document.createElement("a");
  a.href = menu.link; // Establecer el enlace del menú
  a.className =
    "inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"; // Establecer las clases CSS para el estilo
  a.textContent = menu.name; // Establecer el texto del enlace con el nombre del menú

  // Anidar el enlace <a> dentro del elemento <li>
  li.appendChild(a);

  // Devolver el elemento <li> para que se incluya en el array resultante
  return li;
});

function createUserAvatar(username, avatarUrl = null) {
  // Crear el contenedor principal
  const userDiv = document.createElement("div");
  userDiv.className = "flex items-center gap-2";

  // Crear el elemento de avatar
  let avatarElement;
  if (avatarUrl) {
    avatarElement = document.createElement("img");
    avatarElement.src = avatarUrl;
    avatarElement.alt = `${username}'s avatar`;
    avatarElement.className = "w-8 h-8 rounded-full";
  } else {
    avatarElement = document.createElement("div");
    avatarElement.className =
      "w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white";
    avatarElement.textContent = username.charAt(0).toUpperCase();
  }

  // Crear el elemento de texto para el nombre
  const usernameSpan = document.createElement("span");
  usernameSpan.textContent = username;
  usernameSpan.className = "text-white/70 text-xl";

  // Anidar los elementos
  userDiv.appendChild(avatarElement);
  userDiv.appendChild(usernameSpan);

  return userDiv;
}

export function navbar(session = null) {
  // Crear el contenedor principal de la navbar
  const navbarDiv = document.createElement("div");
  navbarDiv.className =
    "bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white";

  // Crear el contenedor interno
  const containerDiv = document.createElement("div");
  containerDiv.className = "container py-2";

  // Crear el contenedor flex para alinear los elementos
  const flexDiv = document.createElement("div");
  flexDiv.className = "flex justify-between items-center";

  // Crear el contenedor del logo
  const logoDiv = document.createElement("div");
  logoDiv.setAttribute("data-aos", "fade-down");
  logoDiv.setAttribute("data-aos-once", "true");

  // Crear el enlace del logo
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.className =
    "font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive";

  // Crear la imagen del logo
  const logoImg = document.createElement("img");
  logoImg.src = Logo;
  logoImg.alt = "Logo";
  logoImg.className = "w-14";

  // Crear el texto del logo
  const logoText = document.createTextNode("Che Coffee");

  // Anidar la imagen y el texto en el enlace del logo
  logoLink.appendChild(logoImg);
  logoLink.appendChild(logoText);
  logoDiv.appendChild(logoLink);

  // Crear el contenedor del menú
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("data-aos", "fade-down");
  menuDiv.setAttribute("data-aos-once", "true");
  menuDiv.setAttribute("data-aos-delay", "300");
  menuDiv.className = "flex justify-between items-center gap-4";

  // Crear la lista del menú
  const menuUl = document.createElement("ul");
  menuUl.className = "hidden sm:flex items-center gap-4 justify-center";

  // Añadir los elementos del menú a la lista
  menues.map((e) => {
    menuUl.appendChild(e);
  });

  // Crear el botón de "Order"
  const orderButton = document.createElement("button");
  orderButton.className =
    "bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3";
  orderButton.textContent = "Orders";

  orderButton.addEventListener("click", () => {
    window.location.href = "/pages/orders.html";
  });

  // Crear el icono SVG para el botón de "Order"
  const orderSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  orderSvg.classList.add(
    "text-xl",
    "text-white",
    "drop-shadow-sm",
    "cursor-pointer"
  );
  orderSvg.setAttribute("stroke", "currentColor");
  orderSvg.setAttribute("fill", "currentColor");
  orderSvg.setAttribute("stroke-width", "0");
  orderSvg.setAttribute("viewBox", "0 0 640 512");
  orderSvg.setAttribute("height", "24px");
  orderSvg.setAttribute("width", "24px");
  orderSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  // Crear la ruta del icono SVG
  const orderPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  orderPath.setAttribute(
    "d",
    "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
  );

  // Anidar la ruta en el SVG y el SVG en el botón
  orderSvg.appendChild(orderPath);
  orderButton.appendChild(orderSvg);

  // Añadir evento de click al botón de "Order"
  orderButton.addEventListener("click", () => {
    console.log("Click without account");
  });

  // Anidar la lista del menú y el botón de "Order" en el contenedor del menú
  menuDiv.appendChild(menuUl);
  menuDiv.appendChild(orderButton);

  // Si hay sesión, mostrar el avatar y el botón de "Logout"
  if (session) {
    const avatar = createUserAvatar(
      session.user.username,
      session.user.avatarUrl
    );
    menuDiv.appendChild(avatar);

    const logoutButton = document.createElement("button");
    logoutButton.className =
      "bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full";
    logoutButton.textContent = "Logout";

    logoutButton.addEventListener("click", () => {
      // ! HACER EL LOGOUT DEL USUARIO Y REDIRIGIR A LA PÁGINA DE LOGIN
    });

    menuDiv.appendChild(logoutButton);
  } else {
    // Si no hay sesión, mostrar el botón de "Login"
    const loginButton = document.createElement("button");
    loginButton.className =
      "bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full";
    loginButton.textContent = "Login";

    loginButton.addEventListener("click", () => {
      // Redirigir a la página de login
      window.location.href = "/pages/login.html";
    });

    menuDiv.appendChild(loginButton);
  }

  // Anidar el contenedor del logo y el contenedor del menú en el contenedor flex
  flexDiv.appendChild(logoDiv);
  flexDiv.appendChild(menuDiv);

  // Anidar el contenedor flex en el contenedor principal
  containerDiv.appendChild(flexDiv);
  navbarDiv.appendChild(containerDiv);

  return navbarDiv;
}
