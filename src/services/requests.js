const requestServer = async (endpoint) => {
  const response = await fetch(endpoint);
  const results = await response.json();
  return response.ok ? Promise.resolve(results) : Promise.reject(results);
};
export default requestServer;
