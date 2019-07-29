import React from 'react';

import Header from '../Header';
import BdayTabs from '../BdayTabs/components';

import {StyledLayout} from './styled';

const App = () => (
    <StyledLayout>
        <Header/>
        <BdayTabs/>
    </StyledLayout>
);

export default App;