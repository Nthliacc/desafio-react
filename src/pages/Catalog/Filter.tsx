import { useContext, useEffect, useState } from "react";
import { ContainerFilter } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieContext } from "../../store/MovieContext";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { filterMovies } = useContext(MovieContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search).get("search-query");
    if (params) {
      setFilter(params);
      filterMovies(params);
    }
  }, [location.search]);

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const params = filter.toLowerCase();
    navigate(`?search-query=${params}`);
    filterMovies(params);
  };

  return (
    <ContainerFilter onSubmit={handleFilter}>
      <input
        type="text"
        placeholder="Buscar filme pelo nome"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onBlur={handleFilter}
      />
      <button type="submit">
        <img alt="Procurar" />
      </button>
    </ContainerFilter>
  );
};

export default Filter;
