import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
const useGames = () => {
    const [games, setGames] = useState<GameModel[]>([]);
    const [error, setError] = useState();
  
    useEffect(() => {
         const controller = new AbortController()
      apiClient
        .get<GameResModel>("/games", { signal: controller.signal })
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return
          setError(err.message);
        });
        return ()=> controller.abort();
    }, []);

    return { games, error };
  
}
export default useGames;