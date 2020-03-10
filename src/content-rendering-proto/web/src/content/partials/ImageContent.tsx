import * as React from "react";

interface IImageContentProps {
  type: string;
  asset: {
    url: string;
  };
}

export const ImageContent: React.FC<IImageContentProps> = ({
  type,
  asset
}: IImageContentProps) => (<img className={'img'} src={asset.url} alt={type} />);
