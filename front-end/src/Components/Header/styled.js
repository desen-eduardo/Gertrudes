import styled from 'styled-components';

export const HeaderPage = styled.div`
    width:100%;
    height: 60px;
    background: #333;
    
    .container{
        max-width: 1100px;
        width:100%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: space-between;

        h1{
            font: 1.1rem;
            font-weight: 300;
        }
        
        .menu ul{
            display: flex;
            li{
                margin-left: 25px;
                .unlink{
                    border: none;
                    color: #fff;
                    font-size: 1.0rem;
                    background: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }

                a{
                    color:#fff;
                    font-size: 1.0rem;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;