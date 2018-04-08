import React,{Component} from 'react';
import {connect} from 'react-redux';
import {SHOW_COMPLETED,SHOW_ALL,SHOW_ACTIVE} from '../actions/action';

class FilterFooter extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {filter,visibleFilter} = this.props;
		return (
      <div>
        <button 
          onClick={()=>filter(SHOW_ALL)}
          disabled={visibleFilter === 'SHOW_ALL'}
          style={{marginLeft:'4px'}}>SHOW_ALL</button>
        <button 
          onClick={()=>filter(SHOW_ACTIVE)}
          disabled={visibleFilter === 'SHOW_ACTIVE'}
          style={{marginLeft:'4px'}}>SHOW_ACTIVE</button>
        <button 
          onClick={()=>filter(SHOW_COMPLETED)}
          disabled={visibleFilter === 'SHOW_COMPLETED'}
          style={{marginLeft:'4px'}}>SHOW_COMPLETED</button>
      </div>
		)
	}
};

const mapStateToProps = (state) => ({
  visibleFilter:state.filterReducer
});

const mapDispatchToProps = (dispatch) => ({
	filter:filter => dispatch(filter)
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterFooter);