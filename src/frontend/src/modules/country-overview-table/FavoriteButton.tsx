import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { setFavoriteCountry } from "../common/utils.ts";
import { FavoriteButtonProps } from "./types.ts";

export default function FavoriteButton(props: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const localStorageValue = localStorage
      .getItem(props.countryCode)
      ?.toLowerCase();

    if (localStorageValue === null) {
      setIsFavorite(false);
      setFavoriteCountry(props.countryCode, false);
    }

    if (localStorageValue === "true") {
      setIsFavorite(true);
    }
  }, [props.countryCode]);

  useEffect(() => {
    setFavoriteCountry(props.countryCode, isFavorite);
  }, [props.countryCode, isFavorite]);

  return (
    <FavoriteIcon
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      sx={{
        color: isFavorite ? "#FFB6C1" : "darkgrey",
      }}
    />
  );
}
