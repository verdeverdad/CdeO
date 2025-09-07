// Ejemplo para /src/paginas/trabajos.js
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from '../component/publicación';
import imagen from '../img/logoEntero.png';

function Trabajos() {
  return (
    <Container className="my-4">
      <Row className="g-4">
        <Col xs={12} sm={6} md={4}>
          <ProductCard image={imagen} buttonText="Comprar Ahora" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <ProductCard image={imagen} buttonText="Ver Oferta" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <ProductCard image={imagen} buttonText="Más Info" />
        </Col>
        {/* Agrega más <Col> con <ProductCard> si lo necesitas */}
      </Row>
    </Container>
  );
}

export default Trabajos;