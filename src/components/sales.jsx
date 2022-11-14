import React from 'react'
import Item from './utils/item'
import Title from './utils/title'

const Sales = ({ endpoint }) => {
    console.log(endpoint.title)
    return (
        <>
            <div>
                <Title title={endpoint.title} />
                <div>
                    {
                        endpoint.items?.map((item, i) => (

                            <Item {...item} key={i} />

                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Sales