import { useQuery, gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query listPosts($first: Int, $after: String, $filterId: Int, $language: String) {
    posts(where: { categoryNotIn: "3", categoryId: $filterId, tag: $language }, first: $first, after: $after) {
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

/* function nomalizePost(data) {
  const { title: originalTitle, ...rest } = data.node;
  const { categories } = rest;
  const [category] = categories?.nodes;
  if (category?.name === 'White Paper') {
    const [language, title] = originalTitle.split('}');
    return {
      node: {
        ...rest,
        title: title.trim(),
        language: language.split(',')[1].trim(),
      },
    };
  }
  return data;
} */

function usePosts(language) {
  const query = useQuery(POSTS_QUERY, {
    variables: {
      first: 10,
      language,
      after: null,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data } = query;
  /* data?.posts.edges.map(nomalizePost); */

  return {
    hasNextPage: data?.posts.pageInfo.hasNextPage,
    endCursor: data?.posts.pageInfo.endCursor || null,
    posts: data?.posts.edges || [],
    isLoading: query.loading,
    fetchMorePosts: query.fetchMore,
    refetchPosts: query.refetch,
  };
}

export default usePosts;
