import styled from 'styled-components';
const Iframe = styled.iframe`
margin-top:100px;
margin-left: 200px;
    width: 1000px;
    height: 350px;
    background-color: #086b03;
    border-radius:18px;
    border-color: green;
    border: 30px;
`

const Spotify = () => {
 


//    https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy
  return (<>
  <div>
    <Iframe src="https://open.spotify.com/embed/playlist/2tkA6L4HFfYvEm5NMgOZpy?utm_source=generator"  frameBorder="0"  allow="autoplay; clipboardWrite; encryptedMedia; fullscreen; pictureInPicture" loading="eager"/>
    </div> </>);
};

export default Spotify;
