import React, { useEffect, useState } from 'react';
import { getSidebarItems } from '../../../APIcalls/SidebarCalls';
import './Sidebar.css';
import SidebarItem from './SidebarItem';

//TODO: this needs to be reinvented..

const Sidebar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getSidebarItems().then((response: any) => {
      setItems(response.data.sidebarItems);
    });
  }, []);

  return (
    <aside>
      {items.map((item: any) => {
        return (
          <SidebarItem
            key={item.id}
            tiitle={item.title}
            content={item.content}
            // position={item.position}
          />
        );
      })}
    </aside>
  );
};

export default Sidebar;
