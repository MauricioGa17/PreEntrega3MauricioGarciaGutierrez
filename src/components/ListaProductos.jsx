import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const ListaProductos = () => {
  return (
    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
        <NavDropdown.Item><NavLink to={`/category/filtros`} className='nav-link'>Filtros</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/calentadores`} className='nav-link'>Calentadores</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/alimentos`} className='nav-link'>Alimentos</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/iluminacion`} className='nav-link'>Iluminacion</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/sustratos`} className='nav-link'>Decoracion y Sustratos</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/acondicionadores`} className='nav-link'>Salud y Acondicionadores</NavLink></NavDropdown.Item>
    </NavDropdown>
  )
}

export default ListaProductos