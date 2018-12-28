import Nav from "./Nav";
import Link from 'next/link'
import { StyledHeader, Logo } from './Header-styles';

const Header = props => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>Sick Fits</a>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;
