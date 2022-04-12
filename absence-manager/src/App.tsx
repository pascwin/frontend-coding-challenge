import { useEffect, useState } from 'react';
import { AbsencesTable } from './components/absencesTable';
import { AppPagination } from './components/Pagination';
import "./App.css"

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
  const [numberPages, setNumberPages] = useState(10)
  const [actualPage, setActualPage] = useState(1)
  const [absencesOnPage, setAbsencesOnPage] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/absences")
      .then(res => res.json())
      .then(absences => setAbsences(absences))
  }, [])

  useEffect(() => {
    const startingIndex = actualPage === 1 ? 0 : (actualPage - 1) * 10;
    const endingIndex = actualPage * 10;
    setNumberPages(Math.ceil(absences.length / 10))
    setAbsencesOnPage(absences.slice(startingIndex, endingIndex))
  }, [absences, actualPage])

  // useEffect(() => {
  //   fetch("http://localhost:3000/members")
  //     .then(res => res.json())
  //     .then(members => setMembers(members))
  // }, [])

  return (
    <div className="App">
      <AbsencesTable absences={absencesOnPage} />
      <AppPagination numberPages={numberPages} page={actualPage} pageHandler={setActualPage} />
    </div> 

  );
}

export default App;
