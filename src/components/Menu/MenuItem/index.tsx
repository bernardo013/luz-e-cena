import React from 'react'
import Link from '../../link'

interface MenuItensProps extends React.LiHTMLAttributes<HTMLLinkElement> {
    href?: string
}

const MenuItem = ({children, href = "#"}: MenuItensProps) => {
    return (
        <li>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default MenuItem;