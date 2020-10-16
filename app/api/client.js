import { create } from "apisauce";

import authStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://10.0.0.12:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  // make sure to match default of the original get function
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    // save in cache after the get call
    cache.store(url, response.data); // dont store all responses, need to create a whitelist/Blacklist
    return response;
  }

  const data = await cache.get(url);
  //Return an object with a succesful response
  return data ? { ok: true, data } : response;
};

export default apiClient;
