import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  {useTranslation} from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    links: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));


export default function ImgMediaCard({ imagen, titulo, descripcion, git, demo }) {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Proyecto"
                    height="180"
                    image={imagen}
                    title={titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.links}>
                <a href={git} target="_blank" style={{textDecoration: 'none'}}>
                    <Button color='primary' variant='contained'>
                        GitHub
                    </Button>
                </a>
                <a href={demo} target="_blank" style={{textDecoration: 'none'}}>
                    <Button color='primary' variant='contained'>
                        {t('card.demo')}
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}