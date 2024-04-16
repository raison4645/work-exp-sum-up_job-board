import { Stack, Box, IconButton } from '@mui/material/'
import Image from "next/image";
import LangSwitcher from '../lang/LangSwitcher';
import styles from '@/styles/components/Footer.module.scss'


export default function FooterMedia() {
  return (
    <Stack className={styles.footer_media} sx={{py: 4, px: 2}}>
      <Image src="/sample_img/hkstp_logo.svg" width={257} height={88} alt="HKSTP logo" />
      <Box className={styles.about_stp}>
        <a><span>ABOUT HKSTP</span></a>
        <a><span>VISIT</span></a>
        <LangSwitcher />
      </Box>
      <Box className={styles.media_logos}>
        <IconButton><img src='/sample_img/svgicon/icon-share-fb.svg' /></IconButton>
        <IconButton><img src='/sample_img/svgicon/icon-share-linkedin.svg' /></IconButton>
        <IconButton><img src='/sample_img/svgicon/icon-share-linkedin.svg' /></IconButton>
        <IconButton><img src='/sample_img/svgicon/icon-share-linkedin.svg' /></IconButton>
        <IconButton><img src='/sample_img/svgicon/icon-share-linkedin.svg' /></IconButton>

      </Box>
    </Stack>
  )
}
