const header = new Headers();
header.append("x-api-key", "c8fa7606-4bd8-4911-a1a1-ceadf45ac8ad");
const reqestObject = {
  method: "GET",
  headers: header,
  redirect: "follow",
};

/*
@function getImagesRequest
@params: url:string query string
@description:
*/

function getImagesRequest(url) {
  const result = fetch(url, reqestObject)
    .then((res) => res.json())
    .then((data) => data);

  return result;
}

function getBreedsRequest() {
  return "getBreedsRequest";
}

export { getImagesRequest };
