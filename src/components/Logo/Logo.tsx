import * as React from 'react';

export interface LogoProps {
}

export default function Logo (props: LogoProps) {
    let styles= {
        root: {
            fontFamily: 'Indie Flower' as 'Indie Flower',
            fontSize: '2.5em',
            width: 'auto' as 'auto',
            display: 'inline-block' as 'inline-block',
            userSelect: 'none' as 'none',
            border: '0px solid red',
            margin: '5px 10px'
        }
    }
    return (
      <div id="logo" style={{...styles.root}}>Cawsp</div>
    );
}
