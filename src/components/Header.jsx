import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';

export default function Header({data}) {
    const brandName = data?.brandName;
    const menus = data.menus;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar expand={true} className='bg-primary'>
                <NavbarBrand href="/">{brandName}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        {menus.map(menu => 

                        <NavItem>
                            <NavLink href={menu.path}>{menu.title}</NavLink>
                        </NavItem>
                        )}
                        
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </>
    )
}
