import React, { Component } from 'react';
import ListItem from './ListItem';

class Header extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div>
                <h1>{this.props.title}
                    <button className="btn btn-success pull-right"
                    onClick={this.props.onCreateNewItem} >+ New List</button>
                </h1>
                
            </div>
        );
    }
}


// In class  : error dont know item
// const Header = ( { item, onCreateNewItem } ) => {
//     console.log( item )
//     return (
//         <div>
//             <h1>{item.title}
//                 <button className="btn btn-success pull-right"
//                 onClick={onCreateNewItem} >+ New List</button>
//             </h1>
            
//         </div>

//     );
// }

export default Header;