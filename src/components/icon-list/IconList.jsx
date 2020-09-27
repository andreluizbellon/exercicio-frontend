import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconListItem from './IconListItem.jsx';

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
`;

export default class IconList extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    }
    
    render() {
        const { children } = this.props;

        return (
            <StyledList>
                {children}
            </StyledList>
        );
    }
}

IconList.Item = IconListItem;
