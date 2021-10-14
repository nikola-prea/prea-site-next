import { useQuery, gql } from '@apollo/client';

/*
 * Return a List of Articles for More Articles after you read a Blog Post
 * Also skips the already read page and so its not fitting for showing in our Page
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

function useCategoryPosts(currentPostId, categoryId) {
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

export default useCategoryPosts;
