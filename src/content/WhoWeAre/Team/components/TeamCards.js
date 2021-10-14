import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import TeaserContact from '../../../../components/Modules/Teaser/TeaserContact';
import { Heading, Paragraph } from '../../../../components';
import { Container, Row, Spacing } from '../../../../components/Layout';
import useEmployee from '../../../../hooks/useEmployee';

const TeamCards = () => {
  const intl = useIntl();
  const staticQuery = useStaticQuery(graphql`
    query {
      fallbackCardImage: file(relativePath: { eq: "image/who-we-are/team/team_card_fallback.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teamBackground: file(relativePath: { eq: "image/who-we-are/team/team_background.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const fallbackEmployeeImage = getImage(staticQuery.fallbackCardImage);
  const teamBackground = getImage(staticQuery.teamBackground);
  const departmentList = [
    { name: 'visionaries', path: 'visionaries' },
    { name: 'scientists', path: 'scientists' },
    { name: 'developers', path: 'developers' },
    { name: 'engineers', path: 'engineers' },
    { name: 'creators', path: 'creators' },
    { name: 'artists', path: 'artists' },
    { name: 'architects', path: 'architects' },
    { name: 'rethinkers', path: 'rethinkers' },
    { name: 'preans', path: 'preans' },
    { name: 'visionaries', path: 'visionaries' },
  ];
  const { employees } = useEmployee();

  const sortedEmployees = sortEmployees(employees);

  const cards = sortedEmployees?.map((employee, index) => {
    if (index === 0) {
      return (
        <>
          <TeaserContact type="text" backgroundImage={teamBackground}>
            <Heading type={4} color="var(--moon-W)">
              We are <br /> PREA.
            </Heading>
          </TeaserContact>
          <TeaserContact
            backgroundImage={fallbackEmployeeImage}
            type={employee.customSchemas.extendedEmployeeDataWebsite.Level}
            employeeData={{
              firstName: employee.name.givenName,
              lastName: employee.name.familyName,
              fullName: employee.name.fullName,
              department: employee.organizationDepartment,
              position: employee.organizationTitle,
              bio: employee.customSchemas.extendedEmployeeDataWebsite.Biography,
              profileImage: employee.customSchemas.extendedEmployeeDataWebsite.ListImageLink,
            }}
          />
        </>
      );
    }
    if (index === 1) {
      return (
        <>
          <TeaserContact type="text" backgroundImage={teamBackground}>
            {departmentList.map((department) => (
              <Paragraph type={3} fontWeight={500} color="var(--moon-L6)">
                {department.name}
              </Paragraph>
            ))}
          </TeaserContact>
          <TeaserContact
            backgroundImage={fallbackEmployeeImage}
            type={employee.customSchemas.extendedEmployeeDataWebsite.Level}
            employeeData={{
              firstName: employee.name.givenName,
              lastName: employee.name.familyName,
              fullName: employee.name.fullName,
              department: employee.organizationDepartment,
              position: employee.organizationTitle,
              bio: employee.customSchemas.extendedEmployeeDataWebsite.Biography,
              profileImage: employee.customSchemas.extendedEmployeeDataWebsite.ListImageLink,
            }}
          />
        </>
      );
    }

    return (
      <TeaserContact
        backgroundImage={fallbackEmployeeImage}
        type={employee.customSchemas.extendedEmployeeDataWebsite.Level}
        employeeData={{
          firstName: employee.name.givenName,
          lastName: employee.name.familyName,
          fullName: employee.name.fullName,
          department: employee.organizationDepartment,
          position: employee.organizationTitle,
          bio: employee.customSchemas.extendedEmployeeDataWebsite.Biography,
          profileImage: employee.customSchemas.extendedEmployeeDataWebsite.ListImageLink,
        }}
      />
    );
  });

  return (
    <Container>
      <CenterRow>
        <Row padding="0 40px">{cards.map((employeeCard) => employeeCard)}</Row>
      </CenterRow>
      <Spacing height={24} />
    </Container>
  );
};
[];

export default TeamCards;

function sortEmployees(employeeList) {
  if (!employeeList.length) {
    return [];
  }

  const ceo = employeeList.filter(
    (employee) =>
      employee.customSchemas.extendedEmployeeDataWebsite.Level === 'Chief' && employee.name.givenName === 'Gabriel',
  );
  const chiefEmployees = employeeList.filter(
    (employee) =>
      employee.customSchemas.extendedEmployeeDataWebsite.Level === 'Chief' && employee.name.givenName !== 'Gabriel',
  );
  const headEmployees = employeeList.filter(
    (employee) =>
      employee.customSchemas.extendedEmployeeDataWebsite.Level === 'Head' &&
      employee.email !== 'xenia.zinn@prea.eu' &&
      employee.email !== 'kai.presser@prea.eu' &&
      employee.email !== 'marco.cortes@prea.eu',
  );
  const restEmployees = employeeList.filter(
    (employee) =>
      employee.customSchemas.extendedEmployeeDataWebsite.Level !== 'Chief' &&
      employee.customSchemas.extendedEmployeeDataWebsite.Level !== 'Head' &&
      employee.email !== 'kai.presser@prea.eu' &&
      employee.email !== 'leonid.bojko@prea.eu' &&
      employee.email !== 'vladlen.yartsev@prea.eu' &&
      employee.email !== 'marco.cortes@prea.eu' &&
      employee.email !== 'fissenewert@buse.de' &&
      employee.email !== 'andrija.mihoci@prea.eu' &&
      employee.email !== 'matija.may@prea.eu' &&
      employee.email !== 'minh-chau.nguyen@prea.eu' &&
      employee.email !== 'xenia.zinn@prea.eu',
  );
  const kaiEmployee = employeeList.filter((employee) => employee.email === 'kai.presser@prea.eu');
  const leoEmployee = employeeList.filter((employee) => employee.email === 'leonid.bojko@prea.eu');
  const vladEmployee = employeeList.filter((employee) => employee.email === 'vladlen.yartsev@prea.eu');
  const cortesEmployee = employeeList.filter((employee) => employee.email === 'marco.cortes@prea.eu');
  const fissenewertEmployee = employeeList.filter((employee) => employee.email === 'fissenewert@buse.de');
  const andrijaEmployee = employeeList.filter((employee) => employee.email === 'andrija.mihoci@prea.eu');
  const matijaEmployee = employeeList.filter((employee) => employee.email === 'matija.may@prea.eu');
  const minhEmployee = employeeList.filter((employee) => employee.email === 'minh-chau.nguyen@prea.eu');

  const xeniaEmployee = employeeList.filter((employee) => employee.email === 'xenia.zinn@prea.eu');

  const specialEmployees = [
    ...kaiEmployee,
    ...leoEmployee,
    ...vladEmployee,
    ...cortesEmployee,
    ...fissenewertEmployee,
    ...andrijaEmployee,
    ...matijaEmployee,
    ...minhEmployee,
  ];

  const sortedEmployeeList = [
    ...ceo,
    ...chiefEmployees,
    ...headEmployees,
    ...specialEmployees,
    ...restEmployees,
    ...xeniaEmployee,
  ];
  return sortedEmployeeList;
}

export const CenterRow = styled.div`
  div {
    &:first-child {
      justify-content: stretch;
    }
  }
`;
