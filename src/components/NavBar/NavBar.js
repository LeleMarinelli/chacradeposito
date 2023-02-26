// import "./NavBar.scss";
// import logo from "../../logoFINAL.png";

// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import { BsFillMenuAppFill } from "react-icons/bs";

// export const NavBar = () => {
//   const [burgerToggle, setBurgerToggle] = useState(true);
//   const [abrirCerrar, setAbrirCerrar] = useState(false);

//   const burger = () => {
//     setBurgerToggle(!burgerToggle);
//   };

//   const menuCat = () => {
//     setAbrirCerrar(!abrirCerrar);
//   };

//   const hideMenu = () => {
//     setBurgerToggle(!burgerToggle);
//     setAbrirCerrar(false);
//   };

//   return (
//     <header className="header">
//       <h1>Depositos Chacra - Trenque Lauquen</h1>

//       <img className="topLogo" src={logo} alt="Logo Depositos" />

//       <nav>
//         <ul className={!burgerToggle ? "menuVisible" : ""}>
//           <li>
//             {" "}
//             <Link to="/" onClick={burger}>
//               {" "}
//               Inicio
//             </Link>{" "}
//           </li>

//           <div className="dropDown">
//             <li onClick={menuCat}> Quiénes somos </li>

//             {/* {abrirCerrar && (
//               <div className="dropDownMenu">
//                 <li className="dropDownItem">
//                   {" "}
//                   <Link to="/categories/brute" onClick={hideMenu}>
//                     {" "}
//                     Brute{" "}
//                   </Link>{" "}
//                 </li>
//                 <li className="dropDownItem">
//                   {" "}
//                   <Link to="/categories/polished" onClick={hideMenu}>
//                     {" "}
//                     Polished{" "}
//                   </Link>{" "}
//                 </li>
//               </div>
//             )} */}
//           </div>

//           <li>
//             {" "}
//             <Link to="/enciclopedia" onClick={burger}>
//               {" "}
//               Nuestros depositos{" "}
//             </Link>{" "}
//           </li>

//           <li>
//             {" "}
//             <Link to="/enciclopedia" onClick={burger}>
//               {" "}
//               Preguntas frecuentes{" "}
//             </Link>{" "}
//           </li>

//           <li>
//             {" "}
//             <Link to="/enciclopedia" onClick={burger}>
//               {" "}
//               Contacto{" "}
//             </Link>{" "}
//           </li>

//           {/* <li>
//             {" "}
//             <Link to="/contact" onClick={hideMenu}>
//               {" "}
//               Contacto{" "}
//             </Link>{" "}
//           </li> */}
//         </ul>
//       </nav>

//       <button className="burger" onClick={hideMenu}>
//         {" "}
//         <BsFillMenuAppFill className="icon" />{" "}
//       </button>
//     </header>
//   );
// };

// NAV BAR CON BOOTSTRAP
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// export function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
