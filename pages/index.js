import { useState } from "react";
import styles from "@/styles/pages/Home.module.scss";
import ArticleCard from "@/components/ArticleCard";
import JobCard from "@/components/JobCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoComplete from "@/components/AutoComplete";
import { Select, MenuItem, FormControl } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProcessButton from "@/components/search/ProcessButton";
import { getData } from "@/common/api";
import Image from "next/image";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "react-i18next";
// import positionRes from '@/dummy/position.json'
// import articleRes from '@/dummy/articles.json'
// import eventRes from '@/dummy/event.json'

const jobSliderSettings = {
  dots: true,
  arrows: false,
  speed: 500,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScrol: 1,
      },
    },
  ],
};

const articleSliderSettings = {
  dots: true,
  arrows: false,
  speed: 100,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export async function getServerSideProps() {
  const positionRes = await getData('position');
  const articleRes = await getData('article');
  const eventRes = await getData('event');
  const feaJob = positionRes.data;
  const articles = articleRes.data;
  const events = eventRes.data;
  return { props: { feaJob, articles, events } };
}

export default function index({ feaJob, articles, events }) {

  // temperarily select 3 articles in homepage
  const homeArticles = [];
  const homeEvents = [];
  for (let i = 0; i < 3; i++) {
    homeArticles.push(articles[i])
    homeEvents.push(events[i])
  }

  const [searchBy, setSearchBy] = useState("Job Function");
  const [keyword, setKeyword] = useState("");
  const onInputChange = (e) => {
    const word = e.target.value;
    setKeyword(word);
  };

  return (
    <div className={styles.home}>
      <Image
        src='/sample_img/homebgd.jpg'
        height={500}
        width={1440}
        alt='HKSTP Talent Pool home background photo'
        style={{zIndex: "0", top: '60px', width: '100vw', position: 'absolute'}}
      />
      <section className={styles.job_section}>
        <h1 className={styles.head_title}>
          <strong>HKSTP</strong> Talent Pool
        </h1>
        <div className={styles.search_section}>
          <AutoComplete
            keyword={keyword}
            onInputChange={onInputChange}
            data={[]}
          />
          <div>
            <FormControl sx={{ width: '100%', height: 40, background: "#fff" }}>
              <Select
                value={searchBy}
                sx={{ height: 40, borderRadius: 0, fontSize: 15 }}
                onChange={(e) => setSearchBy(e.target.value)}
                displayEmpty
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value={"Job Function"}>Job Function</MenuItem>
                <MenuItem value={"Company Name"}>Company Name</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ProcessButton keyword={keyword} />
        </div>
        <h3 className={styles.feajob_title}>Featured Jobs</h3>
        <div className={styles.jobcards_container}>
          <Slider {...jobSliderSettings}>
            {feaJob.map((job) => (
              <JobCard
                key={job.id}
                jobTitle={job.job_title}
                companyName={job.company_info.company_name}
                skills={job.skills}
                workmode={job.work_mode}
                publishAt={job.publish_at}
              />
            ))}
          </Slider>
        </div>
      </section>
      <section className={styles.article_section}>
        <h3>Articles</h3>
        <div className={styles.articles_container}>
          <Slider {...articleSliderSettings}>
          {
            homeArticles.map((article) => (
              <ArticleCard
                key={article?.id}
                cardText={article?.excerpt_text}
                title={article?.title}
                date={article?.publish_at}
                url={article?.external_url}
              />
            ))
          }
          </Slider>
          <div className={styles.explore_more}>
            <a href="/articles"><button>More Articles</button></a>
          </div>
        </div>
      </section>
      <section className={styles.event_section}>
        <h3>Events</h3>
        <div className={styles.articles_container}>
        <Slider {...articleSliderSettings}>
        {
          homeEvents.map((event) => (
            <ArticleCard
              key={event?.id}
              cardText={event?.excerpt_text}
              title={event?.title}
              date={event?.publish_at}
              url={event?.external_url}
            />
          ))
        }
        </Slider>
        <div className={styles.explore_more}>
            <a href="/articles"><button>More Events</button></a>
        </div>
        </div>
      </section>
    </div>
  );
}

// export async function getServerSideProps({ locale }) {
//   return {
//     props: {
//       ...await serverSideTranslations(locale, ['common'])
//     }
//   }
// }