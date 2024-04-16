import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/pages/Search.module.scss";
import Pagination from "@mui/material/Pagination";
import JobDetails from "@/components/details/JobDetails";
import JobCard from "@/components/JobCard";
import JobSort from "@/components/search/JobSort";
import FilterBar from "@/components/search/FilterBar"
import SearchSkeleton from "@/components/skeleton/SearchSkeleton";
import { getData } from "@/common/api";
import convertParams from "@/common/convertParams";
import { useWidth } from "@/hooks/useWidth"
import slugHandle from "@/common/slugHandle";
import position from '@/dummy/position.json'
import ProcessButton from "@/components/search/ProcessButton";

export default function index() {
  const [filters, setFilters] = useState({
    industry: [],
    job_function: [],
    job_level: [],
    employment_type: [],
    education_level: [],
    work_experience: []
  })
  const [jobPosts, setjobPosts] = useState(position);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(position.data[0]);
  const [lastPage, setLastPage] = useState(1)

  const router = useRouter();
  const width = useWidth();

  const fetchPost = async () => {
    const data = await getData('position?page=')
    setLastPage(data.meta.last_page)
    setjobPosts(data);
    setIsLoading(false);
    setSelectedPost(data.data[0])
  };

  const onClickPost = (post) => {
    const slug = slugHandle(post.job_title)
    width > 1023
      ? setSelectedPost(post)
      : window.location.href = `/job/${post.id}/${slug}`
  }

  useEffect(() => {
    // TODO: check the param key's validity before update the filter
    setFilters({...filters, ...convertParams.parseFromParams(router.query)})
    fetchPost();
  }, [router.query]);

  if (isLoading) return <SearchSkeleton />;

  return (
    <div className={styles.search_page}>
      {filters.length > 0 && <FilterBar filters={filters} setFilters={setFilters} />}
      <FilterBar filters={filters} setFilters={setFilters} router={router} />
      <main className={styles.search_content}>
        <section className={styles.cards_section}>
          <JobSort />
          <div className={styles.jobcards_container}>
            {jobPosts.data.map((post, idx) =>
            <div
              onClick={() => onClickPost(post)}
              key={`${idx}-${post.reference_number}`}
            >
              <JobCard
                jobTitle={post.job_title}
                companyName={post?.company?.company_name}
                skills={post.skill}
                workmode={post.work_mode}
                publishAt={post.publish_at}
              />
            </div>
            )}
          </div>
          <div className={styles.pagination_container}>
            <Pagination count={lastPage} showFirstButton showLpastButton />
          </div>
        </section>
        <section className={styles.details_section}>
          <JobDetails
            details={selectedPost}
          />
        <div className={styles.apply_container}>
          <ProcessButton jobId={selectedPost.id} slug={slugHandle(selectedPost.company.company_name)} />
        </div>
        </section>
      </main>
    </div>
  );
}
