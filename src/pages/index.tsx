import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <p>This is the Homepage</p>
    </>
  );
};

export default Home;
