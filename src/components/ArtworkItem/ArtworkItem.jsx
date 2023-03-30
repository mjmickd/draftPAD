

import { useState } from "react";
import * as artworksAPI from "../../utilities/artworks-api";




export default function ArtworkItem({artwork}) {
    const [collection, setCollection] = useState([])
    const image1 = "https://www.artic.edu/iiif/2/"
    const image3 = "/full/843,/0/default.jpg";
    const image2 = artwork.image_id

    console.log(artwork.image_id, "testing null")
    if (artwork.image_id === null) return null

    console.log(`${image1}${image2}${image3}`, artwork.title)

    const placeholder =  "https://e7.pngegg.com/pngimages/49/270/png-clipart-happy-emoji-smiley-emoticon-black-and-white-computer-icons-smiley-face-s-white-face-thumbnail.png"
    
    function onImageError (evt) {
        console.log('image error')
        evt.target.src = placeholder;
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        const myCollection = await artworksAPI.searchArtApi(collection)
        artwork(myCollection)
        setCollection("")
    }
    
    
    return (
        <>
        <form>
        <h1>{artwork.title}</h1>
        <img src={`${image1}${image2}${image3}`} alt="" 

        style={{width:'5vw', height:'5vw'}}
        onError={onImageError}
        />
        <button type="submit" >In My Collection</button>
        <button type="submit">Borrow Art Piece</button>
        </form>
        </>
    // <button className='artworkFormButton' >
    // {/* // onClick={() => handleArtworkDetailPage()} */}
    //     <form onSubmit="handleSubmit">
    //     <img src="" alt="" />
    //     <h3>Title</h3>
    //     <h4>Artist</h4>
    //     <p>description etc.</p>
    //     </form>
    // </button>
            
    )
}