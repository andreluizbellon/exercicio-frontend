import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components';
import LatestProjectsMainProject from './main-project/LatestProjectsMainProject.jsx';
import LatestProjectsSideProject from './side-project/LatestProjectsSideProject.jsx';

export default class SectionLatestProjects extends PureComponent {
    render() {

        const project = {
            title: 'Kickstarter - Potato salad app',
            subtitle: 'A mobile app to help you make delicious potato salad',
            picture: 'project-featured.jpg',
            description: 'You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus.',
            url: 'http://www.example.com',
        };
        const project2 = {
            title: 'Kickstarter - Potato salad app',
            subtitle: 'A mobile app to help you make delicious potato salad',
            picture: 'project-1.jpg',
            description: 'You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.',
            url: 'http://www.example.com',
        }

        return (
            <section>
                <Card title="Latest Projects">
                    <LatestProjectsMainProject project={project} />
                    <LatestProjectsSideProject project={project2} />
                    <LatestProjectsSideProject project={project2} />
                    <LatestProjectsSideProject project={project2} />
                </Card>
            </section>
        );
    }
}
