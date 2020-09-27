import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Colors } from '../../constants';

const LabelContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;
const Label = styled.span`
    flex: 1 1 auto;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.TITLE};
`;
const SkillDescription = styled.span`
    flex: 0 0 auto;
    color: #c9d0d5;
`;
const SkillBarContainer = styled.div`
    height: 15px;
    margin: 5px 0 20px 0;
    background-color: #c9d0d5;

    &::after {
        content: '';
        display: block;
        height: 100%;
        width: ${props => props.percentage}%;
        background-color: #69ca8e;
    }
`

export default class SkillBar extends PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    };

    getSkillDescription(percentage) {
        if (percentage < 60) {
            return 'Average';
        }
        if (percentage < 80) {
            return 'Good';
        }
        if (percentage < 90) {
            return 'Pro';
        }

        return 'Expert';
    }

    render() {
        const { label, percentage } = this.props;

        return (
            <div>
                <LabelContainer>
                    <Label>{label}</Label>
                    <SkillDescription>{this.getSkillDescription(percentage)}</SkillDescription>
                </LabelContainer>
                <SkillBarContainer percentage={percentage}></SkillBarContainer>
            </div>
        );
    }
}
