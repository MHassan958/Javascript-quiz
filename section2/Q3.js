// Fetch the JSON data from the URL
fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Parse the member array to an object
    const members = data["members"];
    const firstMember = members[0];
    const parsedMember = JSON.parse(JSON.stringify(firstMember));

    // Display the parsed member object
    console.log("Parsed Member Object:");
    console.log(parsedMember);

    // Stringify the last member object
    const lastMember = members[members.length - 1];
    const stringifiedLastMember = JSON.stringify(lastMember);

    // Display the stringified last member object
    console.log("Stringified Last Member Object:");
    console.log(stringifiedLastMember);
  })
  .catch((error) => console.error(error));
