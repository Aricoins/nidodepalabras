const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


const token = 'BQBqBJjWvwSVzHyDK4ZseEKEOG-8B6rQtW6u8xzjAqCqZp4LttDrsqla_QJUGhGutMiUw29kYvL0ZEsxT8P8H2YSea0WAMrq4US_v0CKa6xw_2JPtJ9DHcjEuf2yecRDeomR8B9A1mSb_GlTvH5MtUGILpBRwWjDjKxWkw37IplX8p2ahPf_hFN-bUmD3Y-mDMTWVz-KI32X9c9Fj4S9xtX4gahZqvDzgWs70TET-2pI00SCUlHDTzLUCBlOlqjuZQzlKZD974Nz-DxBgMuCH4KPkMey';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/getSpotifyPlaylist', async (req, res) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Spotify playlist: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Respuesta de Spotify:', data);

    res.json(data);
  } catch (error) {
    console.error('Error al obtener los datos de la playlist:', error);
    res.status(500).json({ error: 'Error al obtener los datos de la playlist' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
