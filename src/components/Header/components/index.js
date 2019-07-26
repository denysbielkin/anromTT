import React from 'react';

import {
    StyledHeader,
    StyledHeaderImgContainer as ImgContainer,
    StyledImg as Img,
    StyledHeaderTitle as Title
} from './styled';
import bdayIMG from '../../../common/styleAssets/imgs/bdayIMG.png';

const Header = () => (
    <StyledHeader>
        <ImgContainer>
            <Img src={bdayIMG} alt="Bday Header image"/>
        </ImgContainer>
        <Title>BIRTHDAY</Title>
    </StyledHeader>
);

export default Header;
