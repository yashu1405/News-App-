import './App.css';
import { Routes,Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  // state ={
  //   progress:0
  // }
  // setProgress = (progress) =>{
  //   this.setState({progress : progress})
  // }
  render() {
    return (
      <div>
        <Navbar/>
        {/* <LoadingBar color='#f11946'progress={this.state.progress}/> */}
        <Routes>
          <Route path="/" element={<News key="general" category="general"/>}></Route>
          <Route path="/business" element={<News key="busiess" category="business"/>}></Route>
          <Route path="/health" element={<News key="health" category="health"/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
          <Route path="/science" element={<News key="science" category="science"/>}></Route>
          <Route path="/technology" element={<News key="technology" category="technology"/>}></Route>
          <Route path="/sports" element={<News key="sports" category="sports"/>}></Route>
        </Routes>
        {/* <News category="health"/> */}
        {/* News App  no need*/} 
      </div>
    )
  }
}

