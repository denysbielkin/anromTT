/**
 * TODO:
 * 1) check and fix cases with leap year
 * 2) check users cards for correct data printing (CHECK TASK CONDITIONS!!!)
 * 3) insert links to ./common
 * 4) check for adaptive mark-up
 * 5) check for fonts correct using
 * 6) refactoring
 * 7) code cleaning
 * */


import React, {PureComponent} from 'react';
import {Card, Avatar, Spin} from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import axios from 'axios';

import {
    StyledTabsContainer as Container,
    StyledTabs as Tabs,
    StyledTabPane as TabPane,
    StyledTabPaneContent as PaneContent,
    StyledCard
} from './styled';

const {Meta} = Card;

const DATES_TYPES = {
    PREV_DATES: 'prevDates',
    CURRENT_DATES: 'currentDates',
    NEXT_DATES: 'nextDates'
};

export default class BdayTabs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        }

    }

    async componentDidMount() {
        const data = await this.dateRequests();
        this.setState({isLoading: false, data})
    }

    dateRequests = async () => {
        const date = this.getDate();

        const prevUsers = axios.get(`http://test.anromsocial.com/api/birthdays?dateFrom=${date.prev}&dateTo=${date.currentDate.onePrev}`);
        const todayUsers = axios.get(`http://test.anromsocial.com/api/birthdays?dateFrom=${date.currentDate.today}&dateTo=${date.currentDate.today}`);
        const nextUsers = axios.get(`http://test.anromsocial.com/api/birthdays?dateFrom=${date.currentDate.oneNext}&dateTo=${date.next}`);

        return {
            [DATES_TYPES.PREV_DATES]: await prevUsers,
            [DATES_TYPES.CURRENT_DATES]: await todayUsers,
            [DATES_TYPES.NEXT_DATES]: await nextUsers,
        };
    };

    getDate() {
        const format = 'MM.DD';
        return {
            prev: moment().subtract(2, 'weeks').format(format),
            currentDate: {
                onePrev:moment().subtract(1,'days').format(format),
                today:moment().format(format),
                oneNext: moment().add(1, 'days').format(format)
            },
            next: moment().add(2, 'weeks').format(format)
        }
    }

    sortUsers(users = [], type){
        if (type===DATES_TYPES.PREV_DATES){
            return orderBy(users, [item =>moment(item.birthday).format('MM-DD'), 'name'], ['desc', 'asc']);
        } else if (type===DATES_TYPES.CURRENT_DATES){
            return orderBy(users, ['name'],['asc']);
        } else if (type===DATES_TYPES.NEXT_DATES){
            return orderBy(users, [item =>moment(item.birthday).format('MM-DD'), 'name'], ['asc', 'asc']);
        }


    }

    renderCards(type) {
        const {data} = this.state;
        const sortedUsers = this.sortUsers(data[type].data.users, type);

        return isEmpty(sortedUsers) ?
            (<div style={{width: '100%', textAlign: 'center'}}><i>Sorry, no data to show</i>
        </div>)
            : sortedUsers.map((item, key) => {
            return (
                <StyledCard key={key} size={'small'} bordered={false}>
                    <Meta
                        avatar={
                            <Avatar size={64} src={`http://test.anromsocial.com/${item.avatarUrl}`}/>
                        }
                        title={item.name}
                        description={<div>
                            <div>{item.jobTitle}</div>
                            <b>{moment(item.birthday).format('DD MMMM')}</b>
                        </div>}
                    />
                </StyledCard>
            )
        })

    }

    render() {
        return this.state.isLoading ? <div style={{width: '100%', textAlign: 'center'}}><Spin size={'large'}/></div> : (
            <Container>
                <Tabs defaultActiveKey={'1'}>
                    <TabPane key={'0'} tab={'RECENT DATES'}>
                        <PaneContent>
                            {this.renderCards(DATES_TYPES.PREV_DATES)}
                        </PaneContent>
                    </TabPane>
                    <TabPane key={'1'} tab={'TODAY'}>
                        <PaneContent>
                            {this.renderCards(DATES_TYPES.CURRENT_DATES)}
                        </PaneContent>
                    </TabPane>
                    <TabPane key={'2'} tab={'UPCOMING DATES'}>
                        <PaneContent>
                            {this.renderCards(DATES_TYPES.NEXT_DATES)}
                        </PaneContent>
                    </TabPane>
                </Tabs>
            </Container>
        )
    }

}