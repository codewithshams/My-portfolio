import { DataObjectSharp } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import img from "../../images/back.jpg";
import React from "react";
import "./tools.css";


const Tools = () => {
  return (
    <>
      <hr />
      <div className="tools-div" id="Tools">
        <h3>WHAT I DO</h3>
        <div className="tools-child">
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://image.shutterstock.com/image-photo/image-260nw-1188713476.jpg"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                HTML & CSS & JS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For every website the HTML CSS and JavaScript is necessary. I am
                using all this three technologies for building a basic structure
                of website.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://www.w3schools.com/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCm2wD61NZvdirb17bc9yaekROLglIWuYR5gxp0GLp9Nu94iEiSBug0_300XZoVNAm6U&usqp=CAU"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EXPRESS JS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Express. js basically helps you manage everything, from routes,
                to handling requests and views.I can do work with express js in
                backend.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://expressjs.com/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  REACT JS
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={"https://reactjs.org/logo-og.png"}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                REACT JS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. I have learned
                completely advance level.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://reactjs.org/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S_bdT9mPJbDjxD8_GZbFDQpYrnXWF8YNTdUVhfWpwXm14X9dgwb5LLGrxocqHA0-LNQ&usqp=CAU"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MONGO DB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mongo Db is a NoSQL database used for storing data on clouds. I
                have fully prepared with mongoose framework.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://www.mongodb.com/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={"https://logodix.com/logo/1764886.png"}
              alt="green iguana"
              style={{ width: "50%", margin: "auto" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                NODE JS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code outside a web browser. I use it with express js
                for backend.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://nodejs.org/en/docs/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJ4L7bZErC70pGlk_X2wyRqbzJoL_hs1P6g&usqp=CAU"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SASS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sass is a preprocessor scripting language that is interpreted or
                compiled into Cascading Style Sheets. It is batter to avoid code
                redundancy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://sass-lang.com/documentation"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://blog.getbootstrap.com/assets/img/2020/06/v5-new-logo.png"
              }
              alt="green iguana"
              style={{ width: "50%", margin: "auto" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BOOTSTRAP 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bootstrap is an HTML, CSS & JS Library that focuses on
                simplifying the development of informative web pages (as opposed
                to web apps). I use it in more projects.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            className="tool-card"
            sx={{ maxWidth: 345 }}
            sm={{ maxWidth: "200px", width: "70%" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={
                "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"
              }
              alt="green iguana"
              style={{ width: "50%", margin: "auto" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MATERIAL UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Material-UI is simply a library that allows us to import and use
                different components to create a user interface in our React
                applications.I use it with react components.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://mui.com/"
                  style={{ textDecoration: "none", color: "rgb(98, 0, 255)" }}
                >
                  LEARN MONRE
                </a>
              </Button>
            </CardActions>
          </Card>

          {/* <div className="tool">
            <DataObjectSharp />
            <h5>Mongo Db</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Tools;
