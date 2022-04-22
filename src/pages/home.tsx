import { GetServerSideProps } from 'next'
import Home from '../containers/Home'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      userInterests: []
    }
  }
}

export default Home
