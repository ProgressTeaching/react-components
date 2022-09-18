import { render, screen } from '@testing-library/react';
import SidebarNav from './SidebarNav';

test('renders sidebar navigation', () => {
  const { container } = render(<SidebarNav />);

  expect(container.firstChild).toHaveClass('SidebarNav');
});

describe('Branding', () => {
  test('Logo must have src and alt', () => {
    render(<SidebarNav />);
    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute('src', SidebarNav.logo);
    expect(logo).toHaveAttribute('alt', 'ProgressTeaching Logo');
  });

  test('Screen reader text is rendered in the DOM', () => {
    const { container } = render(<SidebarNav />);
    const srText = container.querySelector('.brand-link .brand-text');

    expect(srText).toHaveClass('sr-only');
  });
});

describe('With nav items', () => {
  test('with no items', () => {
    const { container } = render(<SidebarNav />);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(0);
  });

  test('with 1 navigation items', () => {
    const { container } = render(<SidebarNav items={[
      { label: "item 1", href: "/item-1" },
    ]}/>);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(1);
    expect(navItems[0].querySelector('.nav-link')).toHaveAttribute('href', '/item-1');
    expect(navItems[0].querySelector('.nav-link')).toHaveTextContent('item 1')
  });

  test('with multiple navigation items', () => {
    const { container } = render(<SidebarNav items={[
      { label: "item 1", href: "/item-1" },
      { label: "item 2", href: "/item-2" },
      { label: "item 3", href: "/item-3" },
    ]}/>);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(3);
    expect(navItems[0].querySelector('.nav-link')).toHaveAttribute('href', '/item-1');
    expect(navItems[0].querySelector('.nav-link')).toHaveTextContent('item 1');
    expect(navItems[1].querySelector('.nav-link')).toHaveAttribute('href', '/item-2');
    expect(navItems[1].querySelector('.nav-link')).toHaveTextContent('item 2');
    expect(navItems[2].querySelector('.nav-link')).toHaveAttribute('href', '/item-3');
    expect(navItems[2].querySelector('.nav-link')).toHaveTextContent('item 3')
  });

  test('with multiple nested navigation items', () => {
    const { container } = render(<SidebarNav items={[
      { label: "item 1", href: "/item-1" },
      { label: "item 2", href: "/item-2" },
      { label: "item 3", href: "/item-3", items: [
        { label: "item 3.1", href: "/item-3-1" },
        { label: "item 3.2", href: "/item-3-2" },
      ]},
    ]}/>);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(5);
    expect(navItems[0].querySelector('.nav-link')).toHaveAttribute('href', '/item-1');
    expect(navItems[0].querySelector('.nav-link')).toHaveTextContent('item 1');
    expect(navItems[1].querySelector('.nav-link')).toHaveAttribute('href', '/item-2');
    expect(navItems[1].querySelector('.nav-link')).toHaveTextContent('item 2');
    expect(navItems[2].querySelector('.nav-link')).toHaveAttribute('href', '/item-3');
    expect(navItems[2].querySelector('.nav-link')).toHaveTextContent('item 3')

    const nestedNavItems = container.querySelectorAll('.nav-item .nav-treeview .nav-item');
    expect(nestedNavItems.length).toBe(2);
    expect(nestedNavItems[0].querySelector('.nav-link')).toHaveAttribute('href', '/item-3-1');
    expect(nestedNavItems[0].querySelector('.nav-link')).toHaveTextContent('item 3.1');
    expect(nestedNavItems[1].querySelector('.nav-link')).toHaveAttribute('href', '/item-3-2');
    expect(nestedNavItems[1].querySelector('.nav-link')).toHaveTextContent('item 3.2');
  });

  test('with active item', () => {
    const { container } = render(<SidebarNav items={[
      { label: "item 1", href: "/item-1" },
      { label: "item 2", href: "/item-2" },
      { label: "item active", href: "/item-active", active: true },
    ]}/>);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(3);
    expect(navItems[2].querySelector('.nav-link')).toHaveAttribute('href', '/item-active');
    expect(navItems[2].querySelector('.nav-link')).toHaveTextContent('item active');
    expect(navItems[2].querySelector('.nav-link')).toHaveClass('active');
  });

  test('with nested active item', () => {
    const { container } = render(<SidebarNav items={[
      { label: "item 1", href: "/item-1" },
      { label: "item 2", href: "/item-2" },
      { label: "item active", href: "/item-active", active: true, items: [
        { label: "item 3.1", href: "/item-3-1", active: true },
        { label: "item 3.2", href: "/item-3-2" },
      ]},
    ]}/>);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navItems.length).toBe(5);
    expect(navItems[2].querySelector('.nav-link')).toHaveAttribute('href', '/item-active');
    expect(navItems[2].querySelector('.nav-link')).toHaveTextContent('item active');
    expect(navItems[2].querySelector('.nav-link')).toHaveClass('active');

    const nestedNavItems = container.querySelectorAll('.nav-item .nav-treeview .nav-item');
    expect(nestedNavItems.length).toBe(2);
    expect(nestedNavItems[0].querySelector('.nav-link')).toHaveAttribute('href', '/item-3-1');
    expect(nestedNavItems[0].querySelector('.nav-link')).toHaveTextContent('item 3.1');
    expect(nestedNavItems[0].querySelector('.nav-link')).toHaveClass('active');
    expect(nestedNavItems[1].querySelector('.nav-link')).toHaveAttribute('href', '/item-3-2');
    expect(nestedNavItems[1].querySelector('.nav-link')).toHaveTextContent('item 3.2');
    expect(nestedNavItems[1].querySelector('.nav-link')).not.toHaveClass('active');
  });
});
