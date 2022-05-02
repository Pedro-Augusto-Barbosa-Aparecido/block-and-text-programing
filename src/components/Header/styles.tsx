import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    background-color: #EEE;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;

    font-family: "Roboto", sans-serif;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, .5);
    
    h1 {
        font-weight: 400;
        font-size: 25px;

        /* height: 100%; */
        width: 200px;

        margin-bottom: 0;

        vertical-align: middle;

    }

    a {
        color: #000;

        text-decoration: none;

        /* height: 100%; */
        width: 200px;

        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        vertical-align: middle;

    }

    a p {
        margin: 0;
        text-align: center;

        width: 100px;

        overflow: hidden;
        text-overflow: ellipsis;

    }

    div.button {
        margin: 0;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 140px;
        height: 100%;

    }

    div.button:hover {
        cursor: pointer;

        background-color: #e3e3e3;

    }

    /* a:not(:first-child) {
        padding-left: 20px;

    } */

`;
