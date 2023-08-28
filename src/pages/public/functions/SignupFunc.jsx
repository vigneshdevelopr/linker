import axios from "axios";

const SignupFunc = async (body) => {
  try {
    const response = await axios.post("https://shortlinkerz.vercel.app/api/auth/signup", body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default SignupFunc;
