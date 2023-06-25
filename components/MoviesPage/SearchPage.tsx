'use client';
import React, { useState, useEffect } from 'react';
import SearchFeature from '../SearchFeature';
import useSearch from '@/hooks/useSearch';
import Error from '../Error';
import Loading from '../Loading';
import MovieCard from '../Movies/MovieCard';
import CustomPagination from '../Pagination/CustomPagination';
import useDebounce from '@/hooks/useDebounce';

const SearchPage = () => {
  const [selectedType, setSelectedType] = useState('movie');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSearch(selectedType, query, page);

  const resultError = (
    <p className="sm:text-base text-sm text-center text-red-500 mt-10">
      No {selectedType === 'movie' ? 'Movies' : 'Series'} Found! Please try
      Again.
    </p>
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, data]);

  let content;
  if (!data) return;

  if (error) {
    content = <Error message={error.message} />;
  } else {
    if (isLoading) {
      content = <Loading />;
    } else if (query && (!data?.results || data?.results.length === 0)) {
      content = resultError;
    } else {
      content = <MovieCard movies={data?.results} type={selectedType} />;
    }
  }

  return (
    <>
      <SearchFeature
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        setQuery={setQuery}
      />
      {content}
      {data?.results && data?.results.length > 1 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          totalPages={data?.total_pages}
        />
      )}
    </>
  );
};

export default SearchPage;
