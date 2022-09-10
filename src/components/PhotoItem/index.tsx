import * as C from './styles'

type Props = {
  url: string;
  name: string;
}

const PhotoItem = ({url, name}: Props) => {
  return (
    <>
      {url.indexOf('.mp4') === -1 &&
        <C.PhotoItem>
          <img src={url} alt={name} />
          <p>{name}</p>      
        </C.PhotoItem>
      }
    </>
  )
}


export default PhotoItem