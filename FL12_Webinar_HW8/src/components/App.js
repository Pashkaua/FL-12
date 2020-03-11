import React from 'react';
import Header from './Header';
import List from './RenderList';
import { useSelector } from 'react-redux'
import '../styles/App.css';


export default function App() {

  const courses = useSelector(state => state.listCourses)

  return (
    <div className="app">
      <Header />

      <List list={courses} />
    </div>
  )
}









