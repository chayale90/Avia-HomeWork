/* eslint-disable no-useless-catch */
import axios from "axios";

// For Get
export const doApiGet = async (_url, params = {}) => {
  try {
    return await axios.get(_url, { params });
  } catch (err) {
    throw err;
  }
};

// For Post, Delete, Put, Patch
export const doApiMethod = async (_url, _method, _body = {}) => {
  try {
    return await axios({
      url: _url,
      method: _method,
      data: _body,
    });
  } catch (err) {
    throw err;
  }
};
