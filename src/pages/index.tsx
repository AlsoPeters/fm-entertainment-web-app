import type { NextPage } from "next";
// import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	return (
		<div className="px-4 lg:w-[calc(100vw-6rem)]">
			<SearchBar />
			<h1 className="my-4 text-xl">Trending</h1>
			<div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-track-ewa-semi-dark-blue scrollbar-thumb-ewa-grayish-blue scrollbar-thumb-rounded-full lg:overflow-y-hidden">
				<MovieCardLarge />
				<MovieCardLarge />
				<MovieCardLarge />
				<MovieCardLarge />
				<MovieCardLarge />
				<MovieCardLarge />
			</div>
			<h1 className="my-4 text-xl">Recomended for you</h1>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
				<MovieCardSmall />
			</div>
		</div>
	);
};

export default Home;

const SearchBar = () => {
	return (
		<div className="my-6 flex items-center gap-4">
			<div className="SeachIcon h-[24px] w-[24px] bg-ewa-pure-white" />
			<input
				className="w-full bg-ewa-semi-dark-blue py-2 caret-ewa-red outline-none active:border-b-2 active:border-b-ewa-grayish-blue "
				type="text"
				placeholder="Search for movies or TV series"
			/>
		</div>
	);
};

const MovieCardLarge = () => {
	return (
		<div className="mb-4 flex h-[140px] min-w-[240px] flex-col justify-between rounded-xl bg-ewa-grayish-blue py-2 px-4 sm:h-[230px] sm:min-w-[470px] lg:mb-6 ">
			<div className="h-[32px] w-[32px] place-self-end rounded-full bg-white" />
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

const MovieCardSmall = () => {
	return (
		<div className="">
			<div className="flex h-[110px] w-[164px] flex-col justify-between self-center rounded-xl bg-ewa-grayish-blue py-2 px-4 sm:h-[140px] sm:w-[220px] ">
				<div className="h-[32px] w-[32px] place-self-end rounded-full bg-white" />
			</div>
			<div>
				<div className="flex gap-2 ">
					<p>Year</p>
					<p>Type</p>
					<p>Rating</p>
				</div>
				<p className="text-sm">Title</p>
			</div>
		</div>
	);
};
