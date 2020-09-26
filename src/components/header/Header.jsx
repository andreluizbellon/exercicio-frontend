import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from '../button/Button.jsx';
import ButtonIcon from '../button-icon/ButtonIcon.jsx';
import profile from './img/profile.png';

const breakpoint = '1024px';

const StyledHeader = styled.header`
    background: #f5f5f5;
    border-top: 10px solid #778491;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: ${breakpoint};
    margin: 0 auto;
    padding: 20px 0;

    @media (max-width: ${breakpoint}) {
        flex-direction: column;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    flex-grow: 1;

    & > * + * {
        margin-top: 10px;
    }

    @media (max-width: ${breakpoint}) {
        align-items: center;
        margin-bottom: 20px;
    }
`;
const NameText = styled.span`
    display: block;
    font-family: 'Montserrat';
    font-size: 38px;
    font-weight: bold;
    color: #49515c;
`;
const ProfessionText = styled.span`
    display: block;
    font-size: 24px;
    color: #74808d;
    text-transform: capitalize;
`;
const ButtonsContainer = styled.div`
    & > * + * {
        margin-left: 10px;
    }
`;

export default class Header extends PureComponent {
    render() {
        return (
            <StyledHeader>
                <Content>
                    <img src={profile} />
                    <InfoContainer>
                        <NameText>James Lee</NameText>
                        <ProfessionText>Web app developer</ProfessionText>
                        <ButtonsContainer>
                            <ButtonIcon icon="fab fa-twitter" />
                            <ButtonIcon icon="fab fa-google-plus-g" />
                            <ButtonIcon icon="fab fa-linkedin-in" />
                            <ButtonIcon icon="fab fa-github" />
                            <ButtonIcon icon="fab fa-yandex-international" />
                        </ButtonsContainer>
                    </InfoContainer>
                    <Button icon="fas fa-paper-plane">Contact me</Button>
                </Content>
            </StyledHeader>
        );
    }
}
