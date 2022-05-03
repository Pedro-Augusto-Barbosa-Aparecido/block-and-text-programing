import styled, { css } from 'styled-components';

export type CodeContainerProps = {


};

export const CodeContainer = styled.div<CodeContainerProps>`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: calc(100vh - 80px);
    
    ul { 
        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 45px;

        list-style: none;

        padding: 0;
        margin: 0;

        margin-left: 7px;
        margin-top: 5px;

        li {
            display: flex;

            align-items: center;
            justify-content: center;

            text-align: center;

            width: auto;
            height: 45px;
            max-width: 250px;

            cursor: pointer;

            background-color: #e5e5e5;

            padding: 0 20px;
            
            border-left: 1px solid #e5e5e5;
            border-right: 1px solid #e5e5e5;
            border-top: 3px solid #0008;
            border-bottom: 1px solid #0008;

            p {
                margin: 0;
                padding: 0;

                margin-left: 5px;

                overflow: hidden;
                text-overflow: ellipsis;

                text-align: left;

                width: fit-content;
                max-width: 150px;
                white-space: pre;

            }

        }

        li:hover {
            background-color: #888;

        }
    
    }

    textarea {
        width: 60%;

        margin-left: 8px;

        outline: none;
        border: 0;

        resize: none;
        height: 100%;

        padding: 10px;
        white-space: nowrap;

    }

    .active {
        border-bottom: 0;
        background-color: #FFF;

    }

    .active:hover {
        background-color: #aaa;

    }

`;