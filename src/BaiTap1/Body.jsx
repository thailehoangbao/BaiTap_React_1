import React, { Component } from 'react'
import Banner from './Banner'
import Item from './item/Item'
import Item1 from './item/Item1'
import Item2 from './item/Item2'
import Item3 from './item/Item3'
import Item4 from './item/Item4'
import Item5 from './item/Item5'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className='pt-4'>
                    <div className='container'>
                        <div className='row gx-lg-5'>
                            <Item />
                            <Item1 />
                            <Item2 />
                            <Item3 />
                            <Item4 />
                            <Item5 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
