import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function Footer() {
  return (
    <StyledFooter>
      <Image src="/images/logo-white.svg" alt="logo" width={146} height={48} />

      <p className="email">ticket@cooltix.hu</p>
      <p>Follow us on networks</p>
      <div className="socials">
        <a href="https://www.facebook.com/CooltixHungary" target="_blank">
          <Image
            src="/images/facebook.svg"
            alt="facebook"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.linkedin.com/company/cooltix/" target="_blank">
        <Image
          src="/images/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
        </a>

        <a href="https://www.instagram.com/cooltixhungary/" target="_blank">
          <Image
            src="/images/instagram.svg"
            alt="instagram"
            width={40}
            height={40}
          />
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0c0c;
  color: #fff;
  padding-top: 42px;
  margin-top: 156px;

  .email {
    padding-top: 14px;
    padding-bottom: 24px;
  }

  .socials {
    margin-top: 20px;
    margin-bottom: 56px;
    display: flex;
    justify-content: center;
    gap: 14px;
  }
`;

export default Footer;
