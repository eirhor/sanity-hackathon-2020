import * as React from 'react';
import { classNames } from 'classnames';
import {Link} from 'react-router-dom';

export interface IAnchorProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
        >{
    href: string;
    children?: React.ReactNode;
    baseClassName?: string | null;
    resetStyling?: boolean;
}

export function useAnchorClassNames(
    baseClassName: string,
    className?: string,
    resetStyling?: boolean
) {
    return classNames(baseClassName, className, {
        'a--reset': resetStyling,
    });
}

export function Anchor({
                           className,
                           baseClassName = 'a',
                           children,
                           resetStyling,
                            href
                       }: IAnchorProps) {
    let tag = 'a';
    if (!href) {
        tag = 'span';
    }

    const formattedClassName = useAnchorClassNames(baseClassName, className, resetStyling);

    return (
        <Link to={href} className={formattedClassName}>
            {children}
        </Link>
    );
}
