// function Card(props) {
function Card({ cardData }) {
  // console.log(props.cardData.name)
  // console.log(cardData.name)
  const { name, description, image, icon } = cardData;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>

          <p>{cardData.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {cardData.price}
              {icon}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
