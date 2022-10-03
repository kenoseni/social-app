import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import socialImage from "../../assets/imgs/social.jpg";
import auth from "../auth/auth-helper";
import { FindPeople } from "../user/FindPeople";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [defaultPage, setDefaultPage] = useState(false);

  useEffect(() => {
    setDefaultPage(auth.isAuthenticated());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          {!defaultPage && (
            <Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Home Page
              </Typography>
              <CardMedia
                className={classes.media}
                image={socialImage}
                title="Painted red"
              />
              <Typography
                variant="body2"
                component="p"
                className={classes.credit}
                color="textSecondary"
              >
                Photo by{" "}
                <a
                  href="https://unsplash.com/@timmarshall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tim Marshall
                </a>{" "}
                on Unsplash
              </Typography>
              <CardContent>
                <Typography variant="body1" component="p">
                  Welcome to the Social Network App.
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
      {defaultPage && (
        <Grid container spacing={8}>
          <Grid item xs={6} sm={5}>
            <FindPeople />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
