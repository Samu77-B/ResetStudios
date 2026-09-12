import { GymSynkScheduleEmbed } from "@/components/GymSynkScheduleEmbed";

export function TimeTable() {
  return (
    <section id="timetable" className="bg-bone-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <GymSynkScheduleEmbed />
      </div>
    </section>
  );
}
