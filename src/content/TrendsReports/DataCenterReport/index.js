import React from 'react';
import { DATA_CENTER_REPORT } from '../../../hooks/useGlobalPosts';
import ReportsTrendsOverview from '../index';

const DataCenterOverview = () => (
  <ReportsTrendsOverview categoriesId={DATA_CENTER_REPORT} activeItem="Data Center Report" />
);

export default DataCenterOverview;
