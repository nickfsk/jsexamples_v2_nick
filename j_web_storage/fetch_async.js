async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/unkwown', {
    headers: { 'x-api-key': 'reqres_381e0f1190d3443f8650e541a0b206c8' }
});

if(response.ststus === 403)
  throw new Error(`Permission denied, please auth`);
else if(!response.ok)
  throw new Error(`Network response is Not Ok`);


  
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();