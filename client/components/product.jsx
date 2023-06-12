import '@styles/product.css';
import { useRouter } from 'next/navigation';

const Product = ({ game }) => {
    const imageUrl = `http://localhost:8000${game.image}`;
    const router = useRouter();

    const handleProductClick = () => {
        router.push(`/products/${game.id}`);
    };

    return (
        <div>
            <div className='product-component' onClick={handleProductClick}>
                <div className="image-component">
                    <img src={imageUrl} alt="Game"/>
                    <div className="component-title"><span className='component-title-text'>{game.gameName}</span></div>
                    <div className="component-price">${game.price}</div>
                </div>
            </div>
        </div>
    )
}

export default Product