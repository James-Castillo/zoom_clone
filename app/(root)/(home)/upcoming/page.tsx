import CallList from "@/components/CallList";
import React from "react";

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">Reuniones Pendientes</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;
