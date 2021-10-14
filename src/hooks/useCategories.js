import { useQuery, gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query categories {
    categories(first: 45, where: { exclude: ["3", "8", "2", "4"] }) {
      nodes {
        id
        name
        slug
        parentId
        databaseId
        posts {
          nodes {
            id
          }
        }
      }
    }
  }
`;

function useCategories() {
  const query = useQuery(CATEGORIES_QUERY);
  const { data } = query;
  return {
    categories: data?.categories.nodes || null,
    isCategoriesLoading: query.loading,
  };
}

export default useCategories;
