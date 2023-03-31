import sendRequest from "./send-request";
const BASE_URL = '/api/artworks';


//View collection as a logged in user
export function viewCollection() {
    return sendRequest(`${BASE_URL}/collection`);
}

//Add art to your collection 
export function addToCollection()