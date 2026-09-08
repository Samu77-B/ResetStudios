import { TimeTableView } from "@/components/TimeTableView";
import { loadTimetable } from "@/lib/gymsynk-schedule";

export async function TimeTable() {
  const { days, source } = await loadTimetable();

  return <TimeTableView days={days} source={source} />;
}
