import * as artworksAPI from "../../utilities/artworks-api";
import { useState } from "react";



export default function ArtworkItem() {
    const [artworkForm, setArtworkForm] = useState([])

    // async function getImage(req, res) {
    //   try{
    //     const APIImage = req.params.image_id
    //     const image = fetch(`${BASE_URL}/search?q=${image_id}`)
    //     .then(res => res.json());
    //   } 
    //     catch (err) {
    //         res.status(400).json(err);
    //     }
    // }
    
    async function handleSubmit(evt){
        evt.preventDefault()
        const artResults = await artworksAPI.searchArtApi(artworkForm) 
        setArtInfo(artResults);
        setFormData("")
    }
   
    
    return (
    <button className='artworkFormButton'>
        <form onSubmit="handleSubmit">
        <img src="" alt="" />
        <h3>Title</h3>
        <h4>Artist</h4>
        <p>description etc.</p>
        </form>
    </button>
            
    )
}