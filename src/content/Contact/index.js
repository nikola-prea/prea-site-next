import { useEffect } from 'react';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import MultiContactForm from '../../components/Modules/MultiContactForm';
import * as S from './style';

const Contact = ({ notificationMessage, notificationType, target }) => {
  const { changeThemeSetting } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      changeThemeSetting('light');
    }
  }, []);

  return (
    <S.ContactContainer>
      <MultiContactForm type={target} notificationMessage={notificationMessage} notificationType={notificationType} />
    </S.ContactContainer>
  );
};

export default Contact;
