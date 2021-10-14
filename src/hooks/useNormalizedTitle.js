import { useEffect, useState } from 'react';

function normalizedWhitePaperTitle(title) {
  const whitepaperTitle = title.split('} ')[1];
  return whitepaperTitle;
}

export default function useNormalizedTitle(typeOfContent, currentTitle) {
  switch (typeOfContent) {
    case 'whitepaper':
      return normalizedWhitePaperTitle(currentTitle);
    default:
      return currentTitle.trim();
  }
}
