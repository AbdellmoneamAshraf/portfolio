const cardclain = [
  {
    Id: 1,
    Image: "./imgs/WhatsApp Image 2026-10-30 at 4.33.49 PM.jpeg",
    Title: " Designer andFrontend Developerbased in Algeria.I'm currently a second-year Computer Science student, where I've developed a deep interest in designi intuitive and visually appealing user interfaces that bring ideas to life on the web I'm particularly focused on modern web design,responsive layouts,and interactive user experiences that blend beauty with funct",
    Button: "see more",
    link:"https://abdellmoneamashraf.github.io/project/",
  },

];
// ---------------------------------------------------
const Icons = [
  "fa-brands fa-js",
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-react",
  "fa-brands fa-git-alt",
  "fa-brands fa-figma",
];

const ring = document.getElementById("ring");
let radius;

function updateRadius() {
  radius = Math.max(0, Math.min(
    ring.offsetWidth / 2 + 40,
    (window.innerWidth - ring.offsetWidth) / 2 - 20
  ));
}

const speed = 0.2;
let rotation = 0;

const items = Icons.map((cls) => {
  const el = document.createElement("div");
  el.className =
    "absolute top-1/2 left-1/2 -ml-5 -mt-5 w-10 h-10 flex items-center justify-center " +
    "rounded-full bg-black/80 border border-red-600 text-red-600 " +
    "shadow-[0_0_12px_rgba(239,68,68,0.5)]";
  el.innerHTML = `<i class="${cls}"></i>`;
  ring.appendChild(el);
  return el;
});

function animate() {
  updateRadius();
  rotation += speed;
  items.forEach((el, i) => {
    const angle = ((360 / items.length) * i + rotation) * (Math.PI / 180);
    el.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
  });
  requestAnimationFrame(animate);
}
animate();

// -----------------------------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-x-10');
    }
    else {
      entry.target.classList.add('opacity-0', 'translate-x-10');
    }
  });
},
  {
    threshold: 0.3,
  }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
// ---------------------------------------------------------------
const content = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', '-translate-x-10');
    }
    else {
      entry.target.classList.add('opacity-0', '-translate-x-10');
    }
  });
},
  {
    threshold: 0.2,
  }
);
document.querySelectorAll('.reveal').forEach((el) => content.observe(el));
// -----------------------------------------------------------------
// select:-
const cards = document.querySelector('.cards');
cardclain.forEach((P) =>{
  cards.innerHTML += `<div
                class="projects w-75 p-5 flex flex-col gap-5 hover:border hover:border-red-600 hover:shadow-red-600 rounded-xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_20px_#ff0000]">
                <div class="projects w-65 h-65 border border-red-600 shadow-red-600 shadow-md rounded-xl">
                    <a class="h-full w-full overflow-hidden" target="_blank" href="${P.link}"><img
                            src="${P.Image}" alt="${P.Id}"
                            class="w-full h-full object-cover overflow-hidden rounded-xl"></a>
                </div>
                <div class="">
                    <p class="text-white">${P.Title}</p>
                </div>
                <button
                    class="text-red-700 hover:text-red-600 p-2 border border-red-600 rounded-xl w-22 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_10px_#ff0000] hover:shadow-red-600">
                    <a class="h-full w-full flex items-center" target="_blank" href="${P.link}">${P.Button}</a>
                </button>
            </div>`
});
