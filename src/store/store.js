import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers = // doc  redux-devtools-extension
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	rootReducer,

	// hacer clic en la consola  "enlace instruciones" copio el enlace wi8ndows
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	composeEnhancers(applyMiddleware(thunk))
);
