import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const ButtonVis = () => {
    const buttonStyles = {
        background: 'orange',
        color:'black',
        borderRadius: '5%',
        padding: '10px 20px',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
            backgroundColor: 'darkorange',
            color: 'white',
        },
    };

    const navigate = useNavigate()


    const handleEnterApp = () => {
        // Handle navigation to the main page
        console.log('Entering Main Page');
        //alert("a");
        navigate("/main");
    };

    return (


            <Button
                variant="contained"
                style={buttonStyles}
                onClick={() => handleEnterApp()}
            >
                <b> Create your visualization stories </b>
            </Button>



    );
};

export default ButtonVis;