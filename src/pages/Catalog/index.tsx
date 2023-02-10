import { useContext } from "react";
import { Card } from "../../components/Card";
import { MovieContext } from "../../store/MovieContext";
import { Container } from "./styled";

const Catalog = () => {
  const { movies } = useContext(MovieContext);

  return (
      <Container>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </Container>
  );
}

export default Catalog;