import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import {CardActions, CardMedia} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import matrixImage from './../../thumbnails/matrix.png';
import nodeLink from './../../thumbnails/nodelink.png';
import nodeLinkCircular from './../../thumbnails/nodelink_circular.png';


export default function SidePanel(){
    return(
        <Box style={{maxHeight: '100vh', overflow: 'auto'}}>
            <Grid style={{"padding":"10%"}}>
                <Card sx={{ maxWidth: 345 }}  style={{marginBottom:"10%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={matrixImage}
                        title="Matrix"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Matrix
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            June 5 2023, 14:45
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} style={{marginBottom:"10%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={nodeLink}
                        title="Matrix"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Matrix
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            June 5 2023, 14:45
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} style={{marginBottom:"10%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={nodeLinkCircular}
                        title="Matrix"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Matrix
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            June 5 2023, 14:45
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} style={{marginBottom:"10%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={nodeLinkCircular}
                        title="Matrix"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Matrix
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            June 5 2023, 14:45
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} style={{marginBottom:"10%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={nodeLinkCircular}
                        title="Matrix"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Matrix
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            June 5 2023, 14:45
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>

            </Grid>

        </Box>



    )
}