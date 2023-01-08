import StoriesHero from "../hero/StoriesHero";
import StoriesList from "../stories list/StoriesList";
import styles from "./Stories.module.scss";

const Stories = () => {
  return (
    <>
      <StoriesHero />
      <StoriesList />
    </>
  );
};

export default Stories;
