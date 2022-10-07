import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({ boardList, setBoardList }) => {

    return (
        <div className='BoardList'>
            <table>
                <thead>
                    <tr>
                        <td>no</td>
                        <td>title</td>
                        <td>name</td>
                        <td>date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((it, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1} </td>
                                    <td>
                                        <Link to={'/view/' + it.id}>
                                            {it.title}
                                        </Link>
                                    </td>
                                    <td>{it.name}  </td>
                                    <td>{it.date}  </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List