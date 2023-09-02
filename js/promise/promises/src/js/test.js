// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  // Simulate a server request with a delay
  setTimeout(() => {
    const data = "Data has been fetched!";

    // Check if the data was fetched successfully or if there was an error
    const success = true;

    if (success) {
      // Resolve the Promise with the data
      resolve(data);
    } else {
      // Reject the Promise with an error message
      reject("Error: Unable to fetch data.");
    }
  }, 2000); // Simulated delay of 2 seconds
});

// Using the Promise
fetchData
  .then((result) => {
    // This block is executed when the Promise is resolved
    console.log(result); // Output: "Data has been fetched!"
  })
  .catch((error) => {
    // This block is executed when the Promise is rejected
    console.error(error); // Output: "Error: Unable to fetch data."
  });
