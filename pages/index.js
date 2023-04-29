import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of meetups for React devs"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://falah1:HrbV9QscvSKbAtz7@cluster0.5t6j5zo.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
