import React from "react";
import {
  games,
  tournament,
  leader_boards,
  notifications,
  info,
  invite,
  purchase,
  transfer,
} from "../Navbar/assets";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside>
      {" "}
      <div className={styles.overlay_content}>
        <div className={`${styles.nav_item} ${styles.profile}`}>
          <div className={styles.profile_icon}>
            <img
              src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
              alt="profile"
            />
          </div>
          <div className={styles.nav_title}>User Name</div>
        </div>
        <div className={`${styles.nav_item} ${styles.active}`}>
          <img src={games} alt="games" />
          <div className={styles.nav_title}>Games</div>
        </div>
        <div className={styles.nav_item}>
          <img src={tournament} alt="tournament" />
          <div className={styles.nav_title}>Tournaments</div>
        </div>
        <div className={styles.nav_item}>
          <img src={leader_boards} alt="leader_boards" />
          <div className={styles.nav_title}>Leader Boards</div>
        </div>
        <div className={styles.nav_item}>
          <img src={notifications} alt="notifications" />
          <div className={styles.nav_title}>Notification</div>
        </div>
        <div className={styles.nav_item}>
          <img src={info} alt="info" />
          <div className={styles.nav_title}>Gamefly Info</div>
        </div>

        <div className={styles.nav_cta_wrapper}>
          <div className={styles.nav_cta}>
            <img src={purchase} alt="purchase" />
            <div className={styles.nav_title}>Make a Purchase</div>
          </div>
          <div className={styles.nav_cta}>
            <img src={transfer} alt="transfer" />
            <div className={styles.nav_title}>Make a Transfer</div>
          </div>
          <div className={styles.nav_cta}>
            <img src={invite} alt="invite" />
            <div className={styles.nav_title}>Invite Friend</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
