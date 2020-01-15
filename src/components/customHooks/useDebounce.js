import { useState, useEffect } from "react";

export function useDebounce(value, gap){
    const [state, setState] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setState(value), gap);

        return () => clearTimeout(timer);
    }, [value]);

    return state;
}
