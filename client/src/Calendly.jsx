import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import ReCAPTCHA from 'react-google-recaptcha';

const CalendlyEmbedWithCaptcha = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  /*
  const onCaptchaChange = (value) => {
      if (value) {
            setCaptchaVerified(true);
      }
  };*/

    return (
    <div>
          <div>
            <InlineWidget
                url="https://calendly.com/cscc02772/alagille-syndrome-project"
                style={{
                    width: '50%',
                    height: '800px',
                }}
            />
         </div>
    </div>
    );
}

export default CalendlyEmbedWithCaptcha;
