const link1 = document.querySelector("#_link1");
const link2 = document.querySelector("#_link2");
const link3 = document.querySelector("#_link3");
const link4 = document.querySelector("#_link4");

const content1 = document.querySelector("#_content1");
const content2 = document.querySelector("#_content2");
const content3 = document.querySelector("#_content3");
const content4 = document.querySelector("#_content4");

link1.addEventListener("click", function () {
  content1.classList.toggle("tabs__content_active");
  link1.classList.toggle("tabs__link_active");

  content2.classList.remove("tabs__content_active");
  content3.classList.remove("tabs__content_active");
  content4.classList.remove("tabs__content_active");

  link2.classList.remove("tabs__link_active");
  link3.classList.remove("tabs__link_active");
  link4.classList.remove("tabs__link_active");
});

link2.addEventListener("click", function () {
  content2.classList.toggle("tabs__content_active");
  link2.classList.toggle("tabs__link_active");

  content1.classList.remove("tabs__content_active");
  content3.classList.remove("tabs__content_active");
  content4.classList.remove("tabs__content_active");

  link1.classList.remove("tabs__link_active");
  link3.classList.remove("tabs__link_active");
  link4.classList.remove("tabs__link_active");
});

link3.addEventListener("click", function () {
  content3.classList.toggle("tabs__content_active");
  link3.classList.toggle("tabs__link_active");

  content1.classList.remove("tabs__content_active");
  content2.classList.remove("tabs__content_active");
  content4.classList.remove("tabs__content_active");

  link1.classList.remove("tabs__link_active");
  link2.classList.remove("tabs__link_active");
  link4.classList.remove("tabs__link_active");
});

link4.addEventListener("click", function () {
  content4.classList.toggle("tabs__content_active");
  link4.classList.toggle("tabs__link_active");

  content1.classList.remove("tabs__content_active");
  content2.classList.remove("tabs__content_active");
  content3.classList.remove("tabs__content_active");

  link1.classList.remove("tabs__link_active");
  link2.classList.remove("tabs__link_active");
  link3.classList.remove("tabs__link_active");
});
