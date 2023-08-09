import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"; // Asegúrate de tener instalado redux-thunk
import rootReducer from "./reducer/reducer"; // Asegúrate de importar tu rootReducer correctamente

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;