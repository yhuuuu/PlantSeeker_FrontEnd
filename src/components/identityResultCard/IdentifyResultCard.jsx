

function IdentifyResultCard({ plant }) {
console.log("plant:",plant);
  return (
    <div>
      <p>{plant.species.scientificName}</p>
      <p>{plant.species.commonNames[0]}</p>
      <p>{plant.score}</p>
      <div>
        {plant.images.map((image, index) => (
          <img src={`${image.url.s}`} alt="" key={index}/>
        ))}
      </div>


    </div>
  )
}

export default IdentifyResultCard