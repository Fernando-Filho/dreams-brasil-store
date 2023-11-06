import { HeaderContainer, LogoContainer, Logo, Link, SideBar } from "./Styled"

import { useState } from "react";

const Header = () => {

    const [display, setDisplay] = useState(true);

    const displaySideBar = display === true ? 'flex' : 'none';

    function handleDisplay () {
        setDisplay(!display) 
    }

    const Menu = () => {
        return(
            <styled.display="none">
                <ion-icon name="menu-outline" font-size='32px' onClick={handleDisplay}></ion-icon>
            </styled.display=>
        )
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="#inicio">
                    {/* <Logo src="LogoProvisoria" alt={`zs`}/> */}
                    Dreams Brasil
                </Link>
            </LogoContainer>
            <Menu/>
            <SideBar displaySideBar={displaySideBar}>
                <Link href="#inicio">Novidades</Link>
                <Link href="#inicio">Sobre</Link>
                <Link href="#inicio">Fale conosco</Link>
            </SideBar>
        </HeaderContainer>
    )
}

export default Header;