import Head from "next/head";
import Layout, { siteTitle } from "/src/components/layout"
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Hoang Anh, I'm software enginer. You can contact me on <a href={`https://www.facebook.com/hoanganh090492`} > Facebook</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
