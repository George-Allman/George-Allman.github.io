type ResumeEntryProps = {
  title: string;
  period: string;
  company: string;
  location: string;
  points: string[];
};

export default function ResumeEntry({
  title,
  period,
  company,
  location,
  points,
}: ResumeEntryProps) {
  return (
    <div className="bg-white/5 rounded-xl border p-3">
      <span className="flex flex-row justify-between">
        <div className="text-text-h text-lg">{title}</div>
        <div className="">{period}</div>
      </span>

      <div className="flex flex-row justify-between">
        <div className="text-base">{company}</div>
        <div className="text-base">{location}</div>
      </div>

      <ul>
        {points.map((point, i) => (
          <li className="flex flex-row" key={i}>
            <div className="text-accent px-2 pr-3 font-light "> - </div>
            <div className="font-normal text-base"> {point} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
