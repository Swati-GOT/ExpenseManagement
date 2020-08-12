import React, {Component} from 'react'

class DashboardComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row"></div>
                <div className="col-md-4">
                            <div className="card ">
                                <div className="card-header ">
                                    <h4 className="card-title">Email Statistics</h4>
                                    <p className="card-category">Last Campaign Performance</p>
                                </div>
                                <div className="card-body ">
                                    <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>
                                    <div className="legend">
                                        <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                                    <hr/>
                                    <div className="stats">
                                        <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
} 

export default  DashboardComponent;