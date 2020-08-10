import React, {Component} from 'react'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import DashboardComponent from './dashboard'
import TodoList from '../TodoList'

class Menu extends React.Component{
    render(){
        return(
            <Router>
                <div class="wrapper">
                <div class="sidebar" data-image="../public/assets/img/sidebar-5.jpg">
                    <div class="sidebar-wrapper">
                        <div class="logo">
                            <a href="http://www.creative-tim.com" class="simple-text">
                                Creative Tim
                            </a>
                        </div>
                        <ul class="nav">
                            <li class="nav-item active">
                                <Link to="/" >
                                <i class="nc-icon nc-chart-pie-35"></i>
                                <p>Dashboard</p>
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/todoList" >
                                <i class="nc-icon nc-notes"></i>
                                <p>TodoList</p>
                                </Link>
                            </li>
                            {/* <li>
                                <a class="nav-link" href="./table.html">
                                    <i class="nc-icon nc-notes"></i>
                                    <p>Table List</p>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="./typography.html">
                                    <i class="nc-icon nc-paper-2"></i>
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="./icons.html">
                                    <i class="nc-icon nc-atom"></i>
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="./maps.html">
                                    <i class="nc-icon nc-pin-3"></i>
                                    <p>Maps</p>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="./notifications.html">
                                    <i class="nc-icon nc-bell-55"></i>
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li class="nav-item active active-pro">
                                <a class="nav-link active" href="upgrade.html">
                                    <i class="nc-icon nc-alien-33"></i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                
                    <div class="main-panel">
                        <Header />
                            <div class="content">
                            <Switch>
                                <Route exact path="/" component={DashboardComponent}/>
                                <Route path="/todoList" component={TodoList}/>
                            </Switch>
                            
                            </div>  
                        <Footer />
                    </div>
                </div>
            </Router>
          
        )
    }
}

export default Menu;