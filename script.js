const link1 = document.querySelector("#_link1");
const link2 = document.querySelector("#_link2");
const link3 = document.querySelector("#_link3");
const link4 = document.querySelector("#_link4");

const content1 = document.querySelector("#_content1");
const content2 = document.querySelector("#_content2");
const content3 = document.querySelector("#_content3");
const content4 = document.querySelector("#_content4");

// меняем класс двум элементам на active
function toggleClass(element1, class1, element2, class2) {
  element1.classList.toggle(class1);
  element2.classList.toggle(class2);
}

// удаляем трем элементам общий класс
function deleteActive(elem1, elem2, elem3, commonClass) {
  elem1.classList.remove(commonClass);
  elem2.classList.remove(commonClass);
  elem3.classList.remove(commonClass);
}

link1.addEventListener("click", function () {
  toggleClass(content1, "tabs__content_active", link1, "tabs__link_active");

  deleteActive(content2, content3, content4, "tabs__content_active");
  deleteActive(link2, link3, link4, "tabs__link_active");
});

link2.addEventListener("click", function () {
  toggleClass(content2, "tabs__content_active", link2, "tabs__link_active");

  deleteActive(content1, content3, content4, "tabs__content_active");
  deleteActive(link1, link3, link4, "tabs__link_active");
});

link3.addEventListener("click", function () {
  toggleClass(content3, "tabs__content_active", link3, "tabs__link_active");

  deleteActive(content1, content2, content4, "tabs__content_active");
  deleteActive(link1, link2, link4, "tabs__link_active");
});

link4.addEventListener("click", function () {
  toggleClass(content4, "tabs__content_active", link4, "tabs__link_active");

  deleteActive(content1, content2, content3, "tabs__content_active");
  deleteActive(link1, link2, link3, "tabs__link_active");
});
