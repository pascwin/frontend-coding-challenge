import { useEffect, useState } from 'react';
import { AbsencesTable } from './components/absencesTable';
import { AppPagination } from './components/appPagination'
import { Dashboard } from './components/dashboard';
import "./App.css"

export interface IAbsences {
  name: string,
  type: string,
  startDate: string,
  endDate: string,
  memberNote: string,
  status: string,
  admitterNote: string,
}

const App = () => {
  const [absences, setAbsences] = useState<any[]>([])
  const [numberPages, setNumberPages] = useState(10)
  const [actualPage, setActualPage] = useState(1)
  const [absencesOnPage, setAbsencesOnPage] = useState<any[]>([])
  const [allAbsences, setAllAbsences] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/absences2")
      .then(res => res.json())
      .then(absences => {
        setAbsences(absences)
        setAllAbsences(absences)
      })
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
      <Dashboard changeAbsences={setAbsences} allAbsences={allAbsences}/>
      <AbsencesTable absences={absencesOnPage} />
      <AppPagination numberPages={numberPages} page={actualPage} pageHandler={setActualPage} />
    </div> 

  );
}

export default App;
