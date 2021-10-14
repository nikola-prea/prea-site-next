import { useQuery, gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query listPosts($first: Int, $after: String, $filterId: Int) {
    posts(
      where: {
        categoryNotIn: "3"
        categoryId: $filterId
        categoryIn: ["5", "80", "6", "7", "112", "83", "89", "68", "95", "98", "104", "101", "86", "92"]
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

function useReferencesPosts() {
  const query = useQuery(POSTS_QUERY, {
    variables: {
      first: 10,
      after: null,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data } = query;

  return {
    hasNextPage: data?.posts.pageInfo.hasNextPage,
    endCursor: data?.posts.pageInfo.endCursor || null,
    posts: data?.posts.edges || [],
    isLoading: query.loading,
    fetchMorePosts: query.fetchMore,
    refetchPosts: query.refetch,
  };
}

export default useReferencesPosts;
