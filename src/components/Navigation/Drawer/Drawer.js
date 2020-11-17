import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

class Drawer extends Component {

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.props.onClose}
                    >                                
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() { 
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            {to: '/', label: 'List of Tests', exact: true}]

        
        console.log('Auth: ', this.props.isAuthenticated)
        
        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create test', exact: false})
            links.push({to: '/logout', label: 'Logout', exact: false})

        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }



        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClose={this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}

export default Drawer