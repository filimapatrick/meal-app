import { legacy_createStore as createStore} from 'redux'
import Reducers from '../redux/index.js';


const store = createStore(
    Reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default store;