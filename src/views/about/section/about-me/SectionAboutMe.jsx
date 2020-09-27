import React, { PureComponent } from 'react';
import { Card, Paragraph } from '../../../../components';

export default class SectionAboutMe extends PureComponent {
    render() {
        return (
            <section>
                <Card title="About Me">
                    <Paragraph>
                        Write a brief intro about yourself. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec scelerisque ex. Vestibulum pellentesque volutpat porttitor. Nullam tincidunt nibh sed convallis posuere.
                    </Paragraph>
                    <Paragraph>
                        It's a good idea to include your personal interest and hobbies as well. Integer nec lacinia nunc, vel lacinia dui. Maecenas risus purus, lacinia et tellus sed, convallis placerat orci. Ut ut sapien ac purus euismod sagittis in non enim. Maecenas ac purus non tortor vehicula malesuada. In a ultrices mauris. Pellentesque id massa eu nibh egestas scelerisque.
                    </Paragraph>
                </Card>
            </section>
        );
    }
}
