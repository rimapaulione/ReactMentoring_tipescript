import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BasicProps = {
  children: ReactNode;
  textOnly?: boolean;
};
type ButtonProps = BasicProps &
  ComponentPropsWithoutRef<"button"> & { to?: never };

type ButtonLinkProps = BasicProps & LinkProps & { to: string };

function isButtonLink(
  props: ButtonLinkProps | ButtonProps
): props is ButtonLinkProps {
  return "to" in props;
}

function Button(props: ButtonProps | ButtonLinkProps) {
  if (isButtonLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;
  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
