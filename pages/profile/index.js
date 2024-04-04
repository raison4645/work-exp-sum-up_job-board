import { getSession, useSession } from "next-auth/react"
import ProfileMenu from "@/components/profile/sections/ProfileMenu";
import styles from "@/styles/pages/Profile.module.scss"
import UserProfile from "@/components/profile/sections/UserProfile";
import AttendedEvt from "@/components/profile/sections/AttendedEvt";
import JobAlert from "@/components/profile/sections/JobAlert";
import Settings from "@/components/profile/sections/Settings";
import RecJobs from "@/components/profile/sections/RecJobs";
import SavedJobs from "@/components/profile/sections/SavedJobs";
import AppliedJobs from "@/components/profile/sections/AppliedJobs";
import JobInvitation from "@/components/profile/sections/JobInvitation";
import ManageCV from "@/components/profile/sections/ManageCV"
import { useRouter } from "next/router";
// TODO:
// 1. get user profiles and preference from the server by the auth token
// 2. onClick edit button, preset the info in input field
// 3. when save/submit action acted, validate the data
// 4. if validation passed, make put request to the server, and get the profile again

export default function Page() {
  const { data: session } = useSession();
  const { query: query } = useRouter();
  const sectionQueries = [
    {
      query: '',
      node: <UserProfile user={session?.user} key='userprofile' />,
      name: 'Profile'
    },
    {
      query: 'manage_cv',
      node: <ManageCV user={session?.user} key='manage_cv' />,
      name: 'Manage CV'
    },
    {
      query: 'attended_events',
      node: <AttendedEvt key={query} />,
      name: 'Attended Events'
    },
    {
      query: 'Your Jobs',
      node: null,
      name: 'Your Jobs'
    },
    {
      query: 'rec_jobs',
      node: <RecJobs key={query} />,
      name: 'Recommended Jobs'
    },
    {
      query: 'saved_jobs',
      node: <SavedJobs key={query} />,
      name: 'Saved Jobs'
    },
    {
      query: 'applied_jobs',
      node: <AppliedJobs key={query} />,
      name: 'Applied Jobs'
    },
    {
      query: 'job_invitation',
      node: <JobInvitation />,
      name: 'Interview Invitation'
    },
    {
      query: 'job_alert',
      node: <JobAlert />,
      name: 'Job Alert'
    },
    {
      query: 'settings',
      node: <Settings key={query} />,
      name: 'Settings'
    },
  ]
  return (
    <div className={styles.profile_page}>
      <ProfileMenu sectionQueries={sectionQueries} />
      <div className={styles.profile_sections_container}>
        {sectionQueries.map(item => item.query === query.section && <h2 className={styles.section_title}>{item.name}</h2>)}
        {
          query.section
            ? sectionQueries.map((item) => query.section === item.query && item.node)
            : sectionQueries[0].node
        }
      </div>
    </div>
  )
}
// export async function getServerSideProps(context) {
//   const { page: currentQuery } = context.query
//   return {
//     props: {
//       session: await getSession(context),
//       currentQuery: currentQuery
//     }
//   }
// }