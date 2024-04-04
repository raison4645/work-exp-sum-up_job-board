// const baseURL = 'https://glstp-dev-api.azurewebsites.net/api/'
const baseURL = process.env.NEXT_PUBLIC_API_URL

// TODO: add handling header in the api function
// TODO: does the function needs additional query handling?
// TODO: add the rest function for api fetch (post, put, delete)
async function getData(route, id) {
  try {
    const res = id ? await fetch(`${baseURL}${route}/${id}`) : await fetch(`${baseURL}${route}/`);
    const data = await res.json();
    return data;
  } catch {
    console.error()
    return (
      <div>An Error Occured</div>
    )
  }
}

export { getData };