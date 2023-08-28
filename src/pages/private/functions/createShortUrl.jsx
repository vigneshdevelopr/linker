import axios from "axios";

const createShortUrl = async (body, authorizationToken) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/urlPrivate/createShortUrl",
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
