// import { useReducer } from "react";

import { useReducer } from "react";

// const initialState = { count: 0, step: 1 };

// function reducer(state, action) {
//   console.log(state, action);

//   switch (action.type) {
//     case "dec":
//       return { ...state, count: state.count - state.step };
//     case "inc":
//       return { ...state, count: state.count + state.step };
//     case "setCount":
//       return { ...state, count: action.payload };
//     case "setStep":
//       return { ...state, step: action.payload };
//     case "reset":
//       return { count: 0, step: 1 };
//     default:
//       throw new Error("unknown action");
//   }
// }

const [{ balande, loan, isActive }] = useReducer(initialState, reducer);

// function DateCounter() {
//   const [state, dispach] = useReducer(reducer, initialState); // takes 2 parameters - initial state and reducer function, which always get access to current state and action that we pass into the dispach function. dispach function is from useReducer

//   const { count, step } = state;

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//     dispach({ type: "dec" });
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);
//     dispach({ type: "inc" });
//   };

//   const defineCount = function (e) {
//     //setCount(Number(e.target.value));
//     dispach({ type: "setCount", payload: Number(e.target.value) });
//   };

//   const defineStep = function (e) {
//     // setStep(Number(e.target.value));
//     dispach({ type: "setStep", payload: Number(e.target.value) });
//   };

//   const reset = function () {
//     dispach({ type: "reset" });
//     // setCount(0);
//     // setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
