import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = {
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  };

  const formatSpots = spots => {
    const formatted =
      spots > 1
        ? `${spots} spots remaining`
        : spots === 1
        ? "1 spot remaining"
        : "no spots remaining";

    return formatted;
  };

  return (
    <li
      className={classNames(dayClass)}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
