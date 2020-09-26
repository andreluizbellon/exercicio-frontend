import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    padding: 8px 10px;
    font-family: 'Montserrat';
    color: #fff;
    background-color: #57b952;
`;
const Icon = styled.i`
    padding-right: 8px;
`;

export default class Button extends PureComponent {
    static propTypes = {
        icon: PropTypes.string,
        children: PropTypes.node,
    };
    
    render() {
        const { icon, children } = this.props;
        let iconComponent;

        if (icon != null) {
            iconComponent = (
                <Icon className={`${icon}`}></Icon>
            )
        }

        return (
            <StyledButton>
                {iconComponent}
                {children}
            </StyledButton>
        );
    }
}
