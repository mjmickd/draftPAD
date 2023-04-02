import * as artworksAPI from "../../utilities/artworks-api";
import * as collectionsAPI from "../../utilities/collections-api";
import './ArtworkItem.css';




export default function ArtworkItem({artwork, showButton}) {
    const image1 = "https://www.artic.edu/iiif/2/"
    const image3 = "/full/843,/0/default.jpg";
    const image2 = artwork.image_id;
    const imageURL = `${image1}${image2}${image3}`


    console.log(artwork.image_id, "testing null")
    if (artwork.image_id === null) return null

    console.log(`${image1}${image2}${image3}`, artwork.title)

    const placeholder =  "https://e7.pngegg.com/pngimages/49/270/png-clipart-happy-emoji-smiley-emoticon-black-and-white-computer-icons-smiley-face-s-white-face-thumbnail.png"
    
    function onImageError (evt) {
        console.log('image error')
        evt.target.src = placeholder;
    }

    async function handleAddToCollection() {
        const formData = {
            name: artwork.title,
            image: imageURL, 
            apiID: artwork.id,
            artist: artwork.artist_title,
            yearCreated: artwork.date_end,
            styleTitle: artwork.style_title,
            typeOfArt: artwork.medium_display,
            size: artwork.dimensions, 
            }
        const newPiece = await artworksAPI.createArtwork(formData)
        // const myCollection = await artworksAPI.createArtwork(``)
        console.log(newPiece, "is this it?")
       

        // const addedCollection = await collectionsAPI.addToCollection()
    }

    // async function handleAddPieceToCollection() {
    //     const [newPiece, setNewPiece] = 

    // }
    

    async function handleAddToWishlist() {
        const formData = {
            name: artwork.title,
            image: imageURL, 
            apiID: artwork.id,
            artist: artwork.artist_title,
            yearCreated: artwork.date_end,
            styleTitle: artwork.style_title,
            typeOfArt: artwork.medium_display,
            size: artwork.dimensions, 
        }
        const newWish = await artworksAPI.createWishlist(formData)

    }
    
    return (
        <div className="ArtForm">
        <>
        <h1>{artwork.title}</h1>
        <img src={`${imageURL}`} alt="" 

        style={{width:'20vw', height:'20vw', alignItems:'left', }}
        onError={onImageError}
        />
        <ul>
            <li>{artwork.artist_title}</li>
            <li>{artwork.date_end}</li>
            <li>{artwork.style_title}</li>
            <li>{artwork.medium_display}</li>
            <li>{artwork.artwork_type_title}</li>
            <li>{artwork.dimensions}</li>
        </ul>
        {showButton ? 
        <>
            <button className="art-btn" onClick={() => handleAddToCollection()}>In My Collection</button>
            <button className="art-btn" onClick={() => handleAddToWishlist()}>Add To Wishlist</button>
        </>
        :
        ""
        }
        </>
        </div>
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