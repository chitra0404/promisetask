//adding click function for display the cast details ,async function to fetch the API url for getting the data
document.getElementById("getit").addEventListener("click", async () => {
  let response = await fetch(`https://api.tvmaze.com/shows/1/cast`);
 let data = await response.json();//In this getting the data in json format
 
 document.getElementById(
    "posts"
  ).innerHTML = `season ID: ${data[0].person.id}`;//id of the cast is displayed in posts id in div 
  document.getElementById(
    "posts1"
  ).innerHTML =` Name: ${data[0].person.name}`;
 
  document.getElementById(
    "posts2"
  ).innerHTML =` Birthday: ${data[0].person.birthday}`;

document.getElementById(
  "posts3"
).innerHTML =` country:${data[0].person.country.name}`;
});

//adding click function for display the cast details ,async function to fetch the API url for getting the data

document.getElementById("getit1").addEventListener("click", async () => {
  let response = await fetch(`https://api.tvmaze.com/shows/1/cast`);
 let data = await response.json();//In this getting the data in json format


document.getElementById(
  "posts-a"
).innerHTML = `season ID: ${data[1].person.id}`;//id of the cast is displayed in posts id in div 
document.getElementById(
  "posts1a"
).innerHTML =` Name: ${data[1].person.name}`;

document.getElementById(
  "posts2a"
).innerHTML =` Birthday: ${data[1].person.birthday}`;

document.getElementById(
"posts3a"
).innerHTML =` country:${data[1].person.country.name}`;
});