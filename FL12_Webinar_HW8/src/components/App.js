import React from 'react';
import Header from './Header';
import List from './RenderList';
import { useSelector } from 'react-redux'
import '../styles/App.css';

import { useLocation } from "react-router-dom";

export default function App() {

  const data = useLocation();
  const courses = useSelector(state => state.listCourses)

  return (
    <div className="app">
      <Header />

      <List list={data.list ? data.list.filtered : courses} />
    </div>
  )
}









