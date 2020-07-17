const API = process.env.API || '/';

const GetData = (route, body) => {
  const request = new Request(`${API}${route}`, {
    method: 'GET',
    ...body && { body }
  });
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