import React from 'react';
import './SidebarNav.css';
import logo from 'logo.svg';

const SidebarNavItem = function(props) {
  let item = props.item
  return (
    <li className={`nav-item ${item.items && item.active ? "menu-open" : ""}`} key={item.href}>
      <a href={item.href} className={`nav-link ${item.active ? "active" : ""}`}>
        <p>
          {item.label}
          {item.items && (
            <i className="right fas fa-angle-right"></i>
          )}
        </p>
      </a>
      {item.items && (
        <ul className="nav nav-treeview pl-3">
          {item.items.map( subItem => (
            <SidebarNavItem item={subItem} key={subItem.label} />
          ))}
        </ul>
      )}
    </li>
  )
};

function SidebarNav(props) {
  return (
    <div className="SidebarNav">
     {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary ProgressTeaching-sidebar">

        {/* Brand Logo */}
        <a href="/" className="brand-link w-100 px-3 py-5">
          <img src={logo} alt="ProgressTeaching Logo" className="brand-image float-none" />
          <span className="brand-text font-weight-light sr-only">ProgressTeaching</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">

          {/* Sidebar Menu */}
          <nav className="mt-2">

            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              {/* MENU ITEM HERE */}
              {props.items && props.items.map( item => {
                return (
                  <SidebarNavItem item={item} key={item.label} />
                );
              })}
            </ul>

          </nav>
          {/* /.sidebar-menu */}

        </div>
        {/* /.sidebar */}

      </aside>
    </div>
  );
}

export default SidebarNav;
