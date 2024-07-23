import * as React from 'react';
import ButtonVis from "../../components/ButtonVis";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LandingPage() {

    const visImg = {
        border: "solid px #eee",
        height: "180px",
        boxShadow: "4px 4px 10px #ddd",
        marginLeft: "5px",
        marginRight: "5px",
        borderRadius: "50%"
    }


    return (

        <Container
            sx={{
                mt: 3,
                mb: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#FCF3E6',
            }}
        >

            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: '#FCF3E6',
                    opacity: 0.5,
                    zIndex: -1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{margin: '50px'}}></div>
                <Typography variant="h3" component="h3">
                    <b> NetPanorama Blog </b> <br/>
                    A Network Visualization Story telling tools
                </Typography>

                <div style={{margin: '50px'}}></div>

                <div id="vistiles" className="visTiles-0-1-4"
                     style={{
                         display: "flex", "flex-wrap": "wrap",
                         maxWidth: "1200px",
                         marginBottom: "50px",
                         flexDirection: "row",
                         justifyContent: "center",
                         marginLeft: '10%'
                     }}
                >

                    <img src="/thumbnails/nodelink.png" style={visImg}/>
                    <img src="/thumbnails/matrix.png" style={visImg}/>
                    <img src="/thumbnails/arcMatrix.png" style={visImg}/>
                    <img src="/thumbnails/timearcs.png" style={visImg}/>
                    <img src="/thumbnails/arcDiagram.png" style={visImg}/>
                    <img src="/thumbnails/adjacencyNodeList.png" style={visImg}/>
                    <img src="/thumbnails/adjacencyLinkList.png" style={visImg}/>
                    <img src="/thumbnails/scatterplot.png" style={visImg}/>
                    <img src="/thumbnails/map.png" style={visImg}/>

                </div>


                <ButtonVis/>

            </Box>


        </Container>

    );
}

export default LandingPage;
