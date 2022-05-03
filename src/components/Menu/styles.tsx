import styled, { css } from 'styled-components';

interface MenuProps {
    shrink: boolean;

}

export const Container = styled.div<MenuProps>`
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);

    background-color: #FFF;

    height: 100%;
    ${props => props.shrink ? css`width: 60px !important;` : css`width: 400px !important;`}

    overflow: hidden;

    div.button-menu-control {
        padding-left: 15px;
        height: 50px;

        border-bottom: 1px solid #e5e5e5;

        width: 400px;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    div.button-file-control {
        display: flex;

        justify-content: flex-end;
        align-items: center;

        width: 80%;
        height: 100%;

        padding-right: 0;

        cursor: pointer;

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 100%;
            width: 150px;
        
            p {
                margin: 0;
                margin-left: 10px;

            }

        }

        div:not(:last-child) {
            justify-content: flex-end;

        }

        div:active {
            p, svg {
                transform: scale(.95);

            }

        }

    }

    .hover:hover {
        cursor: pointer;
        opacity: .6;

    }

    .hover:active {
        transform: scale(.95);

    }

`;
