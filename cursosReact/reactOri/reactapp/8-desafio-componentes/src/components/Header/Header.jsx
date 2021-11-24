function Header() {
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        <li>
          <a href="/" style={{ textDecoration: 'none', fontWeight: 700, color: 'blue'}}>
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" style={{ textDecoration: 'none', fontWeight: 700, color: 'blue'}}>
            Produtos
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
