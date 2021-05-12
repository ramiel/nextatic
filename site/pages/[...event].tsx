import React from "react";
import { GetStaticProps } from "next";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<EventPageProps> = async (
  context
) => {
  const event = context.params.event[0] as string;

  return {
    props: {
      // Trying to pass `undefined` directly resolves in a serialization error, so null is preferred
      event,
    },
    // revalidate: REVALIDATE_SEC,
  };
};

interface EventPageProps {
  event: string;
}

const EventPage: React.FC<EventPageProps> = ({ event }) => {
  return <div>Event: {event}</div>;
};

export default EventPage;
