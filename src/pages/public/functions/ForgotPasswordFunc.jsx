import axios from "axios";

const ForgotPasswordFunc = async (body) => {
  try {
    const response = await axios.post(
      "https://shortlinkerz.vercel.app/api/auth/forgot-password",
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ForgotPasswordFunc;
