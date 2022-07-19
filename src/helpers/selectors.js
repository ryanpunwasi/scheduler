export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(d => d.name === day);

  if (!filteredDay.length) {
    return [];
  }

  let filteredAppointments = filteredDay[0].appointments.map(
    appointmentId => state.appointments[appointmentId]
  );
  return filteredAppointments;
}

export function getInterview(state, interview) {
  const { interviewer } = interview || {};

  if (interviewer in state.interviewers) {
    const interviewerObj = state.interviewers[interviewer];
    return { ...interview, interviewer: interviewerObj };
  }

  return null;
}

export const getInterviewersForDay = (state, day) => {
  const filteredDay = state.days.filter(d => d.name === day);

  if (!filteredDay.length) {
    return [];
  }

  let interviewers = filteredDay[0].interviewers.map(
    interviewerId => state.interviewers[interviewerId]
  );
  return interviewers;
};

export const updateSpots = state => {
  const appointmentsForDay = getAppointmentsForDay(state, state.day); // Refactor: not encapsulated
  const currentDayIndex = state.days.findIndex(day => day.name === state.day);
  const currentDay = state.days[currentDayIndex];
  const spots = currentDay.appointments.filter(
    id => !state.appointments[id].interview
  ).length;

  const updatedDayObject = { ...currentDay, spots };
  const updatedDays = [...state.days];
  updatedDays[currentDayIndex] = updatedDayObject;

  return { ...state, days: updatedDays };
};
