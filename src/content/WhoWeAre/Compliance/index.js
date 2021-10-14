import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import useDownload from '../../../components/Modules/DownloadBox/hooks/useDownload';
import getComplianceTitleAndSubtitle from './assets/getComplianceTitleAndSubtitle';
import { MemberCard } from '../../../components/Modules/Card/MemberCard';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import { DownloadBox } from '../../../components/Modules/DownloadBox';
import { PageLayout, Spacing } from '../../../components/Layout';
import { Heading, Paragraph } from '../../../components';
import IconPlus from './assets/vectors/IconPlus.svg';
import * as S from './style';
import i18n from '../i18n';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';

export default function ComplianceOverview() {
  const intl = useIntl();
  const data = getComplianceTitleAndSubtitle(intl);
  const { download, handleClick } = useDownload();
  const [clicked, setClicked] = useState(false);

  const onToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <PageLayout isDark={false}>
      <SubHeader type={1} brand="Compliance" top="0rem" />
      <S.ContainerWrapper>
        <S.ContentContainer>
          <S.TitleWrapper>
            <Paragraph type={1} color="var(--moon-D6)">
              {intl.formatMessage(i18n.compliancetitle)}
            </Paragraph>
            <Heading color="var(--moon-D6)" type={2}>
              {intl.formatMessage(i18n.complianceheadline)}
            </Heading>

            <StaticImage
              src="./assets/images/background.png"
              alt={`${intl.formatMessage(i18n.compliancebackground)} - Card Image`}
              layout="fixed"
            />
          </S.TitleWrapper>
          <Spacing height={100} />

          <S.MainTitleWrapper>
            <Paragraph type={1}>{intl.formatMessage(i18n.compliancemainTitle)}</Paragraph>
            <Spacing height={100} />
            <Heading color="var(--moon-D6)" type={3}>
              {intl.formatMessage(i18n.complianceSummaryFirstPart)}
              <S.HeadingHighlight>{intl.formatMessage(i18n.complianceSummarySecondPart)}</S.HeadingHighlight>
              {intl.formatMessage(i18n.complianceSummaryThirdPart)}
            </Heading>
          </S.MainTitleWrapper>
          <Spacing height={100} />
          <MemberCard
            justify="flex-end"
            memberDescription={intl.formatMessage(i18n.compliancefirstMemberDescription)}
            memberPosition={intl.formatMessage(i18n.compliancefirstMemberPosition)}
            memberName={intl.formatMessage(i18n.compliancefirstMemberFullName)}
            image={
              <StaticImage
                src="./assets/images/peterBadgeValentina.png"
                alt={`${intl.formatMessage(i18n.compliancefirstMemberFullName)} - Card Image`}
                layout="fixed"
              />
            }
          />
          <Spacing height={100} />
          <MemberCard
            positionImg="right"
            memberDescription={intl.formatMessage(i18n.compliancesecondMemberDescription)}
            memberPosition={intl.formatMessage(i18n.compliancesecondMemberPosition)}
            memberName={intl.formatMessage(i18n.compliancesecondMemberFullName)}
            image={
              <StaticImage
                src="./assets/images/gabriel.png"
                alt={`${intl.formatMessage(i18n.compliancegabriel)} - Card Image`}
                layout="fixed"
              />
            }
          />
          <Spacing height={100} />

          <S.ComplianceSecondBlock>
            <S.SecondContent>
              {data?.map((text, key) => (
                <S.DropdownMenu>
                  <S.DropdownMenuContainer
                    key={`n-${text.title}-${key}`}
                    rotate={clicked === key ? 'rotate(45deg)' : 'rotate(-90deg)'}>
                    <Paragraph type={3}>{text.title}</Paragraph>
                    <IconPlus onClick={() => onToggle(key)} index={key} />
                  </S.DropdownMenuContainer>
                  {clicked === key && (
                    <Paragraph style={{ padding: '20px 0px;' }} type={3}>
                      {text.subTitle}
                    </Paragraph>
                  )}
                </S.DropdownMenu>
              ))}
            </S.SecondContent>
          </S.ComplianceSecondBlock>
        </S.ContentContainer>
        <Spacing height={100} />
        {/* WE NEED TO CHANGE href=... */}
        <MorePostByCategory
          spacingBottom={100}
          headingColor="var(--moon-D6)"
          categoryObj={{ name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockLink) }}
          categoryId={112}
          link={{
            name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockName),
            path: 'who-we-are/references',
          }}
          // alt={i18n.header}
        />

        {/*<DownloadBox*/}
        {/*  href="./assets/somefile.txt"*/}
        {/*  download={download}*/}
        {/*  handleClick={handleClick}*/}
        {/*  textLink={intl.formatMessage(i18n.compliancetextLink)}*/}
        {/*  downloadFull={*/}
        {/*    <StaticImage*/}
        {/*      src="../../../../static/image/who-we-are/compliance/complianceDownloadFull.png"*/}
        {/*      alt={`${intl.formatMessage(i18n.compliancedownloadFull)}  - Card Image`}*/}
        {/*      layout="fixed"*/}
        {/*    />*/}
        {/*  }*/}
        {/*  downloadEmpty={*/}
        {/*    <StaticImage*/}
        {/*      src="../../../../static/image/who-we-are/compliance/complianceDownloadEmpty.png"*/}
        {/*      alt={` ${intl.formatMessage(i18n.compliancedownloadEmpty)} - Card Image`}*/}
        {/*      layout="fixed"*/}
        {/*    />*/}
        {/*  }*/}
        {/*/>*/}
      </S.ContainerWrapper>
    </PageLayout>
  );
}
