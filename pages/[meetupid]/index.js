import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(){
	return (
			<MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ignace_Gaston_Pardies-Plate_4.jpg/500px-Ignace_Gaston_Pardies-Plate_4.jpg' title = "First Meetup" address="Some ADDRESS" description="Some Description" />
		);
}
export async function getStaticPaths(){
	return{
		fallback:false,
		paths:[
			{
				params:{
					meetupid:'m1',
				},
			},
			{
				params:{
					meetupid:'m2',
				},
			},
		],
	};
}
export async function getStaticProps(context){
	const meetupid=context.params.meetupid;
	//console.log(meetupid);
	return {
		props:{
			image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ignace_Gaston_Pardies-Plate_4.jpg/500px-Ignace_Gaston_Pardies-Plate_4.jpg',
			id: meetupid,
			title : "First Meetup" ,
			address:"Some ADDRESS",
			description:"Some Description",
		},
	};
}

export default MeetupDetails;