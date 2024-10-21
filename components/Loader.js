import { Html } from '@react-three/drei';
import React from 'react'

const Loader = () => {
    return (
        <Html center>
          <div className="spinner"></div>
          <style jsx>{`
            .spinner {
              border: 4px solid rgba(255, 255, 255, 0.3); /* Light gray border */
              border-top: 4px solid white; /* White border for top */
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
    
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </Html>
      );
}

export default Loader