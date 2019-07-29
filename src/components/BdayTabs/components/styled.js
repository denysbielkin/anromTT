import {Tabs, Card} from 'antd';
import styled from 'styled-components';
import {mainColors} from '../../../common/constants';
import boldFont from '../../../common/styleAssets/fonts/VodafoneRgBd.ttf';
import lightFont from '../../../common/styleAssets/fonts/VodafoneLt.ttf';

export const Centralizer = styled.div`
width:100%;
text-align:center; 
margin-top:20px;
`;

export const StyledTabsContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
`;

export const StyledTabs = styled(Tabs)`
width:800px;
margin: 0 auto; 

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
 width:100%;
`;

export const StyledTabPaneContent = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-between;
 `;

export const StyledCard = styled(Card)`
width: 360px;

.ant-card-meta-detail > div:not(:last-child){
    margin-bottom:0;
}
`;

export const StyledShowMore = styled.div`
    cursor:pointer;
    font-family: ${boldFont};
    margin: 0 auto;
    width:max-content;
    text-align:center; 

`; // text-align:center;  - in current case: button centralizer for IE11

export const StyledJobString = styled.i`
    font-family: ${lightFont};
    display:inline-block;
    margin-bottom:8px;
    
`;

export const StyledBirthdayString = styled.div`
    font-family: ${boldFont};
    color:black;
`;

