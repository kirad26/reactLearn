import { Task1 } from './Task1';

export function Task2(props) {
  const myCounter = props.counters.map((counter) =>
    <Task1 initial={counter.initial} max={counter.max} min={counter.min} />

  )
  return (
    <div>
      {myCounter}
    </div>
  )
}
