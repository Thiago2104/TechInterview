const APIURL = "https://random-data-api.com/api/v2/users?size=90";

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
    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching data");
  }
};
