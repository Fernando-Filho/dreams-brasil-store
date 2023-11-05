"use client"

import GlobalStyle from "./GlobalStyled"

export default function Head() {
    return(
        <head>
            <title>DreamsBrasil</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@200;300;500&display=swap" rel="stylesheet"/>
            <GlobalStyle/>
        </head>
    )
}