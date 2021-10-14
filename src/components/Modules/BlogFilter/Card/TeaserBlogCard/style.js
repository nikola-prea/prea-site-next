// import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const Wrapper = styled.div`
  // width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};
  position: relative;
  border-radius: 10px;
  // height: 480px;
  width: 1000px;
  margin:10px;

`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  justify-content: space-between;
  position: relative;
  min-height: ${({ height }) => (height ? `${height}rem` : '40rem')};
  background-color: #fffff;

  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};

  z-index: 5;

  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 0.875rem;
    min-height: 26rem;
  }
`;

const BgOverlay = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 78.63%, rgba(255, 255, 255, 0) 90.11%);
  z-index: 5;
  width: 100%;
  overflow: hidden;
  min-height: 50%;
  position: absolute;
  border-radius: 1.875rem;
`;

const BgImage = styled.div`
  position: absolute;
  overflow: hidden;
  border-radius: 1.875rem;
  height: 100%;
  top: 0;
  width: 100%;
  z-index: 0;
  div {
    width: 100vw;
    min-height: 100%;
    border-radius: 1.875rem;
    /* min-height: 0; before not set */
  }
`;
const ContentWrapper = styled.div`
  padding: 2.5rem 3rem;
  z-index: 5;
  @media (max-width: 1024px) and (min-width: 320px) {
    padding: 1.25rem 1.5rem;
    margin-top: 0.625rem;
  }
`;

const Tag = styled.p`
  font-size: 1.188rem;
  color: var(--red);
  font-weight: 700;
  padding-bottom: 0.5rem;
  margin: 0;
  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 1.188rem;
  }
`;

const Date = styled.p`
  font-size: 1.313rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  margin: 0;
  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 1.188rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 2rem;
  padding-bottom: 1.313rem;
  color: #212121;
  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 1.125rem;
    padding-bottom: 0;
  }
`;
const NormalCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  justify-content: space-between;
  position: relative;
  min-height: ${({ height }) => (height ? `${height}rem` : '40rem')};
  background-color: #fff;
  margin-bottom: 1rem;
  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};

  z-index: 5;

  @media (max-width: 768px) and (min-width: 0px) {
    font-size: 0.875rem;
    min-height: 26rem;
    width: ${({ layout }) => `calc(${1}*100% - (1 - ${1})*var(--card-gap) );`};
  }
`;
const NormalBgImage = styled(BgImage)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 66%;
`;
const NormalContentWrapper = styled(ContentWrapper)`
  position: absolute;
  padding-bottom: 2rem;
  bottom: 0;
`;

const ListCardWrapper = styled(CardWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
  min-height: 100%;
  div {
    border-radius: 1.475rem;
  }
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

const ListBgImage = styled(BgImage)`
  position: static;
  overflow: hidden;
  border-radius: 1.875rem;
  height: 100%;
  top: 0;
  width: 100%;
  z-index: 0;
  div {
    width: 100vw;
    min-height: 100%;
    border-radius: 1.875rem;
    /* min-height: 0; before not set */
  }
`;
const ListContentWrapper = styled(ContentWrapper)`
  margin-top: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ListTag = styled(Tag)``;
const ListTitle = styled(Title)`
  font-weight: 700;
  font-size: 24px;
`;
const ListDate = styled(Date)`
  color: #212121;
`;

const ArchiveListLinkWrapper = styled.a`
  text-decoration: none;
  color: var(--archive-text-color);
`;

const ArchiveListCardWrapper = styled(CardWrapper)``;
const ArchiveListContentWrapper = styled(ContentWrapper)``;
const ArchiveListTag = styled(Tag)``;
const ArchiveListTitle = styled(Title)``;
const ArchiveListDate = styled(Date)``;
const ArchiveListDescription = styled.p`
  font-size: 1rem;
`;
const ArchiveDateTag = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const PostDataWrapper = styled.div`
  height: 100%;
  flex-basis: ${({ isViewTile }) => (isViewTile ? '100%' : '65%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 80px 40px 40px;
  // color: #efefef;
`;

export const TeaserBlogCardWrapper = styled(Wrapper)`
  background: var(--card-bg);
  background: ${({ isDark }) => (isDark ? 'var(--moon-B)' : 'var(--moon-W)')};
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const PostKeyData = styled.div`
  display: flex;
  flex-direction: column;
  a {
    // color: ${({ isDark }) => (isDark ? 'var(--moon-L2) !important' : 'var(--moon-D2) !important')};
  }
`;

export const Category = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
export const PostData = styled.p``;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h3`
  font-size: 3rem;
  line-height: 3.625rem;
  font-weight: 600;
`;

export const ParagraphContent = styled.div`
  margin-bottom: 10px;
  p {
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`;

export const PostDescription = styled.p`
  font-size: 1.5rem;
  line-height: 2.125rem;
  font-weight: 400;
  color: ${({ isDark }) => (isDark ? 'var(--moon-W) !important' : 'var(--moon-B) !important')};
  p {
    margin: 0;
  }
`;

export {
  CardWrapper,
  Tag,
  Title,
  Date,
  BgImage,
  BgOverlay,
  ContentWrapper,
  NormalCardWrapper,
  NormalBgImage,
  NormalContentWrapper,
  ListCardWrapper,
  ListBgImage,
  ListContentWrapper,
  ListTag,
  ListTitle,
  ListDate,
  ArchiveListLinkWrapper,
  ArchiveListCardWrapper,
  ArchiveListContentWrapper,
  ArchiveListTag,
  ArchiveListTitle,
  ArchiveListDate,
  ArchiveDateTag,
  ArchiveListDescription,
};
