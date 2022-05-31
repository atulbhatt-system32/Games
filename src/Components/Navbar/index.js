import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  close_btn,
  games,
  info,
  leader_boards,
  menu_bar,
  notifications,
  tournament,
  purchase,
  transfer,
} from "./assets";
import Button from "../Button";

export default function Navbar() {
  function closeNavbar() {
    document.getElementById("myNavbar").style.width = "0%";
    document.body.style.overflow = "auto";
  }

  function openNavbar() {
    document.getElementById("myNavbar").style.width = "70%";
    document.body.style.overflow = "hidden";
  }
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <nav>
      <div className={`${styles.nav_wrapper} ${styles.mobile}`}>
        <div className={styles.menu_bar_container} onClick={openNavbar}>
          <img src={menu_bar} alt="logo" />
        </div>

        <div className={styles.logo_text}>Games</div>

        <div className={styles.profile_icon}>
          <img
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div id="myNavbar" className={styles.overlay}>
        <div className={styles.close_btn_wrapper} onClick={closeNavbar}>
          <img
            src={close_btn}
            className={styles.close_btn}
            alt="close button"
          />
        </div>

        <div className={styles.overlay_content}>
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
          </div>
        </div>
      </div>

      <div className={`${styles.nav_wrapper} ${styles.desktop}`}>
        <div className={styles.nav_item}>Earn Rewards</div>
        <div className={`${styles.nav_item} ${styles.nav_icon}`}>
          <img src={notifications} alt="notifications" />
        </div>
        <div className={styles.nav_item} onClick={onOpenModal}>
          Log Out
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: styles.logout_modal }}
      >
        <div className={styles.modal_content}>
          <div className={styles.logout_modal_title}>Log Out?</div>
          <div className={styles.modal_cta}>
            <Button text="cancel" onClick={onCloseModal} />
            <Button text="log out" onClick={onCloseModal} />
          </div>
        </div>
      </Modal>
    </nav>
  );
}
