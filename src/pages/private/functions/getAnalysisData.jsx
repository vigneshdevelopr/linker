import axios from "axios";

const getAnalysisData = async (authorizationToken) => {
  try {
    const response = await axios.get("https://shortlinkerz.vercel.app/api/urlPrivate/analysis", {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    return e.response;
  }
};

export default getAnalysisData;
