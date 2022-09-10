import * as C from './styles'

type Props = {
  children: React.ReactNode
}

const Home = ({children}: Props) => {
  return (
    <C.Container>
      <p>Os itens abaixo está sendo consumindo do FIREBASE.</p>
      {children}
    </C.Container>
  )
}

export default Home;