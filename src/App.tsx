import { useState, useEffect, FormEvent } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";

import PhotoItem from "./components/PhotoItem";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const[uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };

    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File
    
    if(file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      }else {
        let newPhotoList = [ ...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  console.log(photos)
  const handleClose = (id: any) => {
    setLoading(true);
      Photos.deletePhoto(id)
    setLoading(false);
    console.log('name ', id)

    const UpdateList = photos.filter((CurrentItem) => {
      if (CurrentItem.id !== id)
        return id;
    })
    setPhotos(UpdateList);
  }

  return (
    <>
      <Header />
      <Home>
      <form method="POST" onSubmit={handleFormSubmit}>
        <input type="file" name="image"/>
        <input type="submit" value="Enviar" className="enviar"/>
        {uploading && (
          <p>Carregando...</p>
        )}
      </form>

        {!loading && photos.length === 0 && (
          <div className="centralEmoji">
            <div className="emoji">😩</div>
            <div>Não há fotos cadastradas...</div>
          </div>
        )}
        {loading && (
          <div className="centralEmoji">
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </div>
        )}

        {!loading && photos.length > 0 && (
          <div className="list">
            {photos.map((item, index) => (
              <>
                <PhotoItem 
                  key={index} 
                  url={item.url} 
                  name={item.name} 
                />
                <button onClick={() => handleClose(item.id)}>X</button>
              </>
            ))}
          </div>
        )}

      </Home>
      <Footer />
    </>
  );
}

export default App;
