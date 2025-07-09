import {
  BG_COLOR_TITLE_CARD,
  COLOR_TITLE_CARD,
} from "@foodsapp/utils/constants";
import { useState } from "react";

export function FoodCardViewModel() {
  const [colorTitleCard, setColorTitleCard] = useState(COLOR_TITLE_CARD);
  const [bgColorTitleCard, setBgColorTitleCard] = useState(BG_COLOR_TITLE_CARD);

  const handleMouseEnterCard = () => {
    setColorTitleCard(BG_COLOR_TITLE_CARD);
    setBgColorTitleCard(COLOR_TITLE_CARD);
  };

  const handleMouseLeaveCard = () => {
    setColorTitleCard(COLOR_TITLE_CARD);
    setBgColorTitleCard(BG_COLOR_TITLE_CARD);
  };
  return {
    colorTitleCard,
    bgColorTitleCard,
    handleMouseEnterCard,
    handleMouseLeaveCard,
  };
}
