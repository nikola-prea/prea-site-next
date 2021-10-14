/**
 * Created by tolga.kara on 09.09.21
 * src/content/WhoWeAre/References
 */

import React, { useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { ThreeDots } from 'svg-loaders-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import i18n from '../i18n';
import { Container, PageLayout, Row } from '../../../components/Layout';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import { TrendsReportsFilter } from '../../../components/Modules/BlogFilter';
import { useCategories } from '../../../hooks';
import { TeaserBlogCard } from '../../../components/Modules/Card/TeaserBlogCard';

import useGlobalPosts, { REFERENCE_CATEGORIES } from '../../../hooks/useGlobalPosts';
import { FilterContext } from '../../../context/FilterContext';
import { getFilterDates } from '../../../helper';

export default function ReferencesOverview({ categoriesId = REFERENCE_CATEGORIES, activeItem }) {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "header_references.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      fallbackBlogImage: file(relativePath: { eq: "fallbackImageBlog.png" }) {
        childImageSharp {
          gatsbyImageData(width: 458, height: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, quality: 100)
        }
      }
    }
  `);

  const intl = useIntl();
  const { changeThemeSetting } = useStyledDarkMode();
  const fallbackImage = getImage(staticQuery.fallbackBlogImage);

  if (typeof window !== 'undefined') {
    changeThemeSetting('light');
  }

  const { refetchPosts, fetchMorePosts, posts, endCursor, hasNextPage, isLoading } = useGlobalPosts(
    intl.locale,
    categoriesId,
  );

  const { categories, isCategoriesLoading } = useCategories();
  const defaultSelectedFilter = activeItem ? categories?.find(({ name }) => name === activeItem) : null;
  const [filters, setFilters] = useState(
    defaultSelectedFilter ? [{ option: defaultSelectedFilter, isDate: false }] : [],
  );
  const [activeItems, setActiveItems] = useState(activeItem ? [activeItem] : ['References']);
  const [isViewTile, setIsViewTile] = useState(false);
  const [filteredOutCategories, setFilteredOutCategories] = useState(null);

  function handleRemoveFilters() {
    setFilters([]);
    setActiveItems([]);
  }

  function updateQuery(previousResult, { fetchMoreResult }) {
    if (fetchMoreResult?.posts?.edges?.length) {
      const edges = [...previousResult?.posts?.edges, ...fetchMoreResult?.posts?.edges];
      // eslint-disable-next-line no-param-reassign
      fetchMoreResult.posts.edges = edges;
      return fetchMoreResult;
    }

    return previousResult;
  }

  useEffect(() => {
    if (!isCategoriesLoading) {
      const filteredCategories = categories
        .map((categoryObj) => {
          if (categoryObj.parentId === 'dGVybTo1NQ==') {
            if (categoryObj.name === 'References') {
              return categoryObj;
            }
          } else {
            return categoryObj;
          }
        })
        .filter(Boolean);

      setFilteredOutCategories(filteredCategories);
    }
  }, [categories]);

  function handleIncreasingPosts() {
    if (hasNextPage) {
      fetchMorePosts({
        variables: {
          first: 10,
          after: endCursor,
        },
        updateQuery,
      });
    }
  }

  function setSelectedOption(selected, isDate) {
    const isAlreadyOnFilter = filters.find(({ option }) => (isDate ? option === selected : option.id === selected.id));
    setFilters((oldFilters) => (isAlreadyOnFilter ? [...oldFilters] : [...oldFilters, { option: selected, isDate }]));
  }

  function handleRemoveFromActiveItems(item) {
    const newArr = activeItems.filter((a) => a !== item);
    const newFilters = filters.filter(({ option, isDate }) => (isDate ? option !== item : option.name !== item));
    setActiveItems(newArr);
    setFilters(newFilters);
  }

  function handleSetActiveItems(item) {
    setActiveItems((oldItems) => [...new Set([...oldItems, item])]);
  }

  async function getPosts(filterList) {
    const filterCategoryIds = filterList.filter(({ option }) => option.name).map(({ option }) => option.databaseId);
    const { dateTo, dateFrom } = getFilterDates(filterList);
    const queryOptions = {
      first: 10,
      after: null,
      dateTo,
      dateFrom,
      filtersId: filterCategoryIds.length ? filterCategoryIds : categoriesId,
    };
    refetchPosts(queryOptions);
  }

  useEffect(() => {
    getPosts(filters);
  }, [filters]);

  const showLoading = isLoading && !posts?.length;

  return (
    <PageLayout isDark={false}>
      <SubHeader top="0" brand={intl.formatMessage(i18n.references)} />
      <HeaderImage
        isDark
        type={2}
        image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
        title="References"
        subTitle={<span>{intl.formatMessage(i18n.referencesHeaderDescription)}</span>}
      />
      {posts && (
        <Container>
          <FilterContext.Provider
            value={{
              setSelectedOption,
              handleSetActiveItems,
              handleRemoveFromActiveItems,
              handleRemoveFilters,
              activeItems,
              activeItem,
            }}>
            <TrendsReportsFilter
              setIsViewTile={setIsViewTile}
              locale={intl.locale}
              filters={filters}
              categoryPosts={filteredOutCategories}
              handleRemoveFilters={handleRemoveFilters}
              blackList={['press-event']}
            />

            <InfiniteScroll
              dataLength={posts?.length}
              next={handleIncreasingPosts}
              hasMore
              loader={hasNextPage && <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />}>
              <Row>
                {posts &&
                  posts.map((post, index) => (
                    <TeaserBlogCard
                      key={`${post.id}references${index}`}
                      isDark={false}
                      image={<GatsbyImage image={fallbackImage} alt={intl.formatMessage(i18n.fallBackImage)} />}
                      isViewTile={isViewTile}
                      post={post}
                      layout={isViewTile ? 1 / 2 : 1}
                    />
                  ))}
              </Row>
            </InfiniteScroll>
          </FilterContext.Provider>
        </Container>
      )}
      {showLoading && (
        <Container>
          <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />
        </Container>
      )}
    </PageLayout>
  );
}
