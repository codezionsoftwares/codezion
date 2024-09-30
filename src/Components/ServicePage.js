import React from 'react';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
  const { slug } = useParams(); // Get the slug from the URL

  // Mock data: You can replace this with API data or database queries
  const services = {
    'service1': 'Details about Service One',
    'service2': 'Details about Service Two',
    'service3': 'Details about Service Three',
    'service4': 'Details about Service Four',
  };

  const serviceDetails = services[slug] || 'Service not found'; // Fallback for invalid slugs

  return (
    <div>
      <h1>Service: {slug.replace('-', ' ')}</h1>
      <p>{serviceDetails}</p>
    </div>
  );
};

export default ServicePage;
