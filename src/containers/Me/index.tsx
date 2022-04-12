import { GetServerSideProps } from 'next'
import { withSSRAuth } from 'utils/withSSRAuth'

export default function Me() {
  return <div>Editando Minha Página de perfil</div>
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
