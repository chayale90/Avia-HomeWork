import { doApiGet, doApiMethod } from "../services/apiService";
import { toast } from "react-toastify";
import { ADD_USER, USERS_LIST, USERS_URL } from "../constants/apis";

export async function getUsers() {
  try {
    let resp = await doApiGet(USERS_LIST);
    if (resp.status === !200) return toast.error(resp.message);
    return resp.data;
  } catch (err) {
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}

export async function createUser(userData) {
  try {
    let resp = await doApiMethod(ADD_USER, "POST", userData);
    if (resp.status === !201) return toast.error(resp.message);
    return resp.data;
  } catch (err) {
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}

export async function getUserByEmail(userEmail) {
  let url = `${USERS_URL}/user-info/${userEmail}`;
  try {
    let resp = await doApiGet(url);
    if (resp.status === !200) return toast.error(resp.message);
    return resp.data;
  } catch (err) {
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}
