import React from 'react';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
 margin: 0 auto;
 max-width: 1200px;
 background: black;
`;

type PageContainerProps = {
    children: any;
};

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <StyledPageContainer>
            {children}
        </StyledPageContainer>
    );
};

export default PageContainer;