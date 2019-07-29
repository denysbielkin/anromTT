import React, {Fragment, PureComponent} from 'react';
import {Card, Avatar, Spin} from 'antd';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import moment from 'moment/moment';
import axios from 'axios';

import {DATES_TYPES} from './index';
import {apiLinks} from '../../../common/constants';

import {
    Centralizer,
    StyledTabPaneContent as PaneContent,
    StyledCard,
    StyledShowMore,
    StyledJobString,
    StyledBirthdayString
} from './styled';

const {Meta} = Card;

export default class BdayTab extends PureComponent {
    constructor(props) {
        super(props);


        this.state = {
            isLoading: true,
            allUsers: [],
            currentUsers: [],
            offset: 0,
        }
    }

    async componentDidMount() {
        const users = await this.dateRequests();
        const sortedUsers = this.sortUsers(users.data.users);

        const currentUsers = this.changeCurrentUsersArray(sortedUsers, true);

        this.setState({isLoading: false, allUsers: sortedUsers, currentUsers, offset: 10});
    }

    dateRequests = async () => {
        const date = this.getDate();
        return await axios.get(`${apiLinks.url}${apiLinks.api}/${apiLinks.birthdays}?dateFrom=${date.from}&dateTo=${date.to}`);

    };

    changeCurrentUsersArray = (arr = this.state.allUsers, isInit = false) => {
        const {offset, currentUsers} = this.state;

        const counter = arr.length >= (offset + 10) ? (offset + 10) : arr.length;
        const newArr = [];
        console.error(currentUsers.length, counter)
        for (let i = currentUsers.length; i < counter; i++) {
            newArr.push(arr[i]);
            console.error(i)
        }

        console.log('STATES', arr, currentUsers, newArr)
        if (!isInit) {
            this.setState({currentUsers: [...currentUsers, ...newArr], offset: offset + 10});
        } else {
            return newArr;
        }
    };

    getDate() {
        const {type} = this.props;
        const format = 'MM.DD';
        const allDates = {
            prev: moment().subtract(2, 'weeks'),
            currentDate: {
                onePrev: moment().subtract(1, 'days'),
                today: moment(),
                oneNext: moment().add(1, 'days')
            },
            next: moment().add(2, 'weeks')
        };

        let dateToSend = {};

        switch (type) {
            case DATES_TYPES.PREV_DATES: {
                dateToSend.from = allDates.prev;
                dateToSend.to = allDates.currentDate.onePrev;
                break;
            }
            case DATES_TYPES.CURRENT_DATES: {
                dateToSend.from = allDates.currentDate.today;
                dateToSend.to = moment().isLeapYear() ? allDates.currentDate.oneNext : allDates.currentDate.today;
                break;
            }
            case DATES_TYPES.NEXT_DATES: {
                dateToSend.from = moment().isLeapYear() ? moment().add(2, 'days') : allDates.currentDate.oneNext;
                dateToSend.to = allDates.next;
                break;
            }
        }

        return {
            from: dateToSend.from.format(format),
            to: dateToSend.to.format(format)
        }
    }

    sortUsers(users = []) {
        const {type} = this.props;
        switch (type) {
            case DATES_TYPES.PREV_DATES: {
                return orderBy(users, [item => moment(item.birthday).format('MM-DD'), 'name'], ['desc', 'asc']);
            }
            case DATES_TYPES.CURRENT_DATES: {
                return orderBy(users, ['name'], ['asc']);
            }
            case DATES_TYPES.NEXT_DATES: {
                return orderBy(users, [item => moment(item.birthday).format('MM-DD'), 'name'], ['asc', 'asc']);
            }
        }

    }

    renderCards() {
        const {currentUsers, allUsers} = this.state;

        return isEmpty(allUsers) ?
            (
                <Centralizer>
                    <i>Sorry, no data to show</i>
                </Centralizer>
            )
            : currentUsers.map((item, key) => {
                return (
                    <StyledCard key={key} size={'small'} bordered={false}>
                        <Meta
                            avatar={
                                <Avatar size={64} src={`${apiLinks.url}${item.avatarUrl}`}/>
                            }
                            title={item.name}
                            description={<div>
                                <StyledJobString>{item.jobTitle}</StyledJobString>
                                <StyledBirthdayString>{moment(item.birthday).format('DD MMMM')}</StyledBirthdayString>
                            </div>}
                        />
                    </StyledCard>
                )
            })

    }


    render() {

        return this.state.isLoading ?
            <Centralizer>
                <Spin size={'large'}/>
            </Centralizer>
            : (
                <Fragment>
                    <PaneContent>

                        {this.renderCards()}


                    </PaneContent>
                    {
                        !(this.state.allUsers.length === this.state.currentUsers.length) &&
                        <StyledShowMore onClick={() => this.changeCurrentUsersArray()}>SHOW MORE ►</StyledShowMore>
                    }
                </Fragment>
            );
    }
}