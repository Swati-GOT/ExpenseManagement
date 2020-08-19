import React, {Component} from 'react'
import {BrowserRouter as Router,Switch,Link,Route,NavLink} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import DashboardComponent from './dashboard'
import TodoList from '../TodoList'
import IncomeComponent from './Income'
import AddCategory from './addCategory'
import ViewCategory from './viewCategory'
import GraphComponent from './graph'
import CalculatorComponent from './calculator'
import CurrencyConverter from './currencyConverter'
import ViewExpense from './viewExpense'
import AddExpense from './addExpense'

class Menu extends React.Component{

    render(){
        return(
            <Router>
                <div className="wrapper">
                <div className="sidebar" data-image="../public/assets/img/sidebar-5.jpg">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a className="simple-text">Expense Tracker</a>
                            {/* <a href="http://www.creative-tim.com" className="simple-text">
                                Creative Tim
                            </a> */}
                        </div>
                        <ul className="nav">
                        <li >
                            <NavLink className="nav-link" exact activeClassName="navbar__link--active" to={`/`}  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Dashboard</p>
                            </NavLink>
                            </li>
                            {/* <li  >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/todoList`}    >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>TodoList</p>
                            </NavLink>
                            </li> */}

                            <li  >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/income`}   >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Income</p>
                            </NavLink>
                            </li>

                            <li  >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/addCategory`}    >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Add Category</p>
                            </NavLink>
                            </li>

                            <li  >
                            <NavLink className="nav-link" activeClassName="navbar__link--active"to={`/viewCategory`}  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Category</p>
                            </NavLink>
                            </li>

                            <li  >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/addExpense`}  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Add Expense</p>
                            </NavLink>
                            </li>

                            <li >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/ViewExpense`}   >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Expense</p>
                            </NavLink>
                            </li>

                            <li >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/calculator`}   >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Use Calculator</p>
                            </NavLink>
                            </li>

                            <li >
                            <NavLink className="nav-link" activeClassName="navbar__link--active" to={`/currencyConverter`}   >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Use Currency</p>
                            </NavLink>
                            </li>

                            <li >
                            <NavLink className="nav-link" activeClassName="navbar__link--active"to={`/graph`}  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Graph</p>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
                    <div className="main-panel">
                        <Header />
                            <div className="content">
                            <Switch>
                                <Route exact path="/" component={DashboardComponent}/>
                                {/* <Route path="/todoList" component={TodoList}/> */}
                                <Route path="/income" component={IncomeComponent}/>
                                <Route path="/addCategory" component={AddCategory}/>
                                <Route path="/viewCategory" component={ViewCategory}/>
                                <Route path="/addExpense" component={AddExpense}/>
                                <Route path="/viewExpense" component={ViewExpense}/>
                                <Route path="/calculator" component={CalculatorComponent}/>
                                <Route path="/currencyConverter" component={CurrencyConverter}/>
                                <Route path="/graph" component={GraphComponent}/>
                                <Route path="/updateCategory/:id" component={AddCategory}/>
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

