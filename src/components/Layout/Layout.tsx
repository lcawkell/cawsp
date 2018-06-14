import * as React from 'react';
import * as styles from './Layout.css';

import Logo from '../Logo';
//import Menu, { MenuItem } from '../Menu';
import Menu, { MenuItem } from '../Menu';
import MobileMenu from '../MobileMenu';

export interface LayoutProps {
    history:any
}

export default function Layout(ChildComponent:any){
    return class WrappingLayout extends React.Component <LayoutProps, any> {

        constructor(props:LayoutProps) {
            super(props);

            this.state = {
                menuOpen: false
            };
        }

        setMenuOpen = (menuOpen:boolean) => {
            this.setState({menuOpen});
        }

        toggleMenuOpen = () => {
            this.setState({menuOpen:!this.state.menuOpen});
        }

        render(){
            return (
                <div>
                    <div id='heading' className={styles.flexHeading}>
        
                        <MobileMenu onClick={this.toggleMenuOpen} open={this.state.menuOpen} />

                        <Logo onClick={()=>this.props.history.push('/')} />

                        <Menu open={this.state.menuOpen} >
                            <MenuItem onClick={()=>{this.props.history.push('/')}}>Home</MenuItem>
                            <MenuItem onClick={()=>{this.props.history.push('About')}}>About</MenuItem>
                            <MenuItem onClick={()=>{this.props.history.push('Playground')}}>Playground</MenuItem>
                        </Menu>
                        
                    </div>

                    <div id="content" className={styles.flexContent}>
                    
                        <ChildComponent />
                    
                    </div>
                </div>
            );
        }
    }
}