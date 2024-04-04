import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function index() {
  const { t } = useTranslation('common')
  return (
    <div>
      <span>{t('global.test')}</span>
    </div>
  )
}

export default index;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    }
  }
}