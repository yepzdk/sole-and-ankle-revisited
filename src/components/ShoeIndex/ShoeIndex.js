import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, BREAKPOINTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <MobileSpacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <MobileSpacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: baseline;
  gap: 32px;

  @media (${BREAKPOINTS.phone}){
    gap: 4px;
  }

  @media (${BREAKPOINTS.tablet}){
    gap: 4px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${BREAKPOINTS.phone}){
    flex-basis: 0;
  }

  @media (${BREAKPOINTS.tablet}){
    flex-basis: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const MobileSpacer = styled(Spacer)`
  @media (${BREAKPOINTS.phone}){
    display: none;
  }

  @media (${BREAKPOINTS.tablet}){
    display: none;
  }
`



export default ShoeIndex;
