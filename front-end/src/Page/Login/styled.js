import styled from "styled-components";

export const Main = styled.div`
    width:100%;
    box-sizing: border-box;
    padding: 0px 20px;
`;

export const Box = styled.div`
    max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 30px;
    background: #333;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #000;

    .alert{
        width:100%;
        height: 45px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 5px;
    }

    .alert-danger{
        border-radius: 5px;
        border: 1px solid #ff0000;
        background: linear-gradient(to top, rgb(203, 45, 62), rgb(239, 71, 58));
        color:#fff;
    }

    .form-group{
        width:100%;
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;

        label{
            color:#fff;
            padding-bottom: 5px;
        }

        input[type=e-mail],input[type=password] {
            width:100%;
            height:40px;
            border-radius: 5px;
            box-sizing: border-box;
            padding-left: 10px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 1rem;
            color: #666;
        }

        input[type=e-mail]:disabled,input[type=password]:disabled{
            color:#fff;
        }
    }
    .main-button{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        .btn {
            width:200px;
            height:45px;
            border: none;
            border-radius: 5px;
        }

        .btn-success{
            font-size: 1rem;
                color: #fff;
                background: linear-gradient(to top, rgb(86, 171, 47), rgb(168, 224, 99));
            }
    }
`;