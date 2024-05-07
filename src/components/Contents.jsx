import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { PRODUCTS } from '../Products';
import ProductCard from './ProductCard';
import { useCart } from './context/CartContext';

const Contents = () => {

  const {addToCart} = useCart()

  return (
    <>
      <section
        style={{
          backgroundColor: 'white',
          padding: '20px',
          color: 'black',
          alignItems: 'center',
        }}
      >
        <Container>
          <h3
            style={{
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
          >
            Music
          </h3>
          <Row style={{ justifyContent: 'center' }}>
            {PRODUCTS.map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ProductCard product={product} addToCart={addToCart}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contents