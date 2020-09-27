import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLi = styled.li`
    list-style: none;
    padding: 8px;
`;
const Icon = styled.i`
    padding-right: 8px;
    color: #c9d0d5;
`;

export default class IconListItem extends PureComponent {
    static propTypes = {
        icon: PropTypes.string,
        children: PropTypes.node,
    }
    
    render() {
        const { icon, children } = this.props;

        return (
            <StyledLi>
                <Icon className={`${icon}`}></Icon>
                {children}
            </StyledLi>
        );
    }
}
