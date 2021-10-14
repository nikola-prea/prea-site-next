import { useQuery, gql } from '@apollo/client';

/*
 * Unsure what to fetch
 * TODO ask Thomas
 * */

const POSTS_QUERY = gql`
  query categoryPosts($currentPostId: [ID], $categoryId: Int) {
    posts(where: { categoryId: $categoryId, notIn: $currentPostId }, first: 2) {
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

function useTeaserBlogBig(currentPostId, categoryId) {
  const query = useQuery(POSTS_QUERY, {
    variables: {
      currentPostId,
      categoryId,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data } = query;

  return {
    posts: data?.posts.edges || [],
    isLoading: query.loading,
    fetchMorePosts: query.fetchMore,
    refetchPosts: query.refetch,
  };
}

export default useTeaserBlogBig;
