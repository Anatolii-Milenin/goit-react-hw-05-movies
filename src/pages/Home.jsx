import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const { results } = await fetchTrendMovies();
      setTrendingMovies(results);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    } else if (error) {
      return (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      );
    } else {
      return <MovieList trendingMovies={trendingMovies} />;
    }
  };

  return <>{renderContent()}</>;
};

export default Home;
