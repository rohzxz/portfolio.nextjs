import styles from "./Main.module.css";
import { socialLinks } from "../Data";
const Main = () => {
  return (
    <div>
      <main className="container">
        <section className={styles.main_section}>
          <div className={styles.main}>
            <p>Life is Good....</p>
            <h1>
              Hi,I m <span>Rohit</span> <br />A Front-End Web Developer
            </h1>
            <p>
              A <span>Web Developer </span> with a passion for learning and
              creating.
            </p>
          </div>
          <div className={styles.social_links}>
            {socialLinks.map(({ id, href, icon }) => {
              return (
                <div key={id} className={styles.social_bar}>
                  <a href={href}>
                    <i>{icon}</i>
                  </a>
                </div>
              );
            })}
          </div>
          <div className={styles.resume_section}>
            <h3>
              Download
              <a href="/path/to/myc.txt" download>
                My Resume
              </a>
              Please.
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;