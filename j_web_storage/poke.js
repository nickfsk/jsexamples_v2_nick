function fetchData() {
  
  
    fetch('https://pokeapi.co/api/v2/pokemon?offset=13&limit=5')
  .then((response) => {
    if (!response)
        throw new Error("Network response is NOT ok!")
    return response.json();
  })
  .then((data) => {
    const returnedCharacters = data.results;

    if (!returnedCharacters.length)
        throw new Error("No characters found");

    //if (!returnedCharacters)
    console.log(data.results);

  })
  .catch((error) => {
    console.log(error.message);

  });

    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //    //console.log('json:', response.json());
    //   return response.json();
    // })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
}

fetchData();