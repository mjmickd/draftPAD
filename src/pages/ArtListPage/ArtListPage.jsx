
import { useState, useEffect } from 'react';


export default function ArtPage() {
    const [artInfo, setArtInfo] = useState();
    
    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks?limit=100').then((res) => res.json())
        .then((data) => {
            setArtInfo(data);
        });
    }, []);

    // Axios.get('https://api.artic.edu/api/v1/artworks').then((res) => {
    //     setArtInfo(res.title);
    // });
    
    console.log(artInfo)
    return (
        <>
        <h1>ArtPage</h1>
        
        </>
        )
    }