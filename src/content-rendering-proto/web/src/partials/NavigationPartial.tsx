import * as React from "react";
import { INavigationItem } from "../data/hooks/use-navigation";
import { Link } from "react-router-dom";

interface INavigationPartialProps extends INavigationItem {}

export const NavigationPartial: React.FC<INavigationPartialProps> = ({
  title,
  path
}: INavigationPartialProps) => (
    <Link className={'a'} to={path}>{title}</Link>
);
