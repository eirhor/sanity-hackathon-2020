import * as React from "react";
import { INavigationItem } from "../data/hooks/use-navigation";
import { Link } from "react-router-dom";
import {MenuItem} from 'react-foundation';

interface INavigationPartialProps extends INavigationItem {}

export const NavigationPartial: React.FC<INavigationPartialProps> = ({
  title,
  path
}: INavigationPartialProps) => (
    <MenuItem>
      <Link to={path}>{title}</Link>
    </MenuItem>
);
