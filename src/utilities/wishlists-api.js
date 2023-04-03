import sendRequest from "./send-request";
const BASE_URL = '/api/wishlists';

export function addArtToWishlist(artId) {
    return sendRequest (`${BASE_URL}/${artId}/artwork/wishlist`, 'PUT')
}