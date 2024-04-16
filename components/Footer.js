import styles from "@/styles/components/Footer.module.scss";
import Image from "next/image";
import FooterMedia  from '@/components/footer/FooterMedia'
import Contact from '@/components/footer/Contact'
import Platform from '@/components/footer/Platform'
import UsefulLinks from '@/components/footer/UsefulLinks'

const copyrightText = "2024 Hong Kong Science & Technology Parks Corporation, all rights reserved";
const footerList = [
  {
    field: "Job Seeker",
    subfields: [
      {
        fieldName: "Find Jobs",
        link: "/",
      },
      {
        fieldName: "Recommended Jobs",
        link: "/",
      },
    ],
  },
  {
    field: "Employer",
    subfields: [
      {
        fieldName: "Post Jobs",
        link: "/",
      },
      {
        fieldName: "Manage Applications",
        link: "/",
      },
    ],
  },
  {
    field: "Contact Us",
    subfields: [
      {
        fieldName: "Enquiry Email",
        link: "/",
      },
    ],
  },
  {
    field: "Articles",
    subfields: [
      {
        fieldName: "Latest Articles",
        link: "/",
      },
    ],
  },
  {
    field: "Events",
    subfields: [
      {
        fieldName: "Upcoming Events",
        link: "/",
      },
    ],
  },
];

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <section className={styles.upper_footer}>
        <FooterMedia />
        <Platform />
        <UsefulLinks />
        <Contact />
      </section>
      <section className={styles.lower_footer}>
        <span>{copyrightText}</span>
        <div className={styles.terms_privacy}>
          <a href="/">Terms & Conditions</a>
            <span>|</span>
          <a href="/">Privacy Policy</a>
        </div>
      </section>
    </footer>
  );
}
