import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({ boardList, setBoardList }) => {
    // const LocalList = JSON.parse(localStorage.getItem('list'));
    return (
        <ul>
            {
                boardList.map((it, idx) => {
                    return (
                        <li key={idx}>
                            <div>{idx + 1} </div>
                            <div>{it.name} </div>
                            <div>
                                <Link to={'/view/' + it.id}>
                                    {it.title}
                                </Link>
                            </div>
                            <div>{it.content} </div>
                            <div>{it.date} </div>
                        </li>
                    )
                }).reverse()
            }
        </ul>
    )
}

export default List