import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout';

function new_post() {
  let post_title = 'Something Something Dark Side'
  return (
    <Layout>
      <Head>
        <title>{ post_title }</title>
      </Head>
      <h1>{ post_title }</h1>
      Hello world.
      <Link href="/">Back</Link>
    </Layout>
  )
}

export default new_post