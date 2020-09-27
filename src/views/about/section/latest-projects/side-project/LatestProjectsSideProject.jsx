import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph, Link } from '../../../../../components';
import { Breakpoints } from '../../../../../constants';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px 0;

    @media (max-width: ${Breakpoints.DESKTOP}) {
        flex-direction: column;
    }
`;
const ProjectImage = styled.img`
    flex: 0 0 auto;
    width: 180px;
    padding: 0 20px 0 0;

    @media (max-width: ${Breakpoints.DESKTOP}) {
        width: 100%;
        padding: 0 0 20px 0;
    }
`;
const DescriptionContainer = styled.div`
    flex: 1 1 0;
`;
const ProjectTitle = styled.span`
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: bold;
    color: #74808d;
`;

export default class LatestProjectsSideProject extends PureComponent {
    static propTypes = {
        project: PropTypes.object,
    }
    
    render() {
        const {
            project: {
                title,
                picture,
                description,
                url,
            },
        } = this.props;

        return (
            <Container>
                <ProjectImage src={`../public/img/${picture}`} />
                <DescriptionContainer>
                    <ProjectTitle>{title}</ProjectTitle>
                    <Paragraph>{description}</Paragraph>
                    <Link href={url} showIcon>Find out more</Link>
                </DescriptionContainer>
            </Container>
        );
    }
}
