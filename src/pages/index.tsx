import Head from 'next/head'
import Header from '@components/Header'
import Form from '@components/Form'

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Sr. Frontend Test | Frederico Soares</title>
      </Head>
      <Header />
      <Form />
    </>
  )
}

export default Home