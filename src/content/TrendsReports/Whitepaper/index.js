import React from 'react';
import { WHITE_PAPERS_CATEGORIES } from '../../../hooks/useGlobalPosts';
import ReportsTrendsOverview from '../index';

const WhitepaperOverview = () => (
  <ReportsTrendsOverview categoriesId={WHITE_PAPERS_CATEGORIES} activeItem="White Paper" />
);

export default WhitepaperOverview;
