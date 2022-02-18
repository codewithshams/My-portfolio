import { Button } from "@mui/material";
import img from "../../images/personal image.png";
import "./home.css";
import Navbar from '../navbar/Navbar.jsx'
import { Send } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <div className="home" id="#Home">
        <Navbar />
        <div className="child-div">
          <div className="text-div">
            <span className="span-1 my-1">I'm Shams ur rahman</span>
            <span className="span-2 my-1">
              Full stake MERN developer
            </span>
            <span className="span-3 my-1"> I update myself with letest technologies</span>
            <Button
              variant="contained"
              style={{ color: "#651fff", backgroundColor: "#FFF" }}
              endIcon={<Send style={{ marginTop: "5px" }} />}
            >
              Send
            </Button>
          </div>
          <div className="img-div">
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
