import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({product, addToCart}) => {

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Text
        style={{
          text: 'bold',
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: '10px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        }}
      >
        {product.title}
      </Card.Text>
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.imageUrl} />
      </Link>
      <Card.Body
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Card.Text>${product.price}</Card.Text>
        </div>
        <Button className="addToCart-btn" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
