import { dataClient } from "../client";
import { useEffect, useState } from "react";

export interface INavigationItem {
  title: string;
  path: string;
  order: number;
}

const queryObject = `{
  title,
  path,
  order
}`;

export const useNavigation = () => {
  const query = `*[_type == "navigation"]${queryObject}`;
  const [navigationItems, setNavigationItems] = useState<INavigationItem[]>([]);

  useEffect(() => {
    dataClient.fetch(query).then((r: INavigationItem[]) => {
      setNavigationItems(r);
    });
  }, [query]);

  return [navigationItems];
};
