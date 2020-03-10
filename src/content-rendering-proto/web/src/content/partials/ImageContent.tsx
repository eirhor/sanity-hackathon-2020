import * as React from "react";
import {Thumbnail} from 'react-foundation';

interface IImageContentProps {
  type: string;
  asset: {
    url: string;
  };
}

export const ImageContent: React.FC<IImageContentProps> = ({
  type,
  asset
}: IImageContentProps) => (<Thumbnail src={asset.url} alt={type} />);
