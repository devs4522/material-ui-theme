import React from 'react'

import { styled } from '@material-ui/styles'
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button }     from '@material-ui/core'

const StyledCardMedia = styled(CardMedia)({
    height: 140,
});

const CardTitle = styled(Typography)(({theme }) => ({
    color: theme.palette.primary.main
}));

const CardText = styled(Typography)(({theme }) => ({
    color: theme.palette.secondary.main
}));

const StyledCard = styled(Card)(({theme})=>({
    margin: theme.spacing(3),
    width: 345,
}));

const Item = () => {
return (
    <StyledCard>
        <CardActionArea>
        <StyledCardMedia
            image="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
            title="Surprised monkey"
        />
        <CardContent>
            <CardTitle gutterBottom variant="h5" component="h2">
            OMG it's a Monkey!
            </CardTitle>
            <CardText variant="body2" component="p">
            Monkey is a common name that may refer to groups or species of mammals.
            The term is applied descriptively to groups of primates.
            </CardText>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary" href="https://unsplash.com/photos/Z05GiksmqYU">
            See it on Unsplash
        </Button>
        </CardActions>
    </StyledCard>
  )
}
export default Item