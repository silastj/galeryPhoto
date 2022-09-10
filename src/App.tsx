import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import * as Photos from './services/photos'
import { Photo } from './types/Photo';

import PhotoItem from './components/PhotoItem';

function App() {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])


  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }

    getPhotos()
  }, [])



  return (
    <>
      <Header />
      <Home>
      {loading &&
        <div className='centralEmoji'>
          <div className='emoji'>🤚</div>
          <div>Carregando...</div>
        </div>
      }

      {!loading && photos.length > 0 &&
        <div className='list'>
          {photos.map((item, index) => (
            <PhotoItem
              key={index}
              url={item.url}
              name={item.name}
            />
          ))}
        </div>
      }

      {!loading && photos.length === 0 &&
        <div className='centralEmoji'>
          <div className='emoji'>😩</div>
          <div>Não há fotos cadastradas...</div>
        </div>
      }
      </Home>
      <Footer />
    </>
  );
}

export default App;
