import React from 'react'
import { changeList, edit } from '../actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



export default function Form(props) {
    let history = useHistory();
    const dispatch = useDispatch();

    const addNewCourse = (event) => {
        event.preventDefault();

        const newCours = {
            date: event.target.date.value,
            title: event.target.title.value,
            description: event.target.description.value,
            duration: event.target.duration.value,
            authors: event.target.authors.value,
            id: props.item ? props.item[0].id : Date.now()
        }
        if (props.item) {
            dispatch(edit(newCours));

        } else {
            dispatch(changeList(newCours));
        }
        history.push("/");
    }
    return (
        <div className="form-block">
            <h1 className="form-header">{props.item ? "Edit Course" : "New Course"}</h1>

            <form onSubmit={addNewCourse}>
                <label htmlFor="title">Title*</label>
                <input id="title" name="title" type="text" defaultValue={props.item ? props.item[0].title : ""} required />

                <label htmlFor="description">  Description*</label>
                <textarea id="description" rows="4" name="description" type="text" defaultValue={props.item ? props.item[0].description : ""} required>
                </textarea>

                <div className="block-date">
                    <div className="form-left">
                        <label htmlFor="duration"> Duraduration*</label>
                        <input id="duration" name="duration" type="text" defaultValue={props.item ? props.item[0].duration : ""} required />


                        <label htmlFor="authors">Authors*</label>
                        <input id="authors" name="authors" type="text" defaultValue={props.item ? props.item[0].authors : ""} required />
                    </div>

                    <div className="form-right">
                        <label htmlFor="date">Date*</label>
                        <input type="date" id="date" name="date" defaultValue={props.item ? props.item[0].date : ""} />
                    </div>
                </div>

                <div className="form-btn">
                    <div>
                        <button className="btn-save" type="submit">Save</button>
                    </div>
                    <div>
                        <Link className="btn-cencel" to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
