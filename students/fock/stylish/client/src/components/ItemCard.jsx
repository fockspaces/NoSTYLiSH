const ItemCard = ({ item, number }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{`Item #${number}`}</h5>
        <h6 className="card-subtitle mb-2">{item.SKU}</h6>
        <p className="card-text">{`price: $${item.price}`}</p>
      </div>
    </div>
  );
};

export default ItemCard;
