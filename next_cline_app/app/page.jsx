import styles from "./page.module.scss";
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Data />
      <Footer />
    </main>
  );
}
