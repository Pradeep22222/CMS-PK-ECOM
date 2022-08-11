import { loginAdminUser } from "../../helpers/axiosHelper";
import { setAdminUser } from "./userSlice";
import { toast } from "react-toastify";
export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "pease wait..." });
  const { status, message, user } = await resultPromise;
  toast[status](message);
  status === "success" && dispatch(setAdminUser(user));
};
