import MeetupList from '../components/meetups/MeetupList'

import {useEffect , useState} from 'react'

const DUMMY_MEETUPS=[
	{
		id:'m1',
		title:'A First Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ignace_Gaston_Pardies-Plate_4.jpg/500px-Ignace_Gaston_Pardies-Plate_4.jpg',
		address:'some address',
		description:'this is a first meetup'
	},
	{
		id:'m2',
		title:'A Second Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ignace_Gaston_Pardies-Plate_4.jpg/500px-Ignace_Gaston_Pardies-Plate_4.jpg',
		address:'some address',
		description:'this is a Second meetup'
	},
];

function Homepage(props){
	return (<MeetupList meetups={props.meetups} />);
}

/*export async function getStaticProps(){
	// fetch data fron an API
	return {
		props:{
			meetups:DUMMY_MEETUPS
		}
		revalidate: 1;
	}; // always need to return an object
}*/
export default Homepage;