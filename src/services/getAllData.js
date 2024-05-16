const APIURL = "https://random-data-api.com/api/v2/users?size=90";

const getAllData = () => {
  let users = null;
  let error = null;

  const load = async () => {
    try {
      let data = await fetch(APIURL);
      if (!data.ok) {
        throw Error("no data available");
      }
      users = await data.json();
    } catch (err) {
      error = err.message;
      console.log(error);
    }
    return { users };
  };

  return { users, error, load };
};

export default getAllData;
