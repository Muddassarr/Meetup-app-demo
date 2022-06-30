import { MongoClient } from 'mongodb';

async function handler(req,res){
	if (req.method === 'POST') {
		const data=req.body;
		const {title, image,address,description}=data;

		
		const client = MongoClient.connect('mongodb+srv://muddassarriaz20:um6Wx78NbJ4xbPOC@cluster0.xtlhq.mongodb.net/meetups?retryWrites=true&w=majority');
		const db = client.db();

		const meetupCollection = db.collection('meetups');
		const result = await meetupCollection.insertOne({data});

		console.log(result);

		client.close();

		res.status(201).json({message: 'Meetup added'});

	}
}
export default handler;
