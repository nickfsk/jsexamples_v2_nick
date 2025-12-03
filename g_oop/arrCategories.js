const arrCategories = new Array(
    {name : "Cat A", description: "Cars below 1600cc"},
    { name: "Cat B", description: "Cars above 1600cc"},
    { name: "Cat C", description: "Goods vehicles and buses"},

);


console.log(arrCategories.length);

console.log(arrCategories[0].name, arrCategories[0].description);

for ( index = 0; index < arrCategories.length; index++)
    console.log(arrCategories[index].name, arrCategories[index].description);

// arrCategories.forEach((element) => {
//     console.log(element.name, element.description)
// })

arrCategories.push({name: "Cat E", description: "Open"});


arrCategories.forEach((element) => {
    console.log(element.name, element.description)
})
