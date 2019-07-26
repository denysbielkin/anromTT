import React, {PureComponent} from 'react';
import {Card, Avatar, Spin} from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

const {Meta} = Card;

import {
    StyledTabsContainer as Container,
    StyledTabs as Tabs,
    StyledTabPane as TabPane,
    StyledTabPaneContent as PaneContent,
    StyledCard
} from './styled';

export default class BdayTabs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading:true,
        }

    }

    componentDidMount(){
        const date = this.getDate()
        console.error(date);

        //place for func which will use moment.js to get 2prev weeks and 2next weeks; that func will return obj:{prev:'07.15',today:07.29',next:'08.12'}

        axios.get(`http://test.anromsocial.com/api/birthdays?dateFrom=${date.prev}&dateTo=${date.next}`).then( res => {
            console.log('response: ',res)
            this.setState({
                isLoading:false,
                data: res.data.users
            });
        })
    }

    getDate(){
        return {
            prev: moment().subtract(2,'weeks').format('MM.DD'),
            today: moment().format('MM.DD'),
            next: moment().add(2,'weeks').format('MM.DD')
        }
    }


    renderCards(){
        const {data} = this.state;
        return isEmpty(data) ? (<div style={{width:'100%', textAlign: 'center'}}><i>Sorry, no data to show</i></div>): data.map((item,key)=>{
            return (
                <StyledCard key={key} size={'small'} bordered={false}>
                    <Meta
                        avatar={
                            <Avatar size={64} src={`http://test.anromsocial.com/${item.avatarUrl}`} />
                        }
                        title={item.name}
                        description={<div>
                            <div>{item.jobTitle}</div>
                            <b>{item.birthday}</b>
                        </div>}
                    />
                </StyledCard>
            )
        })

    }

    render() {
        console.log(this.state)

        return this.state.isLoading ? <div style={{width:'100%', textAlign:'center'}}><Spin size={'large'} /></div>:(
            <Container>
                <Tabs defaultActiveKey={'1'}>
                    <TabPane key={'0'} tab={'RECENT DATES'}>
                        <PaneContent>
                            123 perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                            architecto
                            beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                            aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi
                            nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam
                            aliquam quaerat volu
                        </PaneContent>
                    </TabPane>
                    <TabPane key={'1'} tab={'TODAY'}>
                        <PaneContent>
                            {this.renderCards()}

                        </PaneContent>
                    </TabPane>
                    <TabPane key={'2'} tab={'UPCOMING DATES'}>
                        <PaneContent>

                            545Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                            architecto
                            beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                            aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi
                            nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam
                            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis
                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                            reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
                            qui
                            dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio
                            dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos
                            dolores
                            et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in
                            culpa,
                            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis es
                        </PaneContent>
                    </TabPane>
                </Tabs>
            </Container>
        )
    }

}