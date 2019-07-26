import {Tabs, Card} from 'antd';
import styled from 'styled-components';
import {mainColors} from '../../../common/colors';
import boldFont from '../../../common/styleAssets/fonts/VodafoneRgBd.ttf';

export const StyledTabsContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
`;

export const StyledTabs = styled(Tabs)`
max-width: 100%;
 width: 100%;
 
 .ant-tabs-nav-scroll{
 display:flex;
 justify-content:space-around
 }
 .ant-tabs-tab{
 flex-grow:8;
 }
 .ant-tabs-ink-bar{
    background-color: ${mainColors.red};
 }
 
.ant-tabs-tab, .ant-tabs-tab-active{
 color: ${mainColors.red}!important;
 }
 
 .ant-tabs-tab-active{
    font-family: ${boldFont}
 }
  
`;

export const StyledTabPane = styled(Tabs.TabPane)`
 display:flex;
 justify-content:center;
 width:100%;
`;

export const StyledTabPaneContent = styled.div`
display:flex;
flex-wrap:wrap;

max-width:50%;
width:50%;
 `;

export const StyledCard = styled(Card)`
width: 360px;
// max-width:  200px;
`;
