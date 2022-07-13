import React from 'react';
import './InterviewerListItem.scss';

import classNames from 'classnames';

const InterviewerListItem = (props) => {

  const listItemClass = {
    "interviewers__item": !props.selected,
    "interviewers__item--selected": props.selected
  };

  return (
    <li key={props.id} className={classNames(listItemClass)} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;