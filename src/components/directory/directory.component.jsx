import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = ({ directory: { sections } }) => ({
  sections
});

export default connect(mapStateToProps)(Directory);
