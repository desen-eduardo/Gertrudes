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
            max-width: 345px;
            background: #fff;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 20px 30px;
            margin-top: 30px;
            
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

