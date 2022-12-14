import * as C from './styles'
import { Photo } from '../../types/Photo'

const PhotoItem = ({url, name, children}: Photo) => {
  return (
    <>
      {url.indexOf('.mp4') === -1 &&
        <C.PhotoItem>
          <img src={url} alt={name} />
          <p>{name}</p>   
          {children}   
        </C.PhotoItem>
      }
    </>
  )
}


export default PhotoItem