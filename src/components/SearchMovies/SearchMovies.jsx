import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Button, Form, Input } from './SearchMovies.styled';
import React, { useState } from 'react';

const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="query"
        type="text"
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
