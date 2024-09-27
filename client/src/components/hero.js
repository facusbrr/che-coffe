import HeroPng from "../assets/coffee2.png";

export const hero = () => {
  const heroDiv = document.createElement("div");
  heroDiv.classList.add(
    "min-h-[550px]",
    "sm:min-h-[600px]",
    "bg-brandDark",
    "flex",
    "justify-center",
    "items-center",
    "text-white"
  );

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container", "pb-8", "sm:pb-0");

  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid", "grid-cols-1", "sm:grid-cols-2");

  // Text content section
  const textDiv = document.createElement("div");
  textDiv.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "gap-6",
    "pt-12",
    "sm:pt-0",
    "text-center",
    "sm:text-left",
    "order-2",
    "sm:order-1"
  );

  const h1 = document.createElement("h1");
  h1.setAttribute("data-aos", "fade-up");
  h1.setAttribute("data-aos-once", "true");
  h1.classList.add("text-5xl", "sm:text-6xl", "lg:text-7xl", "font-bold");
  h1.innerHTML =
    'We serve the richest <span data-aos="zoom-out" data-aos-delay="300" class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">Coffee</span> in the city';

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("data-aos", "fade-up");
  buttonDiv.setAttribute("data-aos-delay", "400");

  const button = document.createElement("button");
  button.classList.add(
    "bg-gradient-to-r",
    "from-primary",
    "to-secondary",
    "border-2",
    "border-primary",
    "hover:scale-105",
    "duration-200",
    "text-white",
    "py-2",
    "px-4",
    "rounded-full"
  );
  button.textContent = "Coffee And Code";

  buttonDiv.appendChild(button);
  textDiv.appendChild(h1);
  textDiv.appendChild(buttonDiv);

  // Image section
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("data-aos", "zoom-in");
  imageDiv.setAttribute("data-aos-duration", "300");
  imageDiv.classList.add(
    "min-h-[450px]",
    "flex",
    "justify-center",
    "items-center",
    "relative",
    "order-1",
    "sm:order-2"
  );

  const img = document.createElement("img");
  img.setAttribute("data-aos-once", "true");
  img.src = HeroPng;
  img.alt = "biryani img";
  img.classList.add(
    "w-[300px]",
    "sm:w-[450px]",
    "sm:scale-125",
    "mx-auto",
    "spin"
  );

  const topLeftDiv = document.createElement("div");
  topLeftDiv.setAttribute("data-aos", "fade-left");
  topLeftDiv.classList.add(
    "bg-gradient-to-r",
    "from-primary",
    "to-secondary",
    "p-3",
    "rounded-xl",
    "absolute",
    "top-10",
    "left-10"
  );

  const topLeftH1 = document.createElement("h1");
  topLeftH1.classList.add("text-white");
  topLeftH1.textContent = "Hey Coder";

  topLeftDiv.appendChild(topLeftH1);

  const bottomRightDiv = document.createElement("div");
  bottomRightDiv.setAttribute("data-aos", "fade-right");
  bottomRightDiv.setAttribute("data-aos-offset", "0");
  bottomRightDiv.classList.add(
    "bg-gradient-to-r",
    "from-primary",
    "to-secondary",
    "p-3",
    "rounded-xl",
    "absolute",
    "bottom-10",
    "right-10"
  );

  const bottomRightH1 = document.createElement("h1");
  bottomRightH1.classList.add("text-white");
  bottomRightH1.textContent = "Best Coffee";

  bottomRightDiv.appendChild(bottomRightH1);

  imageDiv.appendChild(img);
  imageDiv.appendChild(topLeftDiv);
  imageDiv.appendChild(bottomRightDiv);

  gridDiv.appendChild(textDiv);
  gridDiv.appendChild(imageDiv);

  containerDiv.appendChild(gridDiv);
  heroDiv.appendChild(containerDiv);

  return heroDiv;
};
