import React from 'react';

function Container({ children }) {
  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
}

// Example style for the container. You can customize this as needed.
const containerStyle = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '800px', // Set a maximum width for the container
  textAlign: 'center', // Center-align text
  // Add more styles as per your requirement
};

export default Container;
