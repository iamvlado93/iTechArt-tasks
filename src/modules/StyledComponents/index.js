import React from 'react';

import ButtonComp from './Elements/Button';
import MainComp from './Elements/Main';
import HeaderComp from './Elements/Header';
import BodyComp from './Elements/Body';
import H1Comp from './Elements/H1';
import LoadingSliderComp from './Elements/LoadingSlider';

export default function StyledComponents () {

    return (
        <MainComp>
            <HeaderComp>
                <ButtonComp>Обычная</ButtonComp>
                <ButtonComp primary>C пропсами</ButtonComp>
            </HeaderComp>
            <BodyComp>
                <H1Comp>Заголовок</H1Comp>
                <LoadingSliderComp />
            </BodyComp>
        </MainComp>
    );
}