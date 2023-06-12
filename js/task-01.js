const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});

