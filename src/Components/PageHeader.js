import React from 'react';
import styled from 'styled-components';

const PageHeaderWrapper = styled('div')`
	background-color: #f8f9fa;
	padding: 1rem 0;
	text-align: center;
`;

const PageHeaderText = styled('h2')`
	margin: 0;
`;

const PageHeader = ({ children }) => {
	return (
		<PageHeaderWrapper>
			<PageHeaderText>{children}</PageHeaderText>
		</PageHeaderWrapper>
	);
};

export default PageHeader;
