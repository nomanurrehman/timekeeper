import { Fragment } from 'react';
import { intervalToDuration, Duration } from 'date-fns';

interface DurationStringProps {
  start: Date,
  end: Date,  
}

const calculateDuration = (start: Date, end: Date): Duration => {
  const duration: Duration = intervalToDuration({
    start,
    end
  });
  return duration;  
}

const durationToString = (duration: Duration): string => {
  return `
    ${ duration.years ? duration.years + ' year(s)' : '' }
    ${ duration.months ? duration.months + ' month(s)' : '' }
    ${ duration.days ? duration.days + ' days(s)' : '' }
    ${ duration.hours ? duration.hours + ' hours(s)' : '' }
    ${ duration.minutes ? duration.minutes + ' minutes(s)' : '' }
    ${ duration.seconds ? duration.seconds + ' seconds(s)' : '' }
  `;
}

export const DurationString: React.FC<DurationStringProps> = ({
  start,
  end,
}): JSX.Element => {
  const duration: Duration = calculateDuration(start, end);
  const durationString: string = durationToString(duration);
  return (
    <Fragment>
      { durationString }
    </Fragment>
  );
}
