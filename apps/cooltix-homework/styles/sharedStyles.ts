import { css, keyframes } from 'styled-components';

export const shineAnimation = css`
  @keyframes shine {
    0% {
      background-position: -200px;
    }
    100% {
      background-position: calc(200px + 100%);
    }
  }

  background: linear-gradient(90deg, #f0f0f0, #f8f8f8, #f0f0f0);
  background-size: 200% 100%;
  animation: shine 1s infinite linear;
`;

export const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInAnimation = css`
  animation: ${fadeInKeyframes} 0.3s ease-in;
`;
