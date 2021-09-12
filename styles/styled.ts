import { keyframes } from '@emotion/react';
import styled from '@emotion/styled'
import { bounce, } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
