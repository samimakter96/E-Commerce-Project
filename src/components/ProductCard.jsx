import React from 'react';
import { Button, Card } from 'react-bootstrap';

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
      <Card.Img variant="top" src={product.imageUrl} />
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
        <Button
          style={{
            border: '1px solid blue',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '0px',
            padding: '0px 10px',
            marginTop: '10px',
          }}
          variant="primary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
