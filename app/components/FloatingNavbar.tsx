'use client';
import React, { FocusEventHandler, useRef } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlur, setSearchBarFocus } from '../slices/blurSlice';
import CloseIcon from '@mui/icons-material/Close';
import { setSearchQuery } from '../slices/searchSlice';
import { setNavbarRounded } from '../slices/stylingSlice';

type Data = Array<Item>;

type Item = {
	title: string;
	index: string;
	source: string;
};

type SearchResultsState = {
	search: {
		searchResults: Array<Item>;
		searchQuery: string;
	};
};

type BlurState = {
	blur: {
		searchBarHasFocus: boolean;
		isBlurred: boolean;
	};
};

type Event = {
	relatedTarget: {
		value: string;
	};
};

type ContainerRef = any;

type StylingState = {
	styling: {
		navbarRounded: boolean;
	};
};

const FloatingNavbar = () => {
	const navbarRounded = useSelector(
		(state: StylingState) => state.styling.navbarRounded
	);
	const containerRef = useRef<ContainerRef>(null);

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.relatedTarget)
		) {
			dispatch(setBlur(false));
			dispatch(setSearchBarFocus(false));
		}
	};

	const searchResults = useSelector(
		(state: SearchResultsState) => state.search.searchResults
	);
	const searchQuery = useSelector(
		(state: SearchResultsState) => state.search.searchQuery
	);
	const searchBarHasFocus = useSelector(
		(state: BlurState) => state.blur.searchBarHasFocus
	);
	const dispatch = useDispatch();
	useEffect(() => {
		if (searchQuery && searchBarHasFocus) {
			dispatch(setNavbarRounded(false));
		} else {
			dispatch(setNavbarRounded(true));
		}
	}, [searchQuery, dispatch, searchBarHasFocus]);

	useEffect(() => {
		// This function will be called when the component is unmounted
		return () => {
			dispatch(setBlur(false));
			dispatch(setSearchBarFocus(false));
		};
	}, [dispatch]);
	return (
		<div
			ref={containerRef}
			onBlur={handleBlur}
			className='flex justify-center'
		>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-light h-12 w-full bg-white mt-7  flex items-center gap-8 ${
					navbarRounded ? 'rounded-full' : 'rounded-t-3xl'
				}`}
			>
				<Link href='/'>
					<h2 className='ml-4 font-medium'>Healthcues.org</h2>
				</Link>
				<SearchBar />
				<CloseIcon
					className='mr-3 opacity-20'
					onClick={() => {
						dispatch(setSearchQuery(''));
					}}
				/>
			</nav>
			<SearchResults
				data={searchResults}
				searchQuery={searchQuery}
				searchBarHasFocus={searchBarHasFocus}
			/>
		</div>
	);
};

export default FloatingNavbar;
