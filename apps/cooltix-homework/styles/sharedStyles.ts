import { css } from 'styled-components';

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