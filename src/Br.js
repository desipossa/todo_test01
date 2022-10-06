import React from 'react'

const d = [
    { con: "<div>jjj</div>", br: "우리나라 대한민국 \n 가자 기영이 순이야..." }
]

const Br = () => {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: d[0].con }}></div>
            <div style={{ whiteSpace: "pre-line" }}>{d[0].br}</div>
        </>

    )
}

export default Br