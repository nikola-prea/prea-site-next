import React, { useEffect, useState } from 'react';
import { getCurrentUrl, isBrowser } from '../helper';

const useChangeColor = () => {
  const [bgColor, setBgColor] = useState('');
  const [linkColor, setLinkColor] = useState('');
  let currentUrl = '';
  let currentPage = '';
  if (isBrowser()) {
    currentUrl = getCurrentUrl();
    currentPage = currentUrl[currentUrl.length - 1];
  }

  useEffect(() => {
    // if (currentPage === 'real-estate-transaction') setBgColor('var(--moon-L6)');
    if (currentPage === 'mercury' || currentPage === 'who-we-are') setBgColor('var(--moon-B)');
    if (currentPage === 'technologies') setBgColor('var(--moon-S1)');
    if (currentPage === 'technologies' || currentPage === 'mercury') setLinkColor('var(--moon-M)');
    if (currentPage === 'sitemap') setBgColor('var(--moon-L6)');
  }, []);

  return { bgColor, linkColor };
};

export default useChangeColor;
