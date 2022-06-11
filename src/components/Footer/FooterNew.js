import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

const FooterNew = () => {


  return (
    <section id="contact">
      <Container>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
            Would you like to work with me? Awesome!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href=""
            >
            Let's Talk
            </a>
          </div>
      </Container>
    </section>
  );
};

export default FooterNew;
