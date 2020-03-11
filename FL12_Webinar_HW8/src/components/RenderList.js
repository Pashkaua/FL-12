import React, { Component } from 'react'
import Buttons from './Buttons';

export default class RenderList extends Component {

    show = (e) => {

        e.target.nextSibling.style.display = "block"

    }

    render() {
        const { list } = this.props;
        const listItem = list.map((item) => {

            return (
                <li key={item.id} data-id={item.id}>
                    <span className='date'>{item.date}</span>
                    <p className='title'>{item.title}</p>
                    <p className='description'>{item.description}</p>
                    <span className='duration'>{item.duration}</span>
                    <button className='buttons' onClick={this.show} >...</button>
                    <Buttons />
                </li>
            )
        })
        return (
            <ul>
                {listItem}
            </ul>
        )
    }
}
