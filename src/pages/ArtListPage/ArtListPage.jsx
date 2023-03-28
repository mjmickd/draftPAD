import ArtworkList from '../../components/ArtworkList/ArtworkList';
import * as artworkAPI from '../../utilities/artworks-api'
import { useState } from 'react';


export default function ArtPage({artInfo}) {
    console.log('ART INFO', artInfo)
   
    

    return (
        <main>
            <ArtworkList />
        </main>
        )
    }