import React, {Component} from 'react';
import {Card, Avatar, Spin} from 'antd';
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

export default class BdayTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name:'Adolfo Gutierrez',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top Computer Network Architect',
                    bdate:'23131231',

                },
                {
                    name:'Adolfo Gutierrez',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top3413manager',
                    bdate:'23131231',

                },
                {
                    name:'Adolfo Gutierrez',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:' Computer Network Architect',
                    bdate:'23131231',

                },
                {
                    name:'Lea Kristensen',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Computer Network Architect ',
                    bdate:'23131231',

                },
                {
                    name:'Adolfo Gutierrez',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top manager',
                    bdate:'23131231',

                },
                {
                    name:'Malone Durand Durand Malone Durand',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Computer Network Architect',
                    bdate:'23131231',

                },
                {
                    name:'Katya',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:' manager',
                    bdate:'23131231',

                },
                {
                    name:'Lea Kristensen',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top ',
                    bdate:'23131231',

                },
                {
                    name:'Malone Durand',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Computer Network Architect manager',
                    bdate:'23131231',

                },
                {
                    name:'Ilona',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top3413manager',
                    bdate:'23131231',

                },
                {
                    name:'Katya',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:' manager',
                    bdate:'23131231',

                },
                {
                    name:'Vova',
                    img: 'http://test.anromsocial.com/api/avatar/7be413ba-2bee-43f1-a6f1-362254a7b2e0.jpg',
                    job:'Top ',
                    bdate:'23131231',

                },
            ],
            isLoading:false,
        }

    }




    renderCards(){
        const {data} = this.state;
        return isEmpty(data) ? (<div style={{width:'100%', textAlign: 'center'}}><i>Sorry, no data to show</i></div>): data.map((item,key)=>{
            return (
                <StyledCard key={key} size={'small'} bordered={false}>
                    <Meta
                        avatar={
                            <Avatar size={64} src={item.img} />
                        }
                        title={item.name}
                        description={<div>
                            <div>{item.job}</div>
                            <div>{item.bdate}</div>
                        </div>}
                    />
                </StyledCard>
            )
        })

    }

    render() {

        return this.state.isLoading ? <div style={{width:'100%', textAlign:'center'}}><Spin size={25} /></div>:(
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