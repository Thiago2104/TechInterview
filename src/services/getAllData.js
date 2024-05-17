// Set the type of data to fetch (e.g., users, addresses, etc.)
const type = "users";

const APIURL = new URL(`https://random-data-api.com/api/v2/${type}`);

let params = new URLSearchParams();

// Set the number of items to fetch
params.set("size", 10);
params.set("response_type", "json");

APIURL.search = params;

export const load = async () => {
  try {
    const response = await Promise.race([
      fetch(APIURL),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout occurred")), 3000)
      ),
    ]);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching data");
  }
};
