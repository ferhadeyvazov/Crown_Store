import React from 'react'
import { collections } from '../../utils/data'
import Preview_collection from '../../components/preview-collection/preview_collection';

const Shop = () => {
  return (
    <div className='shop-page'>
        {
            collections.map(({id, ...collection})=>(
                <Preview_collection key={id} {...collection} />
            ))
        }
    </div>
  )
}



export default Shop