import React, { useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import * as S from './style';

import FilterIcon from './vectors/filterIcon.svg';
import TileViewIcon from './vectors/tileViewIcon.svg';
import ListViewIcon from './vectors/listViewIcon.svg';
import CancelIcon from './vectors/cancelIcon.svg';
import { TitleLinkListing } from '../TitleLinkListing';
import i18n from './i18n';
import { postDatesQuery } from '../../../content/TrendsReports/queries/postDatesQuery';
import { getPreformattedCategories } from './helpers';

export const TrendsReportsFilter = ({ setIsViewTile, locale, handleRemoveFilters, categoryPosts, blackList = [] }) => {
  const intl = useIntl();
  const [isTile, setIsTile] = useState(false);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [overlayOptions, setOverlayOptions] = useState([]);
  const allPostsDates = postDatesQuery();
  const isGermanLanguage = locale === 'de';

  const handleViewSwitch = () => {
    setIsTile(!isTile);
    setIsViewTile(!isTile);
  };

  useEffect(() => {
    if (categoryPosts) {
      const sortedPreFormattedOverlay = getPreformattedCategories({
        categories: categoryPosts,
        blackList,
        intl,
        i18n,
        allPostsDates,
      });
      setOverlayOptions(sortedPreFormattedOverlay);
    }
  }, [categoryPosts]);

  const removeFilterText = (
    <span>
      {intl.formatMessage(isGermanLanguage ? i18n.filter : i18n.remove)}
      <br />
      {intl.formatMessage(isGermanLanguage ? i18n.remove : i18n.filter)}
    </span>
  );

  return !isFilterClicked ? (
    <S.FilterWrapper>
      <FilterIcon onClick={() => setIsFilterClicked(true)} />
      <S.SwitcherWrapper>
        {isTile ? <TileViewIcon onClick={handleViewSwitch} /> : <ListViewIcon onClick={handleViewSwitch} />}
      </S.SwitcherWrapper>
    </S.FilterWrapper>
  ) : (
    <S.OverlayWrapper>
      <S.OverlayContentWrapper>
        <CancelIcon onClick={() => setIsFilterClicked(false)} />

        {overlayOptions &&
          overlayOptions.map((overlayOption, index) => (
            <TitleLinkListing
              key={`filterLinkListing-${index}`}
              title={overlayOption.title}
              options={overlayOption.options}
              optionKey={overlayOption.key}
            />
          ))}

        <S.RemoveFilter onClick={handleRemoveFilters}>{removeFilterText}</S.RemoveFilter>
      </S.OverlayContentWrapper>
    </S.OverlayWrapper>
  );
};
