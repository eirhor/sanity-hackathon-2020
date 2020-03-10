import { useEffect, useState } from "react";
import { dataClient } from "../client";
import { authorQueryObject, IAuthorItem } from "./use-authors";
import { categoryQueryObject, ICategoryItem } from "./use-categories";

export interface IPostItem {
  id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  mainImageAlt: string;
  author: IAuthorItem;
  categories: ICategoryItem[];
  content: any[];
}

export const postsQueryObject = `{
  "id": _id,
  "type": _type,
  title,
  "mainImage": mainImage{asset->{url}},
  mainImageAlt,
  "author": author->${authorQueryObject},
  "categories": categories[]->${categoryQueryObject},
  "content": body[]{
    _type == 'block' => {
      "type": _type,
      children[]{
        text
      },
      style
    },
    _type == 'image' => {
      "type": _type,
      asset->{url}
    }
  }
}`;

export const usePost = (postId?: string) => {
  const query = `*[_type == "post" && _id == "${postId}"]${postsQueryObject}`;
  const [post, setPost] = useState<IPostItem>({
    id: postId || "",
    title: "",
    mainImage: {
      asset: {
        url: ""
      }
    },
    mainImageAlt: "",
    author: {
      id: "",
      name: "",
      image: {
        asset: {
          url: ""
        }
      },
      content: []
    },
    categories: [],
    content: []
  });

  useEffect(() => {
    if (!!postId) {
      dataClient.fetch(query).then((r: IPostItem[]) => {
        if (!!r[0]) {
          setPost(r[0]);
        }
      });
    }
  }, [postId, query]);

  return [post];
};

export const usePosts = () => {
  const query = `*[_type == "post"]${postsQueryObject}`;
  const [posts, setPosts] = useState<IPostItem[]>([]);

  useEffect(() => {
    dataClient.fetch(query).then((r: IPostItem[]) => {
      setPosts(r);
    });
  }, [query]);

  return [posts];
};

export const usePostsWithCategory = (categoryId?: string) => {
  const query = `*[_type == "post" && references("${categoryId}")]${postsQueryObject}`;
  const [posts, setPosts] = useState<IPostItem[]>([]);

  useEffect(() => {
    if (!!categoryId) {
      dataClient.fetch(query).then((r: IPostItem[]) => {
        setPosts(r);
      });
    }
  }, [categoryId, query]);

  return [posts];
};
