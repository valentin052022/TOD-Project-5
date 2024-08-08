import "/src/styles.css";

const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const pages = (function () {
  const cont_div = document.getElementById("content");

  const home = () => {
    cont_div.classList.add("overlay");

    cont_div.innerHTML = `
        <div class="div_home">
            <h1 class="h1_title">Welcome to PlatiniRestaurant</h1>
            <p class="p_title">Find the best food</p>
        </div>
        `;
  };

  const menus = () => {
    cont_div.classList.remove("overlay");

    const plates = [
      { name: "Bistro", price: "$12", src: "/src/images/bistro.png" },
      { name: "Carne", price: "$10", src: "/src/images/carne.png" },
      { name: "Costilla", price: "$20", src: "/src/images/costilla.png" },
      { name: "Platini", price: "$30", src: "/src/images/platini.png" },
      { name: "Solomillo", price: "$15", src: "/src/images/solomillo.png" },
      { name: "Tabule", price: "$22", src: "/src/images/tabule.png" },
    ];

    cont_div.innerHTML = `
    <section class="cont_menus">
      ${plates.map(
        (item) =>
          `<article class="menu_card">
            <div class="cont_info_menu">
              <h2 class="name">${item.name}</h2>
              <b>${item.price}</b>
            </div>
            <div class="cont_img_card">
              <img src=${item.src}></img>
            </div>
          </article>`
      ).join('')}
    </section>`;

  };

  const contact = () => {
    cont_div.classList.remove("overlay");

    cont_div.innerHTML = `<section class="cont_contact">
      <form action="#" class="cont_form">
        <h1>Contact With PlatiniRestaurant</h1>
        <div class="cont_inputs">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="cont_inputs">
          <label for="email">Email</label>
          <input type="email" name="Email" id="email" />
        </div>
        <div class="cont_inputs">
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="20" rows="5"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>`;
  };

  return { home, menus, contact };
})();

pages.home();

inicio.addEventListener("click", pages.home);
menu.addEventListener("click", pages.menus);
contact.addEventListener("click", pages.contact);