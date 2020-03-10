import * as React from "react";
import { IBlockContent } from "../../data/hooks/use-authors";

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

const Heading1: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h1>{children}</h1>
);

const Heading2: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h2>{children}</h2>
);

const Heading3: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h3>{children}</h3>
);

const Heading4: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h4>{children}</h4>
);

const Heading5: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h5>{children}</h5>
);

const Heading6: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <h6>{children}</h6>
);

const Paragraph: React.FC<IContentProps> = ({ children }: IContentProps) => (
  <p>{children}</p>
);

const Quote: React.FC<IContentProps> = ({ children }: IContentProps) => (
    <q>{children}</q>
)