import React, { useEffect, useState } from 'react';
import { navigate, useIntl } from 'gatsby-plugin-intl';
import { ThreeDots } from 'svg-loaders-react';

import axios from 'axios';

import ConfirmationSuccess from './ConfirmationSuccess';

const Confirmation = ({ token, type }) => {
  const intl = useIntl();
  const [tokenValid, setTokenValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const validUrlEndpoint = `${process.env.GATSBY_CONTACT_API}/validate/${token}`;
    const data = {
      subject:
        type === 'datacenter'
          ? `${intl.locale === 'de' ? 'Download PREA DataCenter Report' : 'Your download request: Datacenter Report'}`
          : `${intl.locale === 'de' ? 'Ihre Kontaktanfrage' : 'Contact confirmation'}`,
      language: intl.locale,
    };

    if (type === 'datacenter') data.callback = `${window?.location.origin}/${intl.locale}/download/report?token=`;

    axios
      .post(validUrlEndpoint, data)
      .then((response) => {
        setTokenValid(true);
      })
      .catch((error) => {
        setTokenValid(false);
        navigate('/contact/', {
          state: {
            message: 'Something went wrong with your E-Mail. Please try again or register again.',
            type: 'error',
          },
        });
      });
  }, []);

  return tokenValid ? (
    <ConfirmationSuccess type={type} />
  ) : (
    <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />
  );
};

export default Confirmation;
