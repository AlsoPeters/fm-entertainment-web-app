import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <div className="px-6">
      <SearchBar />
      <h1 className="my-4">Trending</h1>
      <div className="flex gap-4 overflow-scroll">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <h1 className="my-4">Recomended for you</h1>
    </div>
  );
};

export default Home;

const SearchBar = () => {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="SeachIcon h-[24px] w-[24px] bg-ewa-pure-white"></div>
      <input
        className="w-full bg-ewa-semi-dark-blue py-2 caret-ewa-red outline-none active:border-b-2 active:border-b-ewa-grayish-blue "
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

const MovieCard = () => {
  return (
    <div className="flex h-[140px] min-w-[240px] flex-col justify-between rounded-xl bg-ewa-grayish-blue py-2 px-4">
      <div className="h-[32px] w-[32px] place-self-end rounded-full bg-white"></div>
      <div>
        <div className="flex gap-2">
          <p>Year</p>
          <p>Type</p>
          <p>Rating</p>
        </div>
        <p>Title</p>
      </div>
    </div>
  );
};
