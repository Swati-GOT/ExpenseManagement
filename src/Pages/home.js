import React, {Component} from 'react'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
import DashboardComponent from './dashboard'
import TodoList from '../TodoList'


class HomeComponent extends React.Component{

    render(){
        return(
            <div class="wrapper">
            <Menu />
            <div class="main-panel">
                <Header />
                    <div class="content">
                    <Route path="/" component={DashboardComponent}/>
                    <Route path="/todoList" component={TodoList}/>
                    </div>
                <Footer />
            </div>
        </div>
        )
        
    }
}

export default HomeComponent;