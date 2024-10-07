// CoreValues.jsx

import React from 'react';
import './Values.css'; // Make sure to create this CSS file

const Values = () => {
  const values = [
    { title: "Grace", description: "giving kids more than they deserve" },
    { title: "Hope", description: "not a guarantee to end their problems, but a conviction that God is always present." },
    { title: "Faith", description: "building a real depth relationship of all kinds." },
    { title: "Love", description: "to love the unlovely." },
    { title: "Justice", description: "for all (not “just” me) a concept biased in favor of the disadvantaged." },
    { title: "Joy", description: "impossible to legislate for this but essential social values." },
    { title: "Service", description: "meaning is found in service rather than self-centeredness." },
    { title: "Peace", description: "not just the absence of fighting but well-being." }
  ];

  return (
    <div className="core-values">
      <h2>Core Values</h2>
      <div className="cards">
        {values.map((value, index) => (
          <div className="card" key={index}>
            <h3>{value.title}</h3>
            <p className="preview">{value.description.split(' - ')[0]}</p>
            <p className="full">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
