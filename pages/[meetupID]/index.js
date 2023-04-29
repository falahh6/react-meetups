import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "@/components/meetups/MeetUpDetails";
import Head from "next/head";
const MeetupPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title} : Details</title>
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://falah1:HrbV9QscvSKbAtz7@cluster0.5t6j5zo.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupID: meetup._id.toString(),
      },
    })),
  };
};
export const getStaticProps = async (context) => {
  const meetupID = context.params.meetupID;
  const client = await MongoClient.connect(
    "mongodb+srv://falah1:HrbV9QscvSKbAtz7@cluster0.5t6j5zo.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupID),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      },
    },
  };
};

export default MeetupPage;
