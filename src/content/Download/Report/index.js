import React, { useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import { isBrowser } from '../../../helper/index';

import i18n from '../i18n';
import { Container, Row } from '../../../components/Layout';
import { Title, Subtitle, Phrase, DownloadWrapper, PseudoLink } from './style';
import Notification from '../../../components/Notification';

const Report = ({ downloadToken }) => {
  const intl = useIntl();
  const [timer, setTimer] = useState(5);
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    if (timer === 0) {
      setTimer(0);
      handleDownload();
    }

    if (!timer) return;

    const intervalTimer = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [timer]);

  const handleDownload = () => {
    const token = downloadToken;
    axios({
      url: `${process.env.GATSBY_CONTACT_API}/download/${token}`,
      method: 'POST',
      responseType: 'blob',
    })
      .then(async (response) => {
        const fileName = 'datacenter-report.pdf';
        if (isBrowser()) {
          window.navigator;
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // IE variant
            window.navigator.msSaveOrOpenBlob(new Blob([response.data], { type: 'application/pdf' }), fileName);
          } else {
            const url = window?.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = fileName;
            document.body.appendChild(downloadLink);
            downloadLink.click();

            const previewLink = document.createElement('a');
            previewLink.href = url;
            previewLink.target = '__parent';
            document.body.appendChild(previewLink);
            previewLink.click();
          }
        }
        setIsTokenValid(true);
      })
      .catch((error) => {
        setIsTokenValid(false);
      });
  };

  return (
    <Container>
      <Row>
        {isTokenValid === false && (
          <Notification message={intl.formatMessage(i18n.downloadFailedWrongToken)} type="error" layout={1} />
        )}

        <DownloadWrapper layout={1}>
          <Title layout={1}>{intl.formatMessage(i18n.downloadTitle)}</Title>

          <Subtitle layout={1}>
            {intl.formatMessage(i18n.downloadSubtitle)} {timer} seconds.
          </Subtitle>
          <FaDownload size="7rem" color="green" />
          {timer === 0 && (
            <Phrase>
              {intl.formatMessage(i18n.downloadFailed)} <PseudoLink onClick={handleDownload}>Click here!</PseudoLink>{' '}
            </Phrase>
          )}
        </DownloadWrapper>
      </Row>
    </Container>
  );
};

export default Report;
