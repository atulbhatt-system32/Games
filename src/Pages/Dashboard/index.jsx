import styles from "./Dashboard.module.scss";
import { thumbnail1, thumbnail2 } from "./assets";
import { Button } from "../../Components";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>Let’s choose the game</div>
      <div className={styles.games_container}>
        <div className={styles.game_card}>
          <div className={styles.game_thumbnail}>
            <img src={thumbnail1} alt="game_thumbnail" />
          </div>
          <div className={styles.card_body}>
            <div className={styles.game_title}>Fishing Expert</div>
            <div className={styles.game_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.cta_wrapper}>
              <Button text="Play" />
            </div>
          </div>
        </div>

        <div className={styles.game_card}>
          <div className={styles.game_thumbnail}>
            <img src={thumbnail2} alt="game_thumbnail" />
          </div>
          <div className={styles.card_body}>
            <div className={styles.game_title}>Axie infinity</div>
            <div className={styles.game_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.cta_wrapper}>
              <Button text="Play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
