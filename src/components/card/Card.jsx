import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Colors } from '../../constants';

const CardContainer = styled.div`
    padding: 20px;
    background-color: #fff;
`;
const CardTitle = styled.span`
    display: block;
    padding-bottom: 20px;
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.TITLE};
`;

export default class Card extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node,
    }
    
    render() {
        const { title, children } = this.props;
        let titleComponent;

        if (title != null) {
            titleComponent = (
                <CardTitle>{title}</CardTitle>
            )
        }

        return (
            <CardContainer>
                {titleComponent}
                {children}
            </CardContainer>
        );
    }
}
