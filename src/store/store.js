import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const middleware = getDefaultMiddleware();

if (process.env.NODE_ENV === 'development') {
	const logger = createLogger();
	middleware.concat(logger);
}

const store = configureStore({
	reducer: {},
	middleware,
});

export default store;
