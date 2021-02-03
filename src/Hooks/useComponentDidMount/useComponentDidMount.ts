import { useEffect } from 'react';

export const useComponentDidMount = (execute: () => void): void => {
	useEffect(execute, []);
};
