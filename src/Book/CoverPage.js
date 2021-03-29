import React from "react";

const CoverPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>{props.children}</div>
    </div>
  );
});

export default CoverPage;
