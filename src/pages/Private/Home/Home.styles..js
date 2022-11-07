import styled from 'styled-components';

export const ContentHome = styled.section`
    .circle {
        position: absolute;
        right: -180px;
        top: -180px;
        width: 400px;
        height: 400px;
        position: fixed;

        border-radius: 50%;
        z-index: -1;

        background: #f8e192;
    }
    .circle2 {
        position: absolute;
        left: -150px;
        top: 300px;
        width: 400px;
        height: 400px;
        position: fixed;

        border-radius: 50%;
        z-index: -1;

        background: rgba(47, 203, 252, 0.3);
    }
    .saldo_container {
        margin-top: 40px;
        display: flex;
        height: 80px;
        width: 160px;
        margin: auto;
        justify-content: center;
        align-content: center;
        align-self: center;
        border-radius: 12px;
        background-color: blue;
        color: white;
    }

    .saldo {
        display: flex;
        justify-content: center;
        align-content: center;
        margin-top: 10%;

        color: white;

        font-size: 40px;
    }

    .buttons {
        margin-top: 50px;
    }
    .buttons button {
        background: blue;
        color: white;
        font-weight: 600;
        border-color: white;
        margin: 10px;
        padding: 1rem;
    }
`;