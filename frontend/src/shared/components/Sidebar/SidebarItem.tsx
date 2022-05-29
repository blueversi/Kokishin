import React from 'react';

interface SidebarItemProps {
  tiitle: string;
  content: string;
  position?: number;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className='sidebar-item'>
      <h3>{props.tiitle}</h3>
      <div>{props.content}</div>
    </div>
  );
};

export default SidebarItem;
