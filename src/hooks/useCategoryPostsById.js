import { useQuery, gql } from '@apollo/client';

/*
 * Return a List of Articles for More Articles after you read a Blog Post
 *
 * */

const POSTS_QUERY = gql`
  query categoryPosts($categoryId: Int, $language: String) {
    posts(where: { categoryId: $categoryId, tag: $language }, first: 2) {
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

function useCategoryPostsById(categoryId, language) {
  const query = useQuery(POSTS_QUERY, {
    variables: {
      categoryId,
      language,
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

export default useCategoryPostsById;
