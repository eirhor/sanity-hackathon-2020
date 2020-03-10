import * as React from "react";
import { IBlockContent } from "../../data/hooks/use-authors";
import {Heading1, Heading2, Heading3, Heading4, Heading5, Paragraph, Quote} from 'geta-core';

interface IBlockContentProps extends IBlockContent {}
interface IContentProps {
  children: React.ReactNode;
}

export const BlockContent: React.FC<IBlockContentProps> = ({
  children,
  style
}: IBlockContentProps) => {
  switch (style) {
    case "h1":
      return <Heading1>{children[0].text}</Heading1>;
    case "h2":
      return <Heading2>{children[0].text}</Heading2>;
    case "h3":
      return <Heading3>{children[0].text}</Heading3>;
    case "h4":
      return <Heading4>{children[0].text}</Heading4>;
    case "h5":
      return <Heading5>{children[0].text}</Heading5>;
    case "h6":
      return <Heading6>{children[0].text}</Heading6>;
    case "q":
      return <Quote>{children[0].text}</Quote>
    default:
      return <Paragraph>{children[0].text}</Paragraph>;
  }
};

const Heading6: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h6>{children}</h6>
);
