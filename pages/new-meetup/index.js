// our-domain.com/new-meetup
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const [addingState, setAddingState] = useState(false);
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    setAddingState(true);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    setAddingState(false);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Create a Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} loading={addingState} />
    </>
  );
}

export default NewMeetupPage;
