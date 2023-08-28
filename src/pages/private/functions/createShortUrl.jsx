import axios from "axios";

const createShortUrl = async (body, authorizationToken) => {
  try {
    const response = await axios.post(
      "https://shortlinkerz.vercel.app/api/urlPrivate/createShortUrl",
      body,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    return e.response;
  }
};

export default createShortUrl;
