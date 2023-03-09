import { useEffect } from 'react';
import { useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';

export interface User {
	id: string;
	name: string;
	email: string;
	authToken?: string;
}

export const useAuth = () => {
	const { user, addUser, removeUser } = useUser();
	const { getItem } = useLocalStorage();

	useEffect(() => {
		const user = getItem('user');
		if (user) {
			addUser(JSON.parse(user));
		}
	}, []);

	const login = (user: User) => {
		addUser(user);
	};

	const logout = () => {
		removeUser();
	};

	return { user, login, logout };
};