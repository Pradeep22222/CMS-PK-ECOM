import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserUrlEP = rootUrl + "/admin-user";
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// post new admin user
export const postUser = (data) => {
  const option = {
    method: "POST",
    url: adminUserUrlEP,
    data,
  };
  return apiProcessor(option);
};
// verify admin user email account
export const emailVerifyAdminUser = (data) => {
  const option = {
    method: "PATCH",
    url: adminUserUrlEP + "/verify-email",
    data,
  };
  return apiProcessor(option);
};
