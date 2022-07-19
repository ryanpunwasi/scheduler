import { useState, useEffect } from 'react';
import axios from 'axios';
import { updateSpots } from 'helpers/selectors';
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {

      setState(prev => {
        return { ...prev, appointments };
      });

      setState(prev => {
        const newState = updateSpots(prev);
        return newState;
      });
      
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`api/appointments/${id}`)
    .then(() => {

      setState(prev => {
        return { ...prev, appointments };
      });

      setState(prev => {
        const newState = updateSpots(prev);
        return newState;
      });

    });
  }

  return {
    state,
    setDay, 
    bookInterview,
    cancelInterview 
  };
}