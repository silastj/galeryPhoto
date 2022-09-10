import * as C from './styles'

type Props = {
  children: React.ReactNode
}

const Home = ({children}: Props) => {
  return (
    <C.Container>
      <p>Os itens abaixo estão sendo consumindos do FIREBASE.</p>
      {children}
    </C.Container>
  )
}

export default Home;