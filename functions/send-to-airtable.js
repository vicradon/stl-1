const callFunction = (data) => {
  const jsonData = JSON.stringify(data);
  
  return fetch(process.env.SERVERLESS_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: jsonData,
  });
};

export default callFunction;
