import { getArtworkById } from "../../utilities/artworks-api"
import * as collectionsAPI from '../../utilities/collections-api'
import * as artworksAPI from '../../utilities/artworks-api'


export default function CollectionItem({artwork, setCollection}){
    
    async function handleDeleteFromCollection(artworkId) {
        const updatedCollection = await artworksAPI.deleteArtwork(artworkId)
        setCollection(updatedCollection.myCollection)
        }
       
    
    return (
        <>
        {artwork.name}

        <button onClick={() => handleDeleteFromCollection(artwork._id)}>delete</button>
        </>
     )
}

