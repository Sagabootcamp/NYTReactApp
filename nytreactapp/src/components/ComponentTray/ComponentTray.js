import React, { Component } from 'react';
import API from "../../utils/API.js";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Result from "../Result/Result";
import Saved from "../Saved/Saved";

class ComponentTray extends Component {

  state = {
      searchString: "president",
      startDate: "20170305",
      endDate: "20170503",
      results:[]
  }

  onSubmit = (e) => {
    e.preventDefault();
    API.search(this.state.searchString, this.state.startDate, this.state.endDate)
       .then((nyres) => {
        //  this.setState.results = nyres.data.response.docs;
        console.log(nyres.data.response.docs);
        this.setState({
          results: nyres.data.response.docs
        })
       });
    console.log("results from result object");
    console.log(this.state.results);
  }
  
  render() {
    return (
      <div className="CompTray">
        <Header />
        <Search 
          searchString = {this.state.searchString}
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          onSubmit = {this.onSubmit}
        />
        <Result 
          displayResult = {this.state.results}
        />
        <Saved />
      </div> 
     
    );
  }
}

export default ComponentTray;