import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import successStories from '../successStories';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import estrella from '../assets/estrella.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 30,
        position: 'relative',
        width: '100%',
        marginBottom: 100,
    },
    arrowRight: {
        position: 'absolute',
        right: 0,
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
    },
    arrowLeft: {
        position: 'absolute',
        left: 0,
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
    },
    slide: {
        opacity: 0.5,
        transitionDuration: '1s ease',
        transform: 'scale(0.5)',
    },
    slideActive: {
        opacity: 1,
        transitionDuration: '1s',
    },
    carouselWrapper: {
        position: 'relative',
    },
    carouselContainer: {
        overflowX: 'hidden',
    },
    carouselItem:{
        maxWidth: 300,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    logo: {
        width: 30,
        marginRight: 10,
    },
  }));

const SuccessStories: React.FC = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if(current === successStories.length - 1 ){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    };
    const prevSlide = () => {
        if(current === 0){
            setCurrent(successStories.length - 1)
        } else {
            setCurrent(current - 1)
        }
    };

    return(
        <>
        <div id="stories" className={classes.title}>
            <img
                className={classes.logo}
                src={ahoaraLegalLogo}
                alt="Ahora legal logo rojo"
            />
            <Typography variant="h4" noWrap>
                <strong>Consultas Resueltas</strong>
            </Typography>
        </div>
            <Grid
              container
              className={classes.root}
              alignItems="center"
              justify="center"
              wrap="nowrap"
            >
              <NavigateBeforeIcon className={classes.arrowLeft} onClick={prevSlide} />
              {successStories.map((slide, index) => {
                    return(
                        <Grid
                            item
                            key={index}
                            className={index === current ? classes.slideActive : classes.slide}
                        >
                             <Card className={classes.carouselContainer}>
                                <CardContent className={classes.carouselItem}>
                                    <Grid container justify="center">
                                    <img src={estrella} alt="estrella" />
                                    <img src={estrella} alt="estrella" />
                                    <img src={estrella} alt="estrella" />
                                    </Grid>
                                    <Typography ><strong>{slide.title}</strong></Typography>
                                    <Typography>{slide.subtitle}</Typography>
                                    <Typography><strong>{slide.hashtag}</strong></Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )})
                }
              <NavigateNextIcon className={classes.arrowRight} onClick={nextSlide} />
            </Grid>
    </>
    )
};

export default SuccessStories;
