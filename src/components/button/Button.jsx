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
    background-color: ${props => {
        if (props.primary) return '#57b952';
        if (props.info) return '#4b9fc6';
        return '#ccc';
    }};
`;
const Icon = styled.i`
    padding-right: 8px;
`;

export default class Button extends PureComponent {
    static propTypes = {
        icon: PropTypes.string,
        children: PropTypes.node,
        primary: PropTypes.bool,
        info: PropTypes.bool,
    };
    
    render() {
        const { icon, children, ...props } = this.props;
        let iconComponent;

        if (icon != null) {
            iconComponent = (
                <Icon className={`${icon}`}></Icon>
            )
        }

        return (
            <StyledButton {...props}>
                {iconComponent}
                {children}
            </StyledButton>
        );
    }
}
