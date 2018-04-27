import React from 'react';
import './Stats.css';

const Stats = ({name, entries}) => {
	return (
	  	    <div>
	  	    	{`${name} , your current number of entries is...`}
			      <div className='white f1 '>
			        {entries}
			      </div>
	  	    </div>
	  	);
	}
export default Stats;