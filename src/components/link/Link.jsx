import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledA = styled.a`
    color: #69ca8e;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
const Icon = styled.i`
    padding-right: 8px;
`;

export default class Link extends PureComponent {
    static propTypes = {
        showIcon: PropTypes.bool,
        children: PropTypes.node,
    }
    
    render() {
        const { showIcon, children, ...props } = this.props;
        let iconComponent;

        if (showIcon) {
            iconComponent = (
                <Icon className="fas fa-external-link-alt"></Icon>
            )
        }

        return (
            <StyledA {...props}>
                {iconComponent}
                {children}
            </StyledA>
        )
    }
}
