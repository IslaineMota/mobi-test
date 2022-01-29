import { useRef } from "react";

function UseDebounce (fn, delay) {
   
    const timeoutRef = useRef(null);

    function  debounce (...args) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }
    return debounce;
}
export default UseDebounce;