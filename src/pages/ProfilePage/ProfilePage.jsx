
import { getArtworkById } from "../../utilities/artworks-api"
import * as collectionsAPI from "../../utilities/collections-api";


export default function ProfilePage({collection}) {


    async function collectionItem({})

    // async function getCollection() {
    //     const newPiece = await ordersAPI.getCart();
    //     setCart(cart);
    //   }
    //   getCart();
    // }, []);

    return (
        <>
        <h1>Profile Page</h1>
        <form>
        getArtworkById = {getArtworkById}
        </form>
        </>
    )
}