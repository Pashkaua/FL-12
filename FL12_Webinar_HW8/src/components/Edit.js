import React from 'react'
import Form from './Form'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Edit() {
    let data = useLocation();
    const item = useSelector(state => state.listCourses)

    const editItem = item.filter(el => {
        return +el.id === +data.id;
    })
    return (
        <Form item={editItem} />
    )
}

