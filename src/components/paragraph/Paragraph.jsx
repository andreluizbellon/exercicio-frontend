import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    line-height: 1.4;
`

export default class Paragraph extends PureComponent {
    render() {
        return (
            <StyledP {...this.props} />
        );
    }
}
