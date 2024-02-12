import axios from "axios";
import { api } from "../config";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await api.post("/auth/login", user);
    dispatch(loginSuccess(res.data.userInfo))
  } catch (error) {
    console.log(error)
    dispatch(
      loginFailure(
        error.response.data?.message || "Unable to login! Please try again later"
      )
    );
  }
};
