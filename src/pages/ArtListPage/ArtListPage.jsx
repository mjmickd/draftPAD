import ArtworkItem from "../../components/ArtworkItem/ArtworkItem";


export default function ArtPage({artInfo}) {
    console.log('ART INFO', artInfo)
   
  /*--- Event Handlers ---*/
  


    return (
        <>
        <h1>Art Page</h1>
        {artInfo.map((artwork) => {
            return <ArtworkItem key={artwork.id} artwork={artwork} showButton={true}/>;
          })}
        </>
        )
    }