import React from 'react'
import { useDispatch } from 'react-redux'
import { del } from '../actions'
import { useHistory } from 'react-router-dom';
import editLogo from '../../src/edit.svg'
import delLogo from '../../src/delete.svg'

export default function Buttons() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/edit',
            id: e.target.parentNode.parentNode.getAttribute("data-id")
        }
        )
    }

    const handleDelete = (event) => {
        event.preventDefault();
        const id = event.target.parentNode.parentNode.getAttribute("data-id");

        dispatch(del(id));
    }

    return (
        <div className="buttons-block" style={{ display: "none" }}>
            <button className="btn-delete" onClick={handleClick}>
                <img src={editLogo} className="btn-logo" alt="edit logo" />Edit</button>
            <button className="btn-delete" onClick={handleDelete}>
                <img src={delLogo} className="btn-logo" alt="delet logo" />Delete</button>
        </div>
    )
}
