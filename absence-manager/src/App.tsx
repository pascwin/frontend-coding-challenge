import { useEffect, useState } from 'react';
import { AbsencesTable } from './components/absencesTable';

export interface IAbsences {
  name: string,
  type: string,
  startDate: string,
  endDate: string,
  memberNote: string,
  confirmedAt: string,
  rejectedAt: string,
  admitternote: string,
}

const App = () => {
  const [absences, setAbsences] = useState<any[]>([])
  // const [members, setMembers] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/absences")
      .then(res => res.json())
      .then(absences => setAbsences(absences))
  }, [])


  // useEffect(() => {
  //   fetch("http://localhost:3000/members")
  //     .then(res => res.json())
  //     .then(members => setMembers(members))
  // }, [])

  return (
    <div className="App">
      <AbsencesTable absences={absences} />
    </div>

  );
}

export default App;
