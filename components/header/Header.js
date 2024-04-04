import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/components/Header.module.scss";
import AutoComplete from "../AutoComplete";
import ProcessButton from "../search/ProcessButton";
import TuneIcon from "@mui/icons-material/Tune";
import Image from "next/image";
import icon from '@/public/sample_img/hkstp.png'
import SearchFilter from "../search/SearchFilter";
import BurgerMenu from "../BurgerMenu";
import NavList from "./NavList";
import LangSwitcher from "../lang/LangSwitcher";

export default function Header() {
  const router = useRouter();
  const currentRoute = router.route
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [keyword, setKeyword] = useState(router.query.keyword ? router.query.keyword : '')
  const onInputChange = (e) => {
    const word = e.target.value
    setKeyword(word);
  }

  useEffect(() => {
    currentRoute === "/search" ? setShowSearch(true) : setShowSearch(false);
  }, [currentRoute]);

  return (
  <>
    <div className={showSearch ? styles.search_header : styles.header}>
      <BurgerMenu />
      <a href='/' className={styles.header_icon}>
        <Image src={icon} height={60}  alt="web icon of HKSTP talent Pool" priority />
      </a>
      {showSearch && (
        <div className={styles.header_searchbar}>
          <AutoComplete
            data={[]}
            keyword={keyword}
            onInputChange={onInputChange}
          />
          <ProcessButton
            keyword={keyword}
          />
          <div
            className={showFilter ? styles.filter_on : styles.filter_off}
            onClick={() => setShowFilter(!showFilter)}
          >
            <TuneIcon htmlColor={ showFilter ? '#fff' : '#046EE1' } fontSize="large"/>
          </div>
        </div>
      )}
      <div style={{display: 'flex', alignItems: 'center'}}>
        <NavList />
        <LangSwitcher />
      </div>
    </div>
    {showFilter && (<SearchFilter />)}
  </>
  );
}
