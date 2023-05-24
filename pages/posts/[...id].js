/** 
 * 
 * pages/posts/[id].js matches /posts/a , /posts/b
 * 
 * pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.
 * If you do this, in getStaticPaths, you must return an array as the value of the id key like so:
 * {
    params: {                 
      // Statically Generates /posts/a/b/c
      id: ['a', 'b', 'c'],
    },
  },
 * 
 * 
 */

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '/src/components/layout'
import Date from '/src/components/date'
import { getAllPostIds, getPostData } from '/src/utils'
import utilStyles from '/styles/utils.module.scss'

export default function Post({ postData }) {
  /**
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
   */
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
/*
 * The returned list is not just an array of strings —
 * it must be an array of objects that look like the comment above.
 * Each object must have the params key and contain an object with the id key
 * (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
 *
 * In development (npm run dev or yarn dev), getStaticPaths runs on every request.
 * In production, getStaticPaths runs at build time.
 *
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  console.log('postData - ', postData)
  return {
    props: {
      postData,
    },
  }
}
