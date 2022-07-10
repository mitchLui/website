import './arrow.scss';
import React from 'react';

type ArrowProps = {
    text: string;
}

// eslint-disable-next-line no-undef
export const Arrow = ({ text }: ArrowProps): React.ReactElement =>
    <div className={'arrow-container'}>
        <div className={'arrow'}/>
        <span className={'arrow-text'}>{text}</span>
    </div>;
