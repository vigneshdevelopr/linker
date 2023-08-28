import axios from "axios";

const ResetPasswordFunc = async (body, authorizationToken) => {
  try {
    const response = await axios.post(
      "https://shortlinkerz.vercel.app/api/auth/reset-password",
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
export default ResetPasswordFunc;
