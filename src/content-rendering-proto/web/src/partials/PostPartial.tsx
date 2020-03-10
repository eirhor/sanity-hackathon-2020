import * as React from "react";
import { IPostItem } from "../data/hooks/use-posts";
import { Link } from "react-router-dom";
import {MediaObject, MediaObjectSection, Thumbnail} from 'react-foundation';

interface IPostPartialProps extends IPostItem {
}

export const PostPartial: React.FC<IPostPartialProps> = ({
  title,
  id,
  mainImage,
  mainImageAlt
}: IPostPartialProps) => (
    <Link to={`/posts/${id}`}>
        <MediaObject stackForSmall={true}>
            <MediaObjectSection isMiddle={true}>
                <Thumbnail src={mainImage.asset.url} alt={mainImageAlt} />
            </MediaObjectSection>
            <MediaObjectSection isMain={true}>
                <h4>{title}</h4>
            </MediaObjectSection>
        </MediaObject>
    </Link>
);
