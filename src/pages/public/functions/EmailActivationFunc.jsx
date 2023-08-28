import axios from "axios";

const EmailActivationFunc = async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/emailActivation",
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};

export default EmailActivationFunc;
