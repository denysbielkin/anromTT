import React from 'react';

import Header from '../Header';
import BdayTabs from '../BdayTabs/components';

import {StyledLayout} from './styled';

const App = () => (
    <div>
        <BdayTabs/>
    </div>
);

const AppContainer = () => (
    <StyledLayout>
        <Header/>
        <App/>
    </StyledLayout>
);

export default AppContainer;