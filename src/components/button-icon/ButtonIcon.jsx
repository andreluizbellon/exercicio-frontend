import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonIcon = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 100%;
    padding: 10px;
    width: 40px;
    height: 40px;
    color: #fff;
    background-color: #b1b7c0;
    font-size: 18px;
`;

export default class ButtonIcon extends PureComponent {
    static propTypes = {
        icon: PropTypes.string.isRequired,
    };
    
    render() {
        const { icon } = this.props;

        return (
            <StyledButtonIcon>
                <i className={`${icon}`}></i>
            </StyledButtonIcon>
        );
    }
}
