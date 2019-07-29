import React from 'react';

import BdayTab from './BdayTab';
import {
    StyledTabsContainer as Container,
    StyledTabs as Tabs,
    StyledTabPane as TabPane,
} from './styled';


export const DATES_TYPES = {
    PREV_DATES: 'prevDates',
    CURRENT_DATES: 'currentDates',
    NEXT_DATES: 'nextDates'
};



const BdayTabs = () => {

    const tabs = [
        {
            title:'RECENT DATES',
            type:DATES_TYPES.PREV_DATES
        },
        {
            title:'TODAY',
            type:DATES_TYPES.CURRENT_DATES
        },
        {
            title:'UPCOMING DATES',
            type:DATES_TYPES.NEXT_DATES
        },
    ];

    return (
        <Container>
            <Tabs defaultActiveKey={'1'}>
                {tabs.map((item,key)=>(
                    <TabPane key={key} tab={item.title}>
                        <BdayTab type={item.type}/>
                    </TabPane>
                ))}
            </Tabs>
        </Container>
    )
};

export default BdayTabs;
