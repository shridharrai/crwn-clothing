import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JAFsxSAWSA5JBKw1TPRWHB8nvDhb1QsgdifsCy2mtiGdsr1jWeYMQDMtCkc9TUB3D2iftdv81sPNWiwUPEBZX7W00ijsbiR7Q';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      stripeKey={publishableKey}
      token={onToken}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
