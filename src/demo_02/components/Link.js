import React,{Component} from 'react';

/*const Link = ({active,children,onClick}) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{marginLeft:'4px'}}
  >
  	{children}
  </button>
);

export default Link;*/

class Link extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const {active,children,onClick} = this.props;
    console.log(this.props);
		return (
      <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft:'4px'}}
      >
      	{children}
      </button>
		)
	}
}

export default Link;