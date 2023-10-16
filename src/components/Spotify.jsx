import styled from 'styled-components';
import img from "../../src/assets/cisne.webp"
const Iframe = styled.iframe`
margin-top:10%;
    width: 90%;
    height: 100%;
    left:5%;
     border-radius:18px;
    position: relative
`



const Spotify = () => {
 

//    https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy
  return (<>
  <div>
    <Iframe src="https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy?utm_source=generator"  frameBorder="0"  allow="autoplay; clipboardWrite; encryptedMedia; fullscreen; pictureInPicture" loading="eager"/>
    </div> Pronto <img src={img} alt="Pronto, Al cisne salvaje"/> pronto </>);
    
};

export default Spotify;
