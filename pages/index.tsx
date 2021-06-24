import Head from "next/head";
import { useState } from "react";

const HeadWithScript = () => (
  <Head>
    <script async src="/test-script.js" key="/test-script.js"></script>
  </Head>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <>
      {isMounted && <HeadWithScript />}
      <div>Open your console and start toggling!</div>
      <br />
      <div>
        <button onClick={() => setIsMounted(!isMounted)}>
          Toggle script mounting
        </button>{" "}
        <span>Script is {isMounted ? "mounted" : "not mounted"}</span>
      </div>
    </>
  );
}
