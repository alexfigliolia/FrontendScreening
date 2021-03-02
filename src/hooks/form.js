import { useState, useEffect } from 'react';
import { url } from '../api';

export function useForm() {
  const [state, setState] = useState({
    error: null,
    data: null,
    status: 'idle',
  });

  useEffect(() => {
    setState({
      status: 'pending',
    });

    window
      .fetch(`${url}/api/form`)
      .then(response => response.json())
      .then(data => {
        setState({
          data,
          status: 'success',
        });
      })
      .catch(error => {
        setState({
          error,
          status: 'error',
        });
      });
  }, []);

  return state;
}
