import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);//first counter denotes reducer counter of file index.js and secoind counter denotes initialCounterState's counter whose value is 0 if (initialCounterState ko 'counter' ko place ma name 'value' vako vaye it would be [state.counter.value])
    const show=useSelector(state=>state.counter.showCounter);

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
     };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());

    };
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
           {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase by 5</button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};
export default Counter;