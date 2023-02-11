import React from 'react'
import CollectionItem from '../collection-item/Collection_item'
import css from './preview_collection.module.scss'


const Preview_collection = ({ title, items }) => {
  return (
    <div className={css.collection}>
      <h1 className={css.collection_title}>{title.toUpperCase()}</h1>

      <div className={css.collection_preview}>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))
        } 
      </div>
    </div>
  )
}





export default Preview_collection