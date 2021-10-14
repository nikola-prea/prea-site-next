import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ThreeDots } from 'svg-loaders-react';
import { graphql, useStaticQuery } from 'gatsby';
import i18n from './i18n';
import { Row, Container, PageLayout, Spacing, OverflowHiddenWrapper } from '../../components/Layout';
import i18nNavigation from '../../components/i18n';
import HeaderImage from '../../components/Modules/Header/HeaderImage';
import { TrendsReportsFilter } from '../../components/Modules/BlogFilter';
import { TeaserBlogCard } from '../../components/Modules/Card/TeaserBlogCard';
import SubHeader from '../../components/Modules/SubHeader/SubHeader';
import useCategoriesPressEvents from '../../hooks/useCategoriesPressEvents';
import useGlobalPosts, { PRESS_EVENTS_CATEGORIES } from '../../hooks/useGlobalPosts';
import { FilterContext } from '../../context/FilterContext';
import { getFilterDates } from '../../helper';

const PressEventsOverview = ({ categoriesId = PRESS_EVENTS_CATEGORIES, activeItem, subtitle = '' }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      fallbackBlogImage: file(relativePath: { eq: "fallbackImageBlog.png" }) {
        childImageSharp {
          gatsbyImageData(width: 458, height: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED)
        }
      }
      header: file(relativePath: { eq: "image/press-events/header_pressevents.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `);

  const fallbackImage = getImage(staticQuery.fallbackBlogImage);
  const intl = useIntl();
  const { refetchPosts, fetchMorePosts, posts, endCursor, hasNextPage, isLoading } = useGlobalPosts(
    intl.locale,
    categoriesId,
  );
  const { categories } = useCategoriesPressEvents();
  const defaultSelectedFilter = activeItem ? categories?.find(({ name }) => name === activeItem) : null;
  const [filters, setFilters] = useState(
    defaultSelectedFilter ? [{ option: defaultSelectedFilter, isDate: false }] : [],
  );
  const [activeItems, setActiveItems] = useState(activeItem ? [activeItem] : []);
  const [isViewTile, setIsViewTile] = useState(false);

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
    <PageLayout isDark>
      <SubHeader
        type={1}
        brand={`${intl.formatMessage(i18nNavigation.pressEvents)} ${subtitle ? ` - ${subtitle}` : ''}`}
        top="0rem"
      />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={2}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.trendsreportsHeader} />}
          title={intl.formatMessage(i18nNavigation.pressEvents)}
          subTitle={intl.formatMessage(i18n.headerSlogan)}
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
                categoryPosts={categories}
                handleRemoveFilters={handleRemoveFilters}
                blackList={['services', 'assets']}
              />

              <InfiniteScroll
                dataLength={posts?.length}
                next={handleIncreasingPosts}
                hasMore
                loader={hasNextPage && <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />}>
                <Row>
                  {posts?.map((post, index) => (
                    <TeaserBlogCard
                      key={`${post.id}post${index}`}
                      image={
                        post?.node.featuredImage?.node.sourceUrl ? (
                          <img
                            width="458px"
                            height="500px"
                            src={post?.node.featuredImage.node.sourceUrl}
                            alt={post?.node.featuredImage.node.altText}
                          />
                        ) : (
                          <GatsbyImage image={fallbackImage} alt={intl.formatMessage(i18n.fallBackImage)} />
                        )
                      }
                      isViewTile={isViewTile}
                      post={post}
                      layout={isViewTile ? 1 / 2 : 1}
                      siteName="press-events"
                    />
                  ))}
                </Row>
              </InfiniteScroll>
            </FilterContext.Provider>
            <Spacing height={100} />
          </Container>
        )}
        {showLoading && (
          <Container>
            <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />
          </Container>
        )}
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default PressEventsOverview;
