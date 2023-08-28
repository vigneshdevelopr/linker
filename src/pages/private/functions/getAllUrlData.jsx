import axios from "axios";

const getAllUrlData = async (authorizationToken) => {
  try {
    const response = await axios.get("https://shortlinkerz.vercel.app/api/urlPrivate/getAll", {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    return e.response;
  }
};

export default getAllUrlData;
