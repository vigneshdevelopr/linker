import axios from "axios";

const ForgotPasswordFunc = async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/forgot-password",
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ForgotPasswordFunc;
