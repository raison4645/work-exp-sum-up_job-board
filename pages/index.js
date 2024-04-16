import { useState } from "react";
import styles from "@/styles/pages/Home.module.scss";
import FeaJobs from "@/components/home/FeaJobs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData } from "@/common/api";
import Hero from "@/components/home/Hero";
import Articles from "@/components/home/Articles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  const positionRes = await getData('position');
  const articleRes = await getData('article');
  const eventRes = await getData('event');
  const feaJob = positionRes.data;
  const articles = articleRes.data;
  const events = eventRes.data;
  return { props: { feaJob, articles, events, ...await serverSideTranslations(locale, ['common'])} };
}

export default function index({ feaJob, articles, events }) {
  console.log(feaJob)
  // temperarily select 3 articles in homepage
  const homeArticles = [];
  const homeEvents = [];
  for (let i = 0; i < 4; i++) {
    homeArticles.push(articles[i])
    homeEvents.push(events[i])
  }

  const [keyword, setKeyword] = useState("");
  const onInputChange = (e) => {
    const word = e.target.value;
    setKeyword(word);
  };

  return (
    <div className={styles.home}>
      <Hero
        onInputChange={onInputChange}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <h2>Featured Jobs</h2>
      <FeaJobs feaJob={feaJob}/>
      <h2>Events</h2>
      <Articles homeArticles={homeEvents} section={'Events'}/>
    </div>
  );
}