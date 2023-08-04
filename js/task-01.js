const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Element: ${item.lastElementChild.children.length}`)});