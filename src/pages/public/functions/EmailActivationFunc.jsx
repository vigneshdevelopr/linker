import axios from "axios";

const EmailActivationFunc = async (body) => {
  try {
    const response = await axios.post(
      "https://shortlinkerz.vercel.app/api/auth/emailActivation",
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};

export default EmailActivationFunc;
