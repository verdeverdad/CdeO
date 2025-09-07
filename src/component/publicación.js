// src/components/ProductCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ProductCard({ image, buttonText }) {
  return (
    <Card
      className="text-center"
      style={{
        width: 'auto',
        height: '22rem',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '10px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
           bottom: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button className='botonVioleta'>{buttonText}</Button>
      </div>
    </Card>
  );
}

export default ProductCard;