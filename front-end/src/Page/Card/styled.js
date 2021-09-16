import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 0 30px;

    .area-container{
        width: 100%;
        border-radius: 5px;
        background: #fff;
        box-shadow: 2px 2px 2px #333;
        box-sizing: border-box;
        padding: 20px 20px;
        overflow-x: auto;
        max-width: 1100px;
        table{
            width: 100%;
            border-collapse: collapse;
        }

        tr{
            height:35px;
        }

        tr th {
            background: #333;
            height: 30px;
            color: #fff;
        }

        tr td{
            text-align: center;
        }

        tr:nth-child(even){
            background: #ccc;
        }
    }
`;