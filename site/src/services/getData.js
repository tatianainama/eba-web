const API = process.env.API || '/';

const GetData = (route) => {
  const request = new Request(`${API}${route}`);
  return fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
}

export default GetData;