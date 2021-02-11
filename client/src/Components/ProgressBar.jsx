import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

import hoorayAnimation from 'Assets/hooray-animation.json';

export default function ProgressBar({ completedInputs, totalInputs }) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (completedInputs === totalInputs) {
      setShowAnimation(true);
    }
  }, [completedInputs, totalInputs]);

  return (
    <div className="progress-bar-wrapper">
      <p>
        {totalInputs - completedInputs} fields remaining - estimated time:{' '}
        {/* Estimate each field will take 30 seconds to complete */}
        {Math.floor(((totalInputs - completedInputs) * 30) / 60)} minutes
      </p>
      <div
        className="progress-bar"
        data-progress={(completedInputs / totalInputs) * 100}
        title={`${(completedInputs / totalInputs) * 100} percent complete`}
        aria-label={`${(completedInputs / totalInputs) * 100} percent complete`}
      >
        <div
          style={{
            width: `${(completedInputs / totalInputs) * 100}%`
          }}
          className="progress-indicator"
        />
      </div>
      {showAnimation && (
        <Lottie
          className="hooray-animation"
          loop={false}
          onComplete={() => setShowAnimation(false)}
          animationData={hoorayAnimation}
        />
      )}
    </div>
  );
}
