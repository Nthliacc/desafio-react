import { useContext, lazy } from "react";
import { Card } from "../../components/Card";
import { MovieContext } from "../../store/MovieContext";
import { Container, Wrapper } from "./styled";
import Filter from "./Filter";
const Loading = lazy(() => import("../../components/Loading"));
const EmptyMessage = lazy(() => import("../../components/EmptyMessage"));

const Catalog = () => {
  const { movies, loading } = useContext(MovieContext);

  return (
    <Wrapper>
      <Filter />
      {loading ? (
        <Loading />
      ) : movies.length == 0 ?  (
        <EmptyMessage />
      ): (
        <Container>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </Container>
      )}
    </Wrapper>
  );
};

export default Catalog;
