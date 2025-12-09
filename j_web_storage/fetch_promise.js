function fetchData() {
  // TODO: fetch via promise
  fetch("https://reqres.in/api/unknown", {
    headers: { "x-api-key": "reqres_381e0f1190d3443f8650e541a0b206c8" },
  }).then((response) => {
    
    
    if(!response.ok)
      throw new Error('Network response is NOT ok!');
      console.log(response);
    
    
    return response.json();
 
  })
  .then((data ) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error.message);
  }).finally(() => {
    console.log("Experiment completed")
  });
}

fetchData();
