import React from 'react';

import Button from './Elements/Button';
import Main from './Elements/Main';
import Header from './Elements/Header';
import Body from './Elements/Body';
import H1 from './Elements/H1';
import LoadingSlider from './Elements/LoadingSlider';

export default function StyledComponents () {

    return (
        <Main>
            <Header>
                <Button>Обычная</Button>
                <Button primary>C пропсами</Button>
            </Header>
            <Body>
                <H1>Заголовок</H1>
                <LoadingSlider />
            </Body>
        </Main>
    );
}