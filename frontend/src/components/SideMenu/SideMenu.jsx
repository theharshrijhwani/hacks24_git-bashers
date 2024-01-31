import React, { useEffect } from "react";

// STYLES //
// import styles from "./side-menu.module.css";

// // COMPONENTS //
// import Image from "react-image"; // Assuming you have a replacement for `next/image`
// import { Link } from "react-router-dom"; // Assuming you have a replacement for Next.js Link
// // import Icon from "../../Icon";

// // IMAGES //

// // NAVIGATION //
// import { useLocation } from "react-router-dom"; // Assuming you have a replacement for `next/navigation`

// // SERVICES //

// // UTILS //
// import { convertToKebabCase } from "@/utils/string-parser";

// // PLUGINS //

// // CONSTANTS //
// import { CONSTANTS, menu } from "@/infrastructure/constants";

// // CONTEXTS //
// import { useTeamContext } from "@/contexts/team.context";

const SideMenu = ({ isSideMenuMinimized = false, closeMenu }) => {
  // NAVIGATION //
  const location = useLocation();

  // Define Contexts
  const { team } = useTeamContext();

  // STATES //

  // Helper Function

  // Use Effect

  return (
    // <div
    //   id="side-menu"
    //   className={`${styles.sideMenuMain} ${
    //     isSideMenuMinimized && styles.isCollapsed
    //   }`}
    // >
    //   {/* Side Menu Container  */}
    //   <div
    //     className={`${styles.sideMenuContainer} ${
    //       !isSideMenuMinimized ? styles.sideMenuActive : ""
    //     }`}
    //   >
    //     {/* Side Menu */}
    //     <div className={styles.sideMenu}>
    //       {/* Brand Logo */}
    //       <div className={styles.logoWrapper}>
    //         <Image
    //           src={team?.logo ?? ""}
    //           alt={team?.name ?? "Brand Logo"}
    //           width={60}
    //           height={76}
    //         />
    //       </div>

    //       {/* Menu */}
    //       <div className={styles.menuWrapper}>
    //         {menu.map((item, index) => (
    //           <div
    //             className={styles.menuItemsWrapper}
    //             key={`menu-wrap-${convertToKebabCase(
    //               item.title || ""
    //             )}-${index}`}
    //           >
    //             <p className={styles.menuTitle}>{item.title}</p>

    //             {/* Menu Items */}
    //             {item.items.map((subItem, index) => (
    //               <div
    //                 className={`${styles.menuItem} ${
    //                   location.pathname === subItem.path && styles.active
    //                 }`}
    //                 key={`menu-option-${convertToKebabCase(
    //                   subItem.name || ""
    //                 )}-${index}`}
    //               >
    //                 <Link
    //                   to={subItem.path}
    //                   className={styles.link}
    //                   onClick={() => CONSTANTS.IS_TABLET && closeMenu(true)}
    //                 >
    //                   <Icon
    //                     iconName={subItem.icon}
    //                     className={styles.menuIcon}
    //                   />
    //                   <p className={styles.menuItemText}>{subItem.name}</p>
    //                 </Link>
    //               </div>
    //             ))}
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Logout */}
    //     <Link to="www.google.com" className={styles.logoutWrapper}>
    //       <span className={styles.logoutText}>Logout</span>
    //       <div className={styles.iconWrapper}>
    //         <Icon iconName="Logout" className={styles.menuIcon} />
    //       </div>
    //     </Link>
    //   </div>

    //   {/* Mobile Menu Overlay */}
    //   <div className={styles.overlay} onClick={() => closeMenu(true)}></div>
    // </div>
    <></>
  );
};

export default SideMenu;
