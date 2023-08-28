import axios from "axios";

const SigninFunc = async (body) => {
  try {
    const response = await axios.post("https://shortlinkerz.vercel.app/api/auth/signin", body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default SigninFunc;
