import styled from 'styled-components';

import {mainColors} from '../../../common/colors';
import boldFont from '../../../common/styleAssets/fonts/VodafoneRgBd.ttf';

export const StyledHeader = styled.div`
width:100%;
display:flex;
flex-direction:column;
  justify-content:center;

`;

export const StyledImg = styled.img`

  height:10rem;
  width:10rem;
`;

export const StyledHeaderImgContainer = styled.div`
display:flex;
  justify-content:center;

width:100%;
  border-bottom: 4px solid ${mainColors.red};
  `;

export const StyledHeaderTitle = styled.h1`
    text-align:center;
    font-family: ${boldFont};
    color: ${mainColors.red};
`;