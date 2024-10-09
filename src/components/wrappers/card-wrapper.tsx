import React, { PropsWithChildren } from "react";

const CardWrapper = (props: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-3 gap-x-4 px-4 gap-y-4">
      {props.children}
    </div>
  );
};

export default CardWrapper;
