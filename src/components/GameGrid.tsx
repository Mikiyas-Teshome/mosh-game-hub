import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface GameModel {
  id: number;
  name: string;
  domain?: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GameResModel {
  count: number;
  next?: string;
  previous?: string;
  results: GameModel[];
}
const GameGrid = () => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<GameResModel>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
