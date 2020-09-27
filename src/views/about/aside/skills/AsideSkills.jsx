import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Link, Paragraph, SkillBar } from '../../../../components';

export default class AsideSkills extends PureComponent {
    render() {
        return (
            <Card title="Skills">
                <Paragraph>
                    Intro about your skills goes here. Keep the list lean and only show your primary skillset.
                    You can always provide a link to your LinkedIn or Coderwall profile so people can get
                    more info there.
                </Paragraph>
                <SkillBar label="Python & Django" percentage={95} />
                <SkillBar label="Javascript & jQuery" percentage={95} />
                <SkillBar label="HTML5, CSS3, SASS & LESS" percentage={95} />
                <SkillBar label="Ruby on Rails" percentage={80} />
                <Link href="#" showIcon>More on Coderwall</Link>
            </Card>
        );
    }
}
