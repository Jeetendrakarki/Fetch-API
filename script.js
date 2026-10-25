let url =
  "https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m";
// fetch method always returns a promise

// let promise = fetch(url);
// console.log(promise);

// fetching url is asynchronous so we use async await

let getData = async () => {
  console.log("getting data....");
  let response = await fetch(url);
  console.log(response);
  let finalData = await response.json();
  console.log(finalData);
};
