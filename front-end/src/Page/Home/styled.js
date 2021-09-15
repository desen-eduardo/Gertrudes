import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 0 30px;

    .area-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .box-area{
            max-width: 315px;
            background: #fff;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 20px 30px;
            margin-top: 30px;
            
            .area-price{
                font-size: 1.3rem;
                text-align: center;
                margin: 10px 0px;
            }

            .area-add{
                width:100%;
                button{
                    width:100%;
                    height:35px;
                    color: #fff;
                    background: linear-gradient(to top, rgb(86, 171, 47), rgb(168, 224, 99));
                    border: 1px solid #fff;
                    border-radius: 5px;
                    &:hover{
                        background: rgb(86, 171, 47);
                    }
                }
            }
        }
    }
`;

export const Title = styled.div`
    width:100%;
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 15px;
`;

