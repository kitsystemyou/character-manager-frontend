import React from 'react'
import { useParams } from 'react-router-dom';
import './top.css'

const oauth_twitter="http://localhost:5000/oauth/connect"

const Top = () => {
    const params = useParams();
    console.log(params)
    console.log(oauth_twitter)

    if (params["name"]==="name" && params["desc"]==="desc") {
    return (
    <>
        <h1>Login Page</h1>
        <h2><a href={oauth_twitter} className="link">Login with Twitter</a></h2>
    </>
    )
    } else{
        return <>
            <h1>{params["name"]}</h1>
            <h2>{params["desc"]}</h2>
        </>
    }

}

export default Top