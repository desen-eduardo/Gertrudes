import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
    }

    html,body {
        background: #ccc;
        font-family: 'Roboto', sans-serif;
    }
`;