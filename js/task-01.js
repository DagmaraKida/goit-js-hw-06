/* Write a script that:

Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
For each li.item element in the ul#categories list, will find and display in the console the element header text 
(<h2> tag) and the number of elements in the category (all nested <li>)..*/

const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
