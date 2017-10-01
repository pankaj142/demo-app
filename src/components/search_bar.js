import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={ term:'' };
    }

    render(){
       return ( 
            <div className='search-bar'>
                <input
                    placeholder='Search...' 
                    onChange={(event)=> this.show(event.target.value)}/>
            </div>
       );
    }
    show(term){
        this.setState({term})
        console.log(this.state.term)
    }
}

export default SearchBar;