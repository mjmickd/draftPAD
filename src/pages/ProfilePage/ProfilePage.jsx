
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { getArtworkById } from "../../utilities/artworks-api"
import * as collectionsAPI from "../../utilities/collections-api";


export default function ProfilePage({collection, setCollection}) {
    console.log(collection)
   const collectionItems = collection.map((artwork) => (
        <CollectionItem  key={artwork._id} artwork={artwork} setCollection={setCollection}/>
    ))


   

    return (
        <>
        <h1>Profile Page</h1>
        <div>
            {collectionItems}
        </div>
        </>
    )
}