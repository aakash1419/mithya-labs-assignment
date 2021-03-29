import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <h2>Page - {props.number}</h2>
        <div></div>
        <div>{props.children}</div>
        <div>{props.number + 1}</div>
      </div>
    </div>
  );
});

export default Page;
