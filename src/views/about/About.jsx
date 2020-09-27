import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Breakpoints } from '../../constants';
import Header from './header/Header.jsx';
import AsideInfo from './aside/info/AsideInfo.jsx';
import AsideSkills from './aside/skills/AsideSkills.jsx';
import SectionAboutMe from './section/about-me/SectionAboutMe.jsx';
import SectionLatestProjects from './section/latest-projects/SectionLatestProjects.jsx';
import latestProjectsStore from './section/latest-projects/store/latestProjectsStore.js';

const spacing = '20px';

const Content = styled.div`
    display: flex;
    padding: ${spacing} 0;
    margin: 0 auto;
    max-width: ${Breakpoints.DESKTOP};

    @media (max-width: ${Breakpoints.DESKTOP}) {
        flex-direction: column;
        padding: ${spacing};
    }
`
const SectionContainer = styled.div`
    flex: 1 1 0;
    padding: 0 ${spacing} 0 0;

    & > * + * {
        margin-top: ${spacing};
    }

    @media (max-width: ${Breakpoints.DESKTOP}) {
        padding: 0 0 ${spacing} 0;
    }
`;
const StyledAside = styled.aside`
    flex: 0 0 auto;
    width: 35%;

    & > * + * {
        margin-top: ${spacing};
    }

    @media (max-width: ${Breakpoints.DESKTOP}) {
        width: auto;
    }
`;

export default class About extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <Content>
                    <SectionContainer>
                        <SectionAboutMe />
                        <Provider store={latestProjectsStore}>
                            <SectionLatestProjects />
                        </Provider>
                    </SectionContainer>
                    <StyledAside>
                        <AsideInfo />
                        <AsideSkills />
                    </StyledAside>
                </Content>
            </>
        );
    }
}
