import * as React from "react";

function Counter({ className, countClassName, buttonClassName }) {
    const [count, setCount] = React.useState(0);
    return (
      <div className={className} data-used={count > 0}>
        <div className={countClassName}>{count}</div>
        <button className={buttonClassName} onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
      </div>
    );
  }

  export default Counter