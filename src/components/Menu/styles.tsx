import styled, { css } from 'styled-components';

interface MenuProps {
    shrink: boolean;

}

export const Container = styled.div<MenuProps>`
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);

    background-color: #FFF;

    height: 100%;
    ${props => props.shrink ? css`width: 60px !important;` : css`width: 400px !important;`}

    div.button-menu-control {
        padding: 15px;

        border-bottom: 1px solid #e5e5e5;

        width: 100%;

    }

    .hover:hover {
        cursor: pointer;
        opacity: .6;

    }

    .hover:active {
        transform: scale(.95);

    }

`;
