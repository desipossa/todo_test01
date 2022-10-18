import React, { useEffect, useState } from 'react';

const userData = [
    { id: 1, usserId: "admin", pw: "12345" }
]

const Login = () => {
    const [user, setUser] = useState([]);

    const [userInput, setUserInput] = useState({});
    const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem("loginUser") || []));


    const useInputHandler = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        })
    }


    //로컬스토리지에 보관함... 로그인 유지용...
    useEffect(() => {
        localStorage.setItem('loginUser', JSON.stringify(loginUser))
    }, [loginUser])


    // const checkId = (adm) => {
    //     const userAdmin = userData.find(it => it.usserId === adm)
    // }
    return (
        <>
            {loginUser[0]?.id !== "admin"
                ?
                <div>
                    <label>아이디 : <input name='id' onChange={useInputHandler} value={userInput.id || ''} /></label>
                    <label>아이디 : <input name='pw' onChange={useInputHandler} value={userInput.pw || ''} /></label>
                    <button onClick={
                        () => {
                            setLoginUser([userInput]);
                        }
                    }>login</button>
                </div>
                :
                <div>{loginUser[0].id} 님 안녕하세용... <button onClick={
                    () => {
                        setLoginUser([]);
                    }
                }>LOGOUT</button></div>
            }
            {
                console.log(userInput.id, userInput.pw, loginUser[0]?.id, loginUser)
            }
        </>


    )
}

export default Login