import { toast } from "react-toastify";
import { doApiGet, doApiMethod } from "@/services/apiService";
import { ADD_USER, USERS_LIST, USERS_URL } from "@/constants/apis";

export async function getUsers() {
  try {
    let resp = await doApiGet(USERS_LIST);
    return resp.data;
  } catch (err) {
    console.log({ error: err.response.data.message });
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}

export async function createUser(userData) {
  try {
    let resp = await doApiMethod(ADD_USER, "POST", userData);
    return resp;
  } catch (err) {
    console.log({ error: err.response.data.message });
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}

export async function getUserByEmail(userEmail) {
  let url = `${USERS_URL}/user-info/${userEmail}`;
  try {
    let resp = await doApiGet(url);
    return resp.data;
  } catch (err) {
    console.log({ error: err.response.data.message });
    toast.error("יש בעיה בבקשה נסה מאוחר יותר");
    throw err;
  }
}
