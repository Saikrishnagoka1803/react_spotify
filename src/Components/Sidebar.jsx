  
import { Button, Container, Row } from "react-bootstrap";
import "../App.css";
//import spotify from "../assets/spotify-black.png";
import { RiHome2Line, RiInstallLine } from "react-icons/ri";
import {AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import {VscLibrary} from 'react-icons/vsc'
import {MdPlaylistAdd} from 'react-icons/md'

const SideBar = () => (
  <Container className="mx-0">
    <Row className="side-bar pt-3">
      <Row className="mb-4 ml-3">
        <img src="{spotify}" alt="#" className="icon-resize mr-2" />
        <h4 style={{ color: "white" }}>Spotify</h4>
      </Row>
      <Button className="mb-2 ml-3 pl-1 button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <RiHome2Line />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Home</span>
      </Button>
      <Button className="mb-2 ml-3 pl-1 button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <AiOutlineSearch />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Search</span>
      </Button>
      <Button className="mb-4 ml-3 pl-1 button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <VscLibrary />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Your Library</span>
      </Button>
      <Button className="mb-2 ml-3 pl-1 button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <MdPlaylistAdd />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Create Playlist</span>
      </Button>
      <Button className="mb-2 ml-3 pl-1 button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <AiOutlineHeart />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Liked Songs</span>
      </Button>
      <span className='mx-3'>
          <hr></hr>
      </span>
      <Button className="mb-2 ml-3 pl-1 mt-auto button-custom sidebar-button">
        <span className="mb-3 mr-3">
          <RiInstallLine />
        </span>
        <span style={{ paddingTop: "0.1rem" }}>Install App</span>
      </Button>
    </Row>
  </Container>
);

export default SideBar;