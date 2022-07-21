import React from "react";
import "./InterviewerListItem.scss";

import classNames from "classnames";

const InterviewerListItem = props => {
  const listItemClass = {
    interviewers__item: !props.selected,
    "interviewers__item--selected": props.selected,
  };

  const { id, avatar, name, selected, setInterviewer } = props || {};

  return (
    <li key={id} className={classNames(listItemClass)} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
