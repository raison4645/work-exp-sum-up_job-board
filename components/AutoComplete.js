import { useState, useEffect, useRef } from "react";
import styles from "@/styles/components/AutoComplete.module.scss"
import { useRouter } from "next/router";

export default function AutoComplete({
  isNested,
  data,
  withCheckbox,
  selectedItem,
  setSelectedItem,
  placeholder,
  isDisabled,
  initUserData,
  keyword,
  onInputChange
}) {
  const [showList, setShowList] = useState(false);
  const [listData, setListData] = useState(data);
  const dropdownRef = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Todo: Handling input if initUserData is exist
  useEffect(() => {
    if (initUserData) {
      console.log(typeof initUserData, initUserData)
    }
  }, [initUserData])

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowList(false);
    }
  };

  // Todo: separate the item recommendation logic in other function
  const OnSearch = (e) => {
    const input = e.target.value;
    setInputValue(input);
    setListData(data.filter((item) => item.desc.toLowerCase().includes(input.toLowerCase())))
  };

  const onCLickListItem = (e) => {
    if (!isNested && !withCheckbox) {
      setInputValue(e.target.textContent);
      setShowList(false);
    }
  };

  const handleCheckedItem = (e, select) => {
    e.target.checked
      ? setSelectedItem([...selectedItem, select])
      : setSelectedItem(selectedItem.filter((item) => item !== select));
  };

  const handleNoInputMatch = () => {
    // Todo: only for the compoenent which is not accept free text input
  }

  return (
    <div ref={dropdownRef} className={styles.autocomp_container}>
      <input
        onChange={(e) => onInputChange(e)}
        onFocus={() => setShowList(true)}
        onBlur={() => handleNoInputMatch()}
        value={keyword}
        placeholder={placeholder}
        disabled={isDisabled}
        className={styles.input_field}
      />
      {keyword > 0 && <span onClick={() => setInputValue("")}>X</span>}
      {(showList && listData) &&
        (isNested
          ? listData.map((item) => (
              <div key={`${item.id}`}>
                {item.desc}
                {item.sub.map(subItem => (
                  <div key={`item-${subItem.id}`} style={{ paddingLeft: "20px" }}>
                    {withCheckbox && (
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckedItem(e, subItem.desc)}
                      />
                    )}
                    <span onClick={(e) => onCLickListItem(e)}>
                      {subItem.desc}
                    </span>
                  </div>
                ))}
              </div>
            ))
          : listData.map((item) => (
            <div key={`item-${item.id}`}>
              {withCheckbox && <input type="checkbox" onChange={(e) => handleCheckedItem(e, item.desc)}/>}
              <span onClick={(e) => onCLickListItem(e)}>{item.desc}</span>
            </div>
          )))}
    </div>
  );
}
