import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// pages
import List from './pages/list/List';
// import Item from './pages/item/Item';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.pageBackground};
  min-height: 100vh;
  &:after {
    content: 'Background text';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const StyledContainer = styled.div`
  max-width: 400px;
`;

const App = () => {
  return (
    <Router>
      <StyledWrapper>
        <StyledContainer>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/item/:itemId">{/*<Item />*/}</Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </StyledContainer>
      </StyledWrapper>
    </Router>
  );
};

export default App;
