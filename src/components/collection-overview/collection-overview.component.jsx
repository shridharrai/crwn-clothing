import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {Object.keys(collections).map(key => {
      const { id, ...otherCollectionProps } = collections[key];
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = ({ shop: { collections } }) => ({
  collections
});

export default connect(mapStateToProps)(CollectionOverview);
