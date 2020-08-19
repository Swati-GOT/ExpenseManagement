import React, {Component} from 'react'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
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
                        <li className="nav-item">
                            <Link className="nav-link"  to={`/`}  activeclassname="active">
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Dashboard</p>
                            </Link>
                            </li>
                            <li className="nav-item" >
                            <Link className="nav-link " to={`/todoList`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>TodoList</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/income`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Income</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/addCategory`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Add Category</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/viewCategory`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Category</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/addExpense`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Add Expense</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/ViewExpense`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Expense</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/calculator`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Use Calculator</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/currencyConverter`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Use Currency</p>
                            </Link>
                            </li>

                            <li className="nav-item" >
                            <Link className="nav-link " to={`/graph`}  activeclassname="active"  >
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>View Graph</p>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                    <div className="main-panel">
                        <Header />
                            <div className="content">
                            <Switch>
                                <Route exact path="/" component={DashboardComponent}/>
                                <Route path="/todoList" component={TodoList}/>
                                <Route path="/income" component={IncomeComponent}/>
                                <Route path="/addCategory" component={AddCategory}/>
                                <Route path="/viewCategory" component={ViewCategory}/>
                                <Route path="/addExpense" component={AddExpense}/>
                                <Route path="/viewExpense" component={ViewExpense}/>
                                <Route path="/calculator" component={CalculatorComponent}/>
                                <Route path="/currencyConverter" component={CurrencyConverter}/>
                                <Route path="/graph" component={GraphComponent}/>
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
