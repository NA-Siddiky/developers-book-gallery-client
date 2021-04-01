import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
	const [user, setUser] = useState({});

	const contextData = {
		user,
		setUser,
	};
	return (
		<BookContext.Provider value={contextData}>
			{props.children}
		</BookContext.Provider>
	);
};
