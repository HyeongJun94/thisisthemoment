import React, {Component} from 'react';
import '../App.css'

class Title extends Component {
    // const banner_list=
    
    render(){
        const banner_list = [
            {name : 'banner1'},
            {name : 'banner2'}
        ];

        return (
            <div className="title">
                <div className="logo">
                    logo
                </div>
                
                <div className="banner">
                    {banner_list.map(item => (
                        <ul>{item.name}</ul>
                    ))}
                </div>    
            </div>
        )
    }
}


export default Title