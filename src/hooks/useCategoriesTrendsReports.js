import { useQuery, gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query categories {
    categories(
      first: 45
      where: {
        include: [
          "60"
          "1"
          "83"
          "55"
          "89"
          "68"
          "95"
          "98"
          "104"
          "101"
          "86"
          "5"
          "80"
          "6"
          "7"
          "92"
          "39"
          "77"
        ]
      }
    ) {
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

function useCategoriesTrendsReports() {
  const query = useQuery(CATEGORIES_QUERY);
  const { data } = query;
  return {
    categories: data?.categories.nodes || null,
    isCategoriesLoading: query.loading,
  };
}

export default useCategoriesTrendsReports;
