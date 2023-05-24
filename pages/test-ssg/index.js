import Link from "next/link";

export default function TestSSG(props) {
  console.log("props in TestSSG - ", props);
  return (
    <div>
      test ssg
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = { msg: "test ssg getStaticProps done..." };
  console.log("data in getStaticProps - ", data);
  // The value of the `props` key will be
  //  passed to the `Home` component
  return { props: data };
}
