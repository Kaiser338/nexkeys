import '@styles/product.css';

const Product = ({ game }) => {
    const imageUrl = `http://localhost:8000${game.image}`;

    return (
        <div>
            <div className="image-component">
                <img src={imageUrl} alt="Game"/>
                <div className="component-title"><span className='component-title-text'>{game.gameName}</span></div>
                <div className="component-price">${game.price}</div>
            </div>
        </div>
    )
}

export default Product