import React, { Component } from 'react';
import "./Search.css";
class Search extends Component {
  
  render() {
    return (
        <div className="Search">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Topic</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Start Date</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>End Date</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <button onClick={this.props.onSubmit} type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div> 
                </div>
        </div> 
           
    );
  }
}

export default Search;
