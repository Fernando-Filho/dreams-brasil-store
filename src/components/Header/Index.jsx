import { HeaderContainer, LogoContainer, Logo, Link, SideBar } from "./Styled"

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="#inicio">
                    {/* <Logo src="LogoProvisoria" alt={`zs`}/> */}
                    Dreams Brasil
                </Link>
            </LogoContainer>
            <SideBar>
                <Link href="#inicio">Novidades</Link>
                <Link href="#inicio">Sobre</Link>
                <Link href="#inicio">Fale conosco</Link>
            </SideBar>
        </HeaderContainer>
    )
}

export default Header;