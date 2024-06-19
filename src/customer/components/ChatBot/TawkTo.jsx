import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6660fcd4981b6c564779119c/1hvldn7up';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin','*');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; 
};

export default TawkTo;