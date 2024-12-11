import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LogoWrapper from "@/Components/CommonComponent/LogoWrapper";
import MENUITEMS from "./MenuData";
import AccountContext from "@/Helper/AccountContext";
import SettingContext from "@/Helper/SettingContext";
import { getPermissionArray } from "@/Components/Common/getPermissonArray";

const MenuList = dynamic(() => import("./MenuList"), {
  ssr: false,
});
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { role, setRole } = useContext(AccountContext);
  const { sidebarOpen, setSidebarOpen } = useContext(SettingContext);

  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    
    if (!ISSERVER) {
      const storedRole = localStorage.getItem("role");
      
      if (storedRole) {
        try {
          const parsedRole = JSON.parse(storedRole);
  
          // Vérification si parsedRole est un objet valide et possède la propriété "name"
          if (parsedRole && parsedRole.name) {
            setRole(parsedRole.name);
          } else {
            console.error("Le rôle stocké ne contient pas de propriété 'name' :", parsedRole);
          }
        } catch (error) {
          console.error("Erreur lors de la conversion JSON de storedRole :", error);
        }
      }
    }
  }, []);
  

  const modifiedSidebar = getPermissionArray(MENUITEMS);

  return (
    <div className={`sidebar-wrapper ${sidebarOpen ? "close_icon" : ""}`}>
      <div id="sidebarEffect" />
      <div className={`${mounted ? "skeleton-loader" : ""}`}>
        <LogoWrapper setSidebarOpen={setSidebarOpen} />
        <nav className="sidebar-main">
          <div id="sidebar-menu">
            <ul className="sidebar-links" id="simple-bar">
              {modifiedSidebar && <MenuList menu={modifiedSidebar} level={0} activeMenu={activeMenu} setActiveMenu={setActiveMenu} key={role} />}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
