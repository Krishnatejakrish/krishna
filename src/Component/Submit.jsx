import React, { useState } from 'react';

const SubscribeButton = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <div>
      {isSubscribed ? (
        <p>You are subscribed!</p>
      ) : (
        <button onClick={handleSubscribe}>Subscribe</button>
      )}
    </div>
  );
};

export default SubscribeButton;
