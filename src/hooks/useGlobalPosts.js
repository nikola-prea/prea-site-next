import { useQuery, gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query listPosts($first: Int, $after: String, $filtersId: [ID], $language: String, $dateFrom: Int, $dateTo: Int) {
    posts(
      where: {
        categoryIn: $filtersId
        tag: $language
        dateQuery: { after: { year: $dateFrom }, before: { year: $dateTo } }
        orderby: { field: DATE, order: DESC }
      }
      first: $first
      after: $after
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          date
          modified
          slug
          title
          content
          excerpt
          categories {
            nodes {
              id
              name
              slug
              parent {
                node {
                  slug
                  databaseId
                  name
                }
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              sourceUrl
            }
          }
          author {
            node {
              slug
              avatar {
                url
              }
              id
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`;

export const TREND_REPORTS_CATEGORIES = [
  '60',
  '1',
  '83',
  '55',
  '89',
  '68',
  '95',
  '98',
  '104',
  '101',
  '86',
  '71',
  '74',
  '5',
  '80',
  '6',
  '7',
  '92',
  '39',
  '77',
];
export const BLOG_CATEGORIES = ['1'];
export const PRESS_EVENTS_CATEGORIES = ['321', '318', '324'];
export const PRESS_CATEGORIES = ['321', '318'];
export const EVENT_CATEGORIES = ['324'];
export const WHITE_PAPERS_CATEGORIES = ['77'];
export const DATA_CENTER_REPORT = ['68'];
export const REFERENCE_CATEGORIES = [
  '5',
  '80',
  '6',
  '7',
  '112',
  '83',
  '89',
  '68',
  '95',
  '98',
  '104',
  '101',
  '86',
  '92',
];

function useGlobalPosts(language, filtersId) {
  const nextYear = new Date(Date.now()).getFullYear() + 1;
  const queryOptions = {
    first: 10,
    language,
    after: null,
    dateTo: nextYear,
    filtersId: filtersId ?? TREND_REPORTS_CATEGORIES,
  };
  const query = useQuery(POSTS_QUERY, {
    variables: queryOptions,
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const { data } = query;

  console.log("POSTS", data);

  return {
    hasNextPage: data?.posts.pageInfo.hasNextPage,
    endCursor: data?.posts.pageInfo.endCursor || null,
    posts: data?.posts.edges || [],
    isLoading: query.loading,
    fetchMorePosts: query.fetchMore,
    refetchPosts: query.refetch,
    TREND_REPORTS_CATEGORIES,
  };
}

export default useGlobalPosts;
