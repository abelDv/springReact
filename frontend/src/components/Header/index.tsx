import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Sistema Financeiro" />
                    <h1>Projeto Vendas</h1>
                    <p>
                        Desenvolvido por
                        <a href="http://www.linkedin.com/in/abel-melo-borges-9b229366"> Abel Borges</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header