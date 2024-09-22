export default function CCETHeader() {
  return (
    <>
      <div id="barra-brasil">
        <ul id="menu-barra-temp">
          <li>
            <a href="http://brasil.gov.br">Portal do Governo Brasileiro</a>
          </li>
        </ul>
      </div>
      <div id="barra-ccet">
        <div className="bct-menu">
          <div className="bctm-item borda">
            <a
              href="https://www.uniriotec.br/portal-ccet"
              target="_blank"
              title="Portal CCET"
              rel="noreferrer"
            >
              PORTAL CCET
            </a>
          </div>
          <div className="bctm-item msg">
            <a
              href="https://www.unirio.br/institucional/missao-visao-e-principios"
              target="_blank"
              title="Missão, visão e princípios"
              rel="noreferrer"
            >
              UNIRIO \\ CCET - Ensino, Pesquisa e Extensão - Produzir e
              disseminar conhecimento
            </a>
          </div>
          <div className="bctm-item borda">
            <a
              href="http://www.unirio.br"
              target="_blank"
              title="Página UNIRIO"
              rel="noreferrer"
            >
              UNIRIO <span className="uniriohome" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
