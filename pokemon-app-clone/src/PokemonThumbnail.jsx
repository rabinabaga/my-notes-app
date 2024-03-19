import "./PokemonThumbnail.css"
export default function PokemonThumbnail({image, name}){
    console.log("image", image);
    return(<>
        <img src={image} alt={name} />
    </>)
}