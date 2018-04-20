import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <div className={styles.wrapper}>
    <div className={styles['title-wrapper']}>
      <h1 className={styles.title}>
        <Link
          to="/"
          className={styles.link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
