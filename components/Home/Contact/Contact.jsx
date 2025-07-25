import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="mailto:hello@pegassia.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            hello@pegassia.com
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:partnerships@pegassia.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            partnerships@pegassia.com
          </a>
        </div>
        <address className="column contact-text">
          Digital Innovation Hub<br /> Global AI Solutions Network
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
