'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlur, setSearchBarFocus } from '../slices/blurSlice';
import CloseIcon from '@mui/icons-material/Close';
import { setSearchQuery, setSourcePage } from '../slices/searchSlice';
import { setNavbarRounded } from '../slices/stylingSlice';

type Item = {
	title: string;
	index: string;
	source: string;
};

type SearchResultsState = {
	search: {
		searchResults: Array<Item>;
		searchQuery: string;
		sourcePage: string;
	};
};

type BlurState = {
	blur: {
		searchBarHasFocus: boolean;
		isBlurred: boolean;
	};
};

type Props = {
	source: string;
};

type ContainerRef = any;

type StylingState = {
	styling: {
		navbarRounded: boolean;
	};
};

const FloatingNavbar = ({ source }: Props) => {
	const dispatch = useDispatch();
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

	const sourcePage = useSelector(
		(state: SearchResultsState) => state.search.sourcePage
	);
	useEffect(() => {
		if (searchQuery && searchBarHasFocus && sourcePage === 'main') {
			dispatch(setNavbarRounded(false));
		} else {
			dispatch(setNavbarRounded(true));
		}
	}, [searchQuery, dispatch, searchBarHasFocus, sourcePage]);

	useEffect(() => {
		dispatch(setSourcePage(source));
	}, [source, dispatch]);

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
			className='flex justify-center w-full'
		>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-light  ${
					sourcePage !== 'main' ? 'h-10 pl-4' : 'h-10'
				} w-full bg-white flex items-center gap-8 rounded-md `}
			>
				<SearchBar />
				<CloseIcon
					className='mr-3 opacity-20'
					onClick={() => {
						dispatch(setSearchQuery(''));
					}}
				/>
			</nav>
			{source === 'main' && (
				<SearchResults
					data={searchResults}
					searchQuery={searchQuery}
					searchBarHasFocus={searchBarHasFocus}
				/>
			)}
		</div>
	);
};

export default FloatingNavbar;
