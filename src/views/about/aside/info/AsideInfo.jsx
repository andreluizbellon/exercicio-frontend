import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Card, IconList, Link } from '../../../../components';

export default class AsideInfo extends PureComponent {
    render() {
        return (
            <Card>
                <IconList>
                    <IconList.Item icon="fas fa-fw fa-map-marker-alt">San Fransisco, US</IconList.Item>
                    <IconList.Item icon="far fa-fw fa-envelope"><Link href="#">jameslee@website.com</Link></IconList.Item>
                    <IconList.Item icon="fas fa-fw fa-link"><Link href="#">http://www.website.com</Link></IconList.Item>
                </IconList>
            </Card>
        );
    }
}
