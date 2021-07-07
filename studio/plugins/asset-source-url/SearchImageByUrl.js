/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import qs from 'qs';
import Dialog from 'part:@sanity/components/dialogs/fullscreen';
import TextInput from 'part:@sanity/components/textinputs/default';
import Button from 'part:@sanity/components/buttons/default';
import Spinner from 'part:@sanity/components/loading/spinner';

import { TabImage } from './TabImage';
import styles from './TabAssetSource.css';


const SearchInput = ({ label, onChange, onEnter, value }) => {
  const onKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') onEnter(event);
    },
    [onEnter]
  );

  return (
    <div className={styles['c-search']}>
      <label className={styles['c-search__label']}>
        <span className={styles['c-search__text']}>{label}</span>
        <TextInput onChange={onChange} onKeyPress={onKeyPress} value={value} />
      </label>
    </div>
  );
};

const TabImageSearch = ({ onClose, onSelect }) => {
  const [searchTerms, setSearchTerms] = useState({
    assetUrl: '',
  });
  const [hasError, setHasError] = useState(false);
  const [foundAssets, setFoundAssets] = useState();
  const [loading, setLoading] = useState(false);

  const onSearchTermChange = useCallback(
    (key) => (val) => {
      setSearchTerms({
        ...searchTerms,
        [key]: val.target.value,
      });
    },
    [searchTerms, setSearchTerms]
  );

  const onSearch = useCallback(
    async (pageToFetch) => {
      const searchButtonEvent = typeof pageToFetch !== 'number';
      const page = searchButtonEvent ? 1 : pageToFetch;
      try {
        setLoading(true);
        setFoundAssets(searchTerms.assetUrl);
      } catch (err) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    },
    [searchTerms, foundAssets, setFoundAssets, setHasError, setLoading]
  );


  return (
    <Dialog title="Select image from URL" onClose={onClose} isOpen>
      <div className={styles.container}>
        <SearchInput
          onChange={onSearchTermChange('assetUrl')}
          onEnter={onSearch}
          value={searchTerms.assetUrl}
          label="Image URL"
        />
        <div className={styles['c-button']}>
          <Button onClick={onSearch}>Get Image</Button>
        </div>
      </div>
      <div className={styles['c-results-container']}>
      
      </div>
    </Dialog>
  );
};

export default TabImageSearch;
