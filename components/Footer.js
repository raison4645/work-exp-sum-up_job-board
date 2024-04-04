import styles from "@/styles/components/Footer.module.scss";
import Image from "next/image";

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
        <div className={styles.icon_container}>
          <Image src="/sample_img/hkstp_logo.svg" width="200" height="100" alt="HKSTP logo" />
        </div>
        <div className={styles.footer_list}>
          {footerList.map((item, index) => (
            <div key={index} className={styles.list_items}>
              <p className={styles.field}>{item.field}</p>
              {item.subfields.map((subfield, slug) => (
                <a key={slug} href={subfield.link}>{subfield.fieldName}</a>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bg_logo}>
          <Image src="/sample_img/footer_icon.svg" width="350" height="400" alt="HKSTP icon"/>
        </div>
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
