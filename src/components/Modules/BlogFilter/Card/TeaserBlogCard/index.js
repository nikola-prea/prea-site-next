import React, { useState, useEffect } from 'react';
// import { useReadingTime } from 'react-hook-reading-time';
// import { Link, useIntl } from 'gatsby-plugin-intl';
import * as S from './style';
// import i18n from './i18n';
// import { Heading } from '../../../Atoms';
// import TextLink from '../../../Atoms/TextLink';
// import Small from '../../../Atoms/Small';
// import MenuText from '../../../Atoms/MenuText';
// import { getMonthName } from '../../../../helper';
// import Paragraph from '../../../Atoms/Paragraph';

export const TeaserBlogCard = ({
  post,
  layout,
  image,
  isViewTile,
  isDark = true,
  isDarker,
  siteName = 'trends-reports',
}) => {
  // const intl = useIntl();
  const regHTMLDetector = /(<([^>]+)>)/gi;
  const { categories, author, slug, title, excerpt, content } = post.node;
  const [isCategoryWhitepaper, setIsCategoryWhitepaper] = useState(false);
  const [properTitle, setProperTitle] = useState(null);
  let { date } = post.node;

  let shortContent;
  shortContent = content
    ?.split(' ')
    .map((word, index) => index <= 20 && word)
    .filter(Boolean)
    .join(' ')
    .replace(regHTMLDetector, '');

  // let { minutes: readTime } = useReadingTime(content);
  // readTime = Math.ceil(readTime);

  date = date.split('T')[0].split('-');
  // date = `${date[2]}.${getMonthName(date[1])}.${date[0]}`;

  const categoryName = categories.nodes
    .map((category) => {
      if (category.parent.node.databaseId === 55) return category;
      if (category.parent.node.databaseId === 77) return category;
      if (category.parent.node.databaseId === 318) return category;

      return undefined;
    })
    .filter(Boolean);

  useEffect(() => {
    setIsCategoryWhitepaper(categoryName[0]?.slug === 'white-paper');
  }, []);

  useEffect(() => {
    if (isCategoryWhitepaper) {
      setProperTitle(post.node.title.split('} ')[1]);
    } else {
      setProperTitle(post.node.title);
    }
  }, [isCategoryWhitepaper]);

  useEffect(() => {
    if (properTitle?.includes('} ')) {
      setProperTitle(post.node.title.split('} ')[1]);
    }
  }, [properTitle]);

  const paragraphColor = !isDark && !isDarker ? 'var(--moon-D6)' : 'var(--moon-D6)';

  return (
    <S.TeaserBlogCardWrapper layout={layout} isDark={isDark}>
      <div>{!isViewTile && image}</div>
      <S.PostDataWrapper isViewTile={isViewTile}>
        <S.PostKeyData>
          <p  type={4}>
            {categoryName[0]?.name || 'White Paper'}
          </p>
          <p  type={4}>
            {`${date} / ${author.node.firstName} ${
              author.node.lastName
            } / 1 min.`}
          </p>
        </S.PostKeyData>
        <S.PostContentWrapper>
          <S.ParagraphContent>
            <h3  type={4}>
              {properTitle}
            </h3>
            <p  type={2}>
              <span style={{ color: paragraphColor }} dangerouslySetInnerHTML={{ __html: `${shortContent}...` }} />
            </p>
          </S.ParagraphContent>
          {/* <TextLink path={`${siteName}/${categoryName[0]?.slug}/${slug}`}>{intl.formatMessage(i18n.read)}</TextLink> */}
        </S.PostContentWrapper>
      </S.PostDataWrapper>
    </S.TeaserBlogCardWrapper>
  );
};
