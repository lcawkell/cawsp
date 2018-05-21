import * as React from 'react';

import Logo from '../Logo';
//import Menu, { MenuItem } from '../Menu';
import Menu, { MenuItem } from '../Menu';

export interface LayoutProps {
}

export default function Layout(ChildComponent:any){
    return function WrappingLayout (props: LayoutProps) {

        let styles = {
            flexGrid: {
                display: 'flex' as 'flex',
                border: '0px solid blue',
                justifyContent: 'space-between'
            },
            heading: {
                borderBottom: '2px solid #fff',
                position: 'relative' as 'relative',
                background: '#000',
                color: '#fff'     
            },
            column: {

            }
        }

        return (
            <div>
                <div id='heading' style={{...styles.flexGrid, ...styles.heading}}>
    
                    <div style={{...styles.column}}>
                        <Logo />
                    </div>

                    <div style={{...styles.column}}>
                        <Menu>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Playground</MenuItem>
                        </Menu>
                        {/* <Menu>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Playground</MenuItem>
                        </Menu> */}
                    </div>
                    
                    {/* <MobileMenu /> */}

                </div>

                <div id="content" style={{...styles.flexGrid}}>
                
                    <ChildComponent />
                
                </div>
            </div>
        );
    }
}