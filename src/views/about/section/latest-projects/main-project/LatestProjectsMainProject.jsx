import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Paragraph } from '../../../../../components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #f1f2f1;
`;
const ProjectSubTitle = styled.span`
    display: block;
    margin-bottom: 10px;
    color: #74808d;
`;
const ProjectTitle = styled(ProjectSubTitle)`
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: bold;
`;
const ProjectImage = styled.img`
    width: 100%;
`

export default class LatestProjectsMainProject extends PureComponent {
    static propTypes = {
        project: PropTypes.object.isRequired,
    }
    
    render() {
        const {
            project: {
                title,
                subtitle,
                picture,
                description,
            },
        } = this.props;

        return (
            <Container>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubTitle>{subtitle}</ProjectSubTitle>
                <ProjectImage src={`../public/img/${picture}`} />
                <Paragraph>{description}</Paragraph>
                <Button icon="far fa-thumbs-up" info>Back my Project</Button>
            </Container>
        )
    }
}
