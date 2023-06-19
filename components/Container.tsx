import React from "react";

interface ContainerProps {
  as: React.ElementType;
  className: string;
  children: React.ReactNode | undefined;
}
export const Container = (props: ContainerProps) => {
  //
  const {as: Element, children, className, ...rest} = props;
  return (
    <Element {...rest} className={`px-5 w-full max-w-screen-md m-auto ${className}`}>
      {children}
    </Element>
  );
};
