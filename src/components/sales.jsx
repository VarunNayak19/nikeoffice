import React from 'react'
import Item from './utils/item'
import Title from './utils/title'

const Sales = ({ ifExists, endpoint }) => {
    console.log(endpoint.title)
    return (
        <>
            <div className='nike-container mt-16 mb-5
            '>
                <Title title={endpoint.title} />
                <div className={`grid items-center justify-items-center
             
            ${ifExists ? " grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7" : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7"} `}>
                    {
                        endpoint.items?.map((item, i) => (

                            <Item {...item} key={i} ifExists={ifExists} />

                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Sales