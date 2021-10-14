export function getAllowedCategories(categories, blackList) {
  return categories.filter(({ slug }) => {
    if (blackList.includes(slug)) {
      return false;
    }
    return true;
  });
}

export function sortCategories(categories) {
  const [firstArrayOrPosts, secondArrayOrPosts, thirdArrayOrPosts] = categories;
  const sortedPreFormattedOverlay = [secondArrayOrPosts, thirdArrayOrPosts, firstArrayOrPosts];
  return sortedPreFormattedOverlay;
}

export function formatCategories({ categories, intl, i18n }) {
  const preFormattedOverlayPosts = categories
    .map((item) => {
      if (!item.parentId) {
        const filteredChildCategory = categories.filter((childCategory) => childCategory.parentId === item.id);
        return {
          title: intl.formatMessage(i18n[item.slug]),
          options: filteredChildCategory,
          optionKey: intl.formatMessage(i18n[item.slug]).toLowerCase(),
        };
      }
    })
    .filter(Boolean);

  return preFormattedOverlayPosts;
}

export function getDateFilter({ allPostsDates, intl, i18n }) {
  const {
    allWpPost: { nodes: dateList },
  } = allPostsDates;
  const postDates = [...new Set(dateList.map(({ date }) => date))];

  return {
    databaseId: null,
    id: null,
    name: 'Date',
    parentId: null,
    slug: 'date',
    __typename: 'Category',
    title: intl.formatMessage(i18n.date),
    options: postDates,
    optionKey: intl.formatMessage(i18n.date).toLowerCase(),
  };
}

export function getPreformattedCategories({ categories, intl, i18n, blackList, allPostsDates }) {
  const allowedCategories = getAllowedCategories(categories, blackList);
  const preFormattedOverlayPosts = formatCategories({ categories: allowedCategories, intl, i18n });
  const dateFilter = getDateFilter({ allPostsDates, intl, i18n });
  const sortedCategories = sortCategories(preFormattedOverlayPosts);
  return [...sortedCategories, dateFilter].filter(Boolean);
}
