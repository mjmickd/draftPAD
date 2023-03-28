import ArtworkInformationCard from '../../components/ArtworkList/ArtworkList';
import { useState, useEffect } from 'react';


export default function ArtPage({artInfo}) {
    console.log('ART INFO', artInfo)
   
    

    return (
        <main>
            <ArtworkInformationCard />
        </main>
        )
    }