// import axios from 'axios';
// import { navigate, useIntl } from 'gatsby-plugin-intl';

// export const isBrowser = () => typeof window !== 'undefined';
// export const getSortedLikelyArray = (links, input) => {
//   let linksPercentageObj = [];
//   links.map(({ name, path }) => {
//     linksPercentageObj.push({ linkName: name, percent: similarity(input, name) });
//   });
//   linksPercentageObj = linksPercentageObj.sort((a, b) => b.percent - a.percent);

//   const sortedNavList = [];
//   linksPercentageObj.map((linkObj) => {
//     sortedNavList.push(linkObj.linkName);
//   });
//   return sortedNavList.splice(0, 5);
// };

// export const getCurrentUrl = () => {
//   let currentUrlSplitted = null;
//   if (isBrowser()) {
//     currentUrlSplitted = document.URL.split('/');
//     currentUrlSplitted = currentUrlSplitted.splice(4, 6).join('/');
//     return currentUrlSplitted.split('/').filter(Boolean) || '/';
//   }
//   return currentUrlSplitted;
// };

// export const toNormelCase = (word) =>
//   word
//     .split(' ')
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
//     .join(' ');

// export const getFormattedDepartment = (department) => {
//   const lookupDepartment = [
//     {
//       givenDepartment: 'it',
//       displayedDepartmentSlug: 'it',
//     },
//     {
//       givenDepartment: 'construction & development',
//       displayedDepartmentSlug: 'construction-development',
//     },
//     {
//       givenDepartment: 'research',
//       displayedDepartmentSlug: 'research',
//     },
//     {
//       givenDepartment: 'marketing',
//       displayedDepartmentSlug: 'marketing',
//     },
//     {
//       givenDepartment: 'sales & acquisition',
//       displayedDepartmentSlug: 'sales-acquisition',
//     },
//     {
//       givenDepartment: 'sales & acquisition "mercury"',
//       displayedDepartmentSlug: 'sales-acquisition',
//     },
//     {
//       givenDepartment: 'business development & compliance',
//       displayedDepartmentSlug: 'business-development',
//     },
//     {
//       givenDepartment: 'finance & accounting',
//       displayedDepartmentSlug: 'finance-accounting',
//     },
//     {
//       givenDepartment: 'grafik / design',
//       displayedDepartmentSlug: 'graphic-design',
//     },
//   ];
//   const filteredDepartment = lookupDepartment.filter(
//     (dep) => dep.givenDepartment === department && dep.givenDepartment,
//   )[0];
//   if (filteredDepartment) {
//     return filteredDepartment.displayedDepartmentSlug;
//   }
//   return department;
// };

// export const formatWordPressInput = (wordpressContent) => {
//   const formattedWordpressContent = wordpressContent;
//   /* formattedWordpressContent = wordpressContent.match(/<p>(.*?)<\\/p>/g).map((val) => {
//   }); */

//   // eslint-disable-next-line no-use-before-define
//   /*  formattedWordpressContent = decodeHtmlCharCodes(formattedWordpressContent); */
//   return formattedWordpressContent;
// };

// export const deleteHtmlAndTags = (content) => {
//   const regHTMLDetector = /(<([^>]+)>)/gi;
//   let newContent = content.replace('&#8211;', '-');
//   newContent = newContent.replace(regHTMLDetector, '');
//   return newContent;
// };

// export const getCharAmountOfContent = (charAmount, content) => {
//   const shortendContent = content
//     ?.split('')
//     .map((word, index) => index <= charAmount && word)
//     .filter(Boolean)
//     .join('');

//   return `${shortendContent}...`;
// };

// export const prFormatDate = (dateTime, lang) => {
//   const date = dateTime.split('T')[0];
//   const [year, month, day] = date.split('-');
//   const delimiter = '.';
//   return `${day}${delimiter}${monthNameLookUp(lang, month)}${delimiter}${year}`;
// };

// export const pxToRem = (pixel) => {
//   const num = pixel / 16;
//   return num % 1 != 0 ? num.toFixed(3).toString() : num.toString();
// };

// export const getNavigationMenu = () => [
//   { name: 'services', path: 'services' },
//   { name: 'assetClasses', path: 'asset-classes' },
//   { name: 'technologies', path: 'technologies' },
//   { name: 'pressEvents', path: 'press-events' },
//   { name: 'trendsReports', path: 'trends-reports' },
//   { name: 'aboutUs', path: 'who-we-are' },
// ];

// export const getQuickLinkMenu = () => [
//   {
//     name: 'covid',
//     path: '/covid',
//   },
//   {
//     name: 'blog',
//     path: '/blog',
//   },
//   {
//     name: 'reports',
//     path: '/reports-trends',
//   },
// ];

// export const getSubNavUrls = (currentUrl) => {
//   if (currentUrl.split('/').length === 1) {
//     currentUrl = currentUrl.split('/').filter(Boolean).join('');
//   }
//   const subNavLinksObj = navlinksObj();

//   const filteredSubNavObj = subNavLinksObj.filter((linkObj) => linkObj.path === currentUrl);

//   return filteredSubNavObj;
// };

// export const getPathByName = (name) => {
//   const properName = convertPathToName(name);

//   const navlinks = navlinksObj();

//   const filterLink = navlinks.filter((linkObj) => linkObj.name === properName);
//   const { path } = filterLink[0];

//   return path;
// };

// export const getFooterMenu = () => [
//   {
//     name: 'privacyPolicy',
//     path: '/privacy',
//   },
//   {
//     name: 'imprint',
//     path: '/imprint',
//   },
//   {
//     name: 'sitemap',
//     path: '/sitemap',
//   },
//   {
//     name: 'legal',
//     path: '/legal',
//   },
// ];

// export const handleVCardDownload = (employeeData) =>
//   /* if (isBrowser()) {
//     const url = window.URL.createObjectURL(new Blob([employeeData.vCard]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', `${employeeData.mail}.vcf`);
//     document.body.appendChild(link);
//     link.click();
//   } */

//   navigate('/contact');
// export const handleVCalDownload = (event) => {
//   if (isBrowser()) {
//     const url = window.URL.createObjectURL(new Blob([event]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'event.ics');
//     document.body.appendChild(link);
//     link.click();
//   }
// };

// const getEnMonth = () => {};
// export const formatDate = (date, language) => {
//   const dateArr = date.split('.');
//   const day = dateArr[0];
//   const month = dateArr[1];
//   const year = dateArr[2];

//   return `${day}. ${month} ${year}`;
// };

// export const getMonthName = (monthNum) => {
//   const intl = useIntl();
//   return monthNameLookUp(intl.locale, monthNum);
// };

// export const getSitemapUrlsObj = () => [
//   { name: 'services', path: 'services' },
//   { name: 'consultDevelopBuild', path: 'consult-develop-build' },
//   { name: 'realEstateTransactions', path: 'real-estate-transaction' },
//   { name: 'buildingPlot', path: 'building-plot' },
//   { name: 'housing', path: 'housing' },
//   { name: 'care', path: 'care' },
//   { name: 'office', path: 'office' },
//   { name: 'dataCenter', path: 'data-center' },
//   { name: 'retail', path: 'retail' },
//   { name: 'logistics', path: 'logistics' },
//   { name: 'hotel', path: 'hotel' },
//   { name: 'references', path: 'references' },
//   { name: 'realEstateFinancing', path: 'real-estate-financing' },
//   { name: 'debtCapital', path: 'dept-capital' },
//   { name: 'equity', path: 'equity' },
//   { name: 'jointVenture', path: 'joint-venture' },
//   { name: 'realEstateValuation', path: 'real-estate-valuation' },
//   { name: 'artificialIntelligence', path: 'artificial-intelligence' },
//   { name: 'reports', path: 'reports' },
//   { name: 'projectEvaluation', path: 'project-evaluation' },
//   { name: 'portfolioConsulting', path: 'portfolio-consulting' },
//   { name: 'realEstateDevelopment', path: 'real-estate-development' },
//   { name: 'serviceDevelopment', path: 'service-development' },
//   { name: 'architecturalServices', path: 'architectural-services' },
//   { name: 'projectDevelopment', path: 'project-development' },
//   { name: 'technology', path: 'technology' },
//   { name: 'realEstateInvestment', path: 'real-estate-investment' },
//   { name: 'diligenceProcess', path: 'diligence-process' },
//   { name: 'digitalDealRooms', path: 'digital-deal-rooms' },
//   { name: 'acquisitionMandate', path: 'acquisition-mandate' },
//   { name: 'jointVentures', path: 'joint-ventures' },
//   { name: 'whoWeAre', path: 'prea' },
//   { name: 'team', path: 'team' },
//   { name: 'sustainability', path: 'sustainability' },
//   { name: 'complianceEthic', path: 'compliance-ethic' },
//   { name: 'career', path: 'career' },
//   { name: 'vacancies', path: 'vacancies' },
//   { name: 'event', path: 'event' },
//   { name: 'contact', path: 'contact' },
//   { name: 'investment', path: 'investment' },
//   { name: 'research', path: 'research' },
//   { name: 'imprint', path: 'imprint' },
//   { name: 'privacy', path: 'privacy' },
//   { name: 'blog', path: 'blog' },
//   { name: 'covid', path: 'covid' },
// ];

// export const getTokenFromSearchParams = () => {
//   if (isBrowser()) {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get('token');
//     return token;
//   }
// };

// export const getUniqueArrayOfObjects = (arr) =>
//   arr.filter((item, index, self) => index === self.findIndex((itemB) => itemB.option.name === item.option.name));

// export const convertPathToName = (path) => {
//   if (path === 'prea') {
//     path = 'who-we-are';
//   }
//   const splittedPath = path.split('-');
//   if (splittedPath.length > 1) {
//     return splittedPath
//       .map((path, index) => {
//         if (index !== 0) {
//           return path.charAt(0).toUpperCase() + path.slice(1);
//         }
//         return path;
//       })
//       .join('');
//   }
//   return splittedPath[0];
// };

// const navlinksObj = () => [
//   {
//     name: 'services',
//     path: 'services',
//     childrens: [
//       { name: 'realEstateTransactions', path: 'services/real-estate-transaction' },
//       { name: 'realEstateFinancing', path: 'services/real-estate-financing' },
//       { name: 'realEstateValuation', path: 'services/real-estate-evaluation' },
//       { name: 'realEstateInvestment', path: 'services/real-estate-investment' },
//       { name: 'realEstateDevelopment', path: 'services/real-estate-development' },
//       { name: 'realEstateAssetManagement', path: 'services/real-estate-asset-management' },
//     ],
//   },
//   {
//     name: 'realEstateTransactions',
//     path: 'services/real-estate-transaction',
//     childrens: [],
//   },
//   {
//     name: 'realEstateFinancing',
//     path: 'services/real-estate-financing',
//     childrens: [],
//   },
//   {
//     name: 'realEstateValuation',
//     path: 'services/real-estate-evaluation',
//     childrens: [],
//   },
//   {
//     name: 'realEstateInvestment',
//     path: 'services/real-estate-investment',
//     childrens: [],
//   },
//   {
//     name: 'realEstateDevelopment',
//     path: 'services/real-estate-development',
//     childrens: [],
//   },
//   {
//     name: 'realEstateAssetManagement',
//     path: 'services/real-estate-asset-management',
//     childrens: [],
//   },
//   {
//     name: 'privacyPolicy',
//     path: 'privacy-policy',
//     childrens: [],
//   },
//   {
//     name: 'assetClasses',
//     path: 'asset-classes',
//     childrens: [
//       { name: 'dataCenter', path: 'asset-classes/datacenter' },
//       { name: 'living', path: 'asset-classes/living' },
//     ],
//   },
//   {
//     name: 'datacenter',
//     path: 'asset-classes/datacenter',
//     childrens: [],
//   },
//   {
//     name: 'living',
//     path: 'asset-classes/living',
//     childrens: [],
//   },
//   {
//     name: 'technologies',
//     path: 'technologies',
//     childrens: [{ name: 'mercury', path: 'technologies/mercury' }],
//   },
//   {
//     name: 'mercury',
//     path: 'technologies/mercury',
//     childrens: [{ name: 'consulting', path: 'technologies/mercury/consulting' }],
//   },
//   {
//     name: 'consulting',
//     path: 'technologies/mercury/consulting',
//     childrens: [],
//   },
//   {
//     name: 'reportsTrends',
//     path: 'reports-trends',
//     childrens: [{ name: 'dataCenterReport', path: 'reports-trends/datacenter-report' }],
//   },
//   {
//     name: 'dataCenterReport',
//     path: 'reports-trends/datacenter-report',
//   },
//   {
//     name: 'whoWeAre',
//     path: 'prea',
//     childrens: [
//       { name: 'team', path: 'prea/team' },
//       { name: 'complianceEthic', path: 'prea/ethic' },
//       { name: 'sustainability', path: 'prea/sustainability' },
//     ],
//   },

//   {
//     name: 'team',
//     path: 'prea/team',
//     childrens: [],
//   },
//   {
//     name: 'complianceEthic',
//     path: 'prea/ethic',
//     childrens: [],
//   },
//   {
//     name: 'sustainability',
//     path: 'prea/sustainability',
//     childrens: [],
//   },
//   {
//     name: 'blog',
//     path: 'blog',
//     childrens: [],
//   },
//   {
//     name: 'contact',
//     path: 'contact',
//     childrens: [],
//   },
//   {
//     name: 'events',
//     path: 'events',
//     childrens: [],
//   },
//   {
//     name: 'imprint',
//     path: 'imprint',
//     childrens: [],
//   },
//   {
//     name: 'legal',
//     path: 'legal',
//     childrens: [],
//   },
//   {
//     name: 'privacy',
//     path: 'privacy',
//     childrens: [],
//   },
//   {
//     name: 'sitemap',
//     path: 'sitemap',
//     childrens: [],
//   },
//   {
//     name: 'trendsReports',
//     path: 'trends-reports',
//     childrens: [],
//   },
// ];

// const similarity = (s1, s2) => {
//   let longer = s1;
//   let shorter = s2;
//   if (s1.length < s2.length) {
//     longer = s2;
//     shorter = s1;
//   }
//   const longerLength = longer.length;
//   if (longerLength == 0) {
//     return 1.0;
//   }
//   return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
// };

// const editDistance = (s1, s2) => {
//   s1 = s1.toLowerCase();
//   s2 = s2.toLowerCase();

//   const costs = new Array();
//   for (let i = 0; i <= s1.length; i++) {
//     let lastValue = i;
//     for (let j = 0; j <= s2.length; j++) {
//       if (i == 0) costs[j] = j;
//       else if (j > 0) {
//         let newValue = costs[j - 1];
//         if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
//         costs[j - 1] = lastValue;
//         lastValue = newValue;
//       }
//     }
//     if (i > 0) costs[s2.length] = lastValue;
//   }
//   return costs[s2.length];
// };

// const decodeHtmlCharCodes = (str) =>
//   str.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));

// const monthNameLookUp = (lang, monthNum) => {
//   let monthLookup = {};

//   if (lang === 'en') {
//     monthLookup = {
//       '01': 'January',
//       '02': 'February',
//       '03': 'March',
//       '04': 'April',
//       '05': 'May',
//       '06': 'June',
//       '07': 'July',
//       '08': 'August',
//       '09': 'September',
//       10: 'October',
//       11: 'November',
//       12: 'December',
//     };
//   }
//   if (lang === 'de') {
//     monthLookup = {
//       '01': 'Januar',
//       '02': 'Februar',
//       '03': 'März',
//       '04': 'April',
//       '05': 'Mai',
//       '06': 'Juni',
//       '07': 'Juli',
//       '08': 'August',
//       '09': 'September',
//       10: 'Oktober',
//       11: 'November',
//       12: 'Dezember',
//     };
//   }

//   return monthLookup[monthNum] || undefined;
// };

export function getFilterDates(filterList) {
  const dates = filterList.filter(({ option }) => !option.name).map(({ option }) => Number(option));
  if (dates.length) {
    const dateTo = dates.length > 1 ? Math.max(...dates) + 1 : dates[0] + 1;
    const dateFrom = dates.length > 1 ? Math.min(...dates) - 1 : dates[0] - 1;
    return { dateTo, dateFrom };
  }
  const dateTo = new Date(Date.now()).getFullYear() + 1;
  const dateFrom = null;
  return {
    dateTo,
    dateFrom,
  };
}
