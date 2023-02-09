import React from "react";
import css from './Collection_item.module.scss';


const CollectionItem = ({name, price, imageUrl})=>(
    <div className={css.collection_item}>
        <div
           className={css.image}
           style={{backgroundImage: `url(${imageUrl})`}}
           />

        <div className={css.collection_footer}>
            <span className={css.name}>{name}</span>
            <span className={css.price}>{price}</span>
        </div>

    </div>
)


export default CollectionItem;