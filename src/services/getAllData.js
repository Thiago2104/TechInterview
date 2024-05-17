const APIURL = "https://random-data-api.com/api/v2/users?size=90";

export const load = async () => {
  try {
    let data = await fetch(APIURL);
    if (!data.ok) {
      throw Error("no data available");
    }
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};
