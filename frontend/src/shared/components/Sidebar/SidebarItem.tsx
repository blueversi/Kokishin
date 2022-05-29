import React from 'react';

import './Sidebar.css';
interface SidebarItemProps {
  tiitle: string;
  content: string;
  position?: number;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className='sidebar-item'>
      <h3>{props.tiitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
};

export default SidebarItem;
