import { FunctionComponent, useEffect, useRef } from "react";

import styles from "../styles/SearchInput.module.css";
import { SearchInputProps } from "../types";

const SearchInput: FunctionComponent<SearchInputProps> = ({
  changeHandler,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    searchInputRef?.current?.focus?.();
  }, []);
  return (
    <input
      className={styles.input}
      onChange={changeHandler}
      ref={searchInputRef}
    />
  );
};

export default SearchInput;
