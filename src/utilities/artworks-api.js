
import sendRequest from "./send-request";
const BASE_URL = '/api/artworks';


export async function searchArtApi(data) {
  return sendRequest(`${BASE_URL}/search?q=${data}`);
}

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function createArtwork(data) {
  return sendRequest(BASE_URL, "POST", data )
}

export async function getArtworkById(_id){
  return sendRequest(`${BASE_URL}/${_id}`)
}

export async function createWishlist(data) {
  return sendRequest(BASE_URL, "POST", data)
}

export async function deleteArtwork(artworkId) {
  return sendRequest(`${BASE_URL}/${artworkId}`, "DELETE")
}
