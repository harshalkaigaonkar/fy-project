export const postRequest = (url, data) => {
  const payload = JSON.stringify(data);
  return fetch(url, {
    method: "POST",
    body: payload,
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
  });
};
