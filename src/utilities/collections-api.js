import sendRequest from "./send-request";
const BASE_URL = '/api/collections';


//View collection as a logged in user
export function addArtToCollection(artId) {
    return sendRequest(`${BASE_URL}/${artId}/artwork`, 'PUT') 
}

export function viewCollection() {
    return sendRequest(`${BASE_URL}/collection`);
}

//Add art to your collection 
// export function addToCollection() {
//     return sendRequest(`${BASE_URL}/collection`)
// }