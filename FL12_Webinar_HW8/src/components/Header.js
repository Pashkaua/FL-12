import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const item = useSelector(state => state.listCourses)

    const search = (e) => {
        e.preventDefault();

        const filtered = item.filter((element) => {
            const regex = RegExp("^" + e.target.value.trim() + "");
            return regex.test(element.title)
        })
        history.push({
            pathname: '/',
            list: { filtered }
        }
        )
    }
    return (
        <div>
            <div className="header">
                <input id="inp-search" type="text" onChange={search} placeholder="search" />

                <Link id="link-add" to='/add'>Add course</Link>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Header;
