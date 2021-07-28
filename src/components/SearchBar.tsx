import React, { useState, useRef } from 'react';

import './SearchBar.scss';

interface IProps {
  onSubmitForm: (term: string) => void;
}

const SearchBar = ({ onSubmitForm }: IProps) => {
  const [videoText, setVideoText] = useState('');
  const inputRef = useRef(null);

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmitForm(videoText);
    setVideoText('');
    inputRef.current.blur();
  };
  return (
    <div className="searchbar-wrapper">
      <form onSubmit={onSubmitHandler}>
        <label className="searchbar-wrapper__label" htmlFor="input">
          Search YouTube
        </label>
        <input
          id="input"
          className="searchbar-wrapper__input"
          type="text"
          value={videoText}
          onChange={(e) => setVideoText(e.target.value)}
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default SearchBar;
