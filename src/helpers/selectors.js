export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day); // Get array containing day object
  if (!filteredDay.length) {
    return [];
  }

  // Create an array of appointment objects for given day
  let filteredAppointments = filteredDay[0].appointments.map(appointmentId => {
    return { ...state.appointments[appointmentId] };
  });

  return filteredAppointments;
}

export function getInterview(state, interview) {
  const { interviewer } = interview || {};

  // Create interview object, where the interviewer property is and object containing interviewer details
  if (interviewer in state.interviewers) {
    const interviewerObj = { ...state.interviewers[interviewer] };
    return { ...interview, interviewer: interviewerObj };
  }

  return null;
}

export const getInterviewersForDay = (state, day) => {
  const filteredDay = state.days.filter(d => d.name === day);
  if (!filteredDay.length) {
    return [];
  }

  // Create an array of interviewer objects for given day
  let interviewers = filteredDay[0].interviewers.map(interviewerId => {
    return { ...state.interviewers[interviewerId] };
  });

  return interviewers;
};

export const updateSpots = state => {
  // Create day object based on selected day
  const currentDayIndex = state.days.findIndex(day => day.name === state.day);
  const currentDay = { ...state.days[currentDayIndex] };

  // Calculate spots remaining
  const spots = currentDay.appointments.filter(
    id => !state.appointments[id].interview
  ).length;

  const updatedDays = [...state.days]; // Get copy of days array from state
  updatedDays[currentDayIndex] = { ...currentDay, spots }; // Update spots in appropriate day object

  return { ...state, days: updatedDays };
};
