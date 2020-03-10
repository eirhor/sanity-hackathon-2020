import { dataClient } from "../client";
import { useEffect, useState } from "react";

export interface ICategoryItem {
  id: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  mainImageAlt: string;
}

export const categoryQueryObject = `{
  "id": _id,
  title,
  description,
  "mainImage": mainImage{asset->{url}},
  mainImageAlt,
}`;

export const useCategories = () => {
  const query = `*[_type == "category"]${categoryQueryObject}`;
  const [categories, setCategories] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    dataClient.fetch(query).then((r: ICategoryItem[]) => {
      setCategories(r);
    });
  }, [query]);

  return [categories];
};

export const useCategory = (id?: string) => {
  const query = `*[_id == "${id}"]${categoryQueryObject}`;
  const [category, setCategory] = useState<ICategoryItem>({
    title: "",
    id: id || "",
    description: "",
    mainImage: { asset: {url: ""}},
    mainImageAlt: "",
  });

  useEffect(() => {
    if (!!id) {
      dataClient.fetch(query).then((r: ICategoryItem[]) => {
        if (!!r[0]) {
          setCategory(r[0]);
        }
      });
    }
  }, [id, query]);

  return [category];
};
