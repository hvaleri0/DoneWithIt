import { useState } from "react";
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args); // if the call has arguments use spread operator
    setLoading(false);

    setError(!response.ok); //compbine the statements
    setData(response.data);
    return response;
  };

  return { request, data, error, loading };
};
