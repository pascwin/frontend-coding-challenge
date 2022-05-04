import { useEffect, useState } from 'react';

import { AbsencesTable } from './components/AbsencesTable/absencesTable';
import { AppPagination } from './components/appPagination'
import { Dashboard } from './components/dashboard';
import { Loader } from './components/loader';

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
  const [date, setDate] = useState<any>(null)
  const [status, setStatus] = useState("no status filter")
  const [load, setLoad] = useState<boolean>(true)

  useEffect(() => {
    window.setTimeout(hideLoader, 500)
    fetch("http://localhost:3000/absences", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: date,
        status: status
      })
    })
      .then(res => res.json())
      .then(absences => {
        setAbsences(absences)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [date, status])

  const hideLoader = () => {
    setLoad(false)
  }

  useEffect(() => {
    const startingIndex = actualPage === 1 ? 0 : (actualPage - 1) * 10;
    const endingIndex = actualPage * 10;
    setNumberPages(Math.ceil(absences.length / 10))
    setAbsencesOnPage(absences.slice(startingIndex, endingIndex))
  }, [absences, actualPage])

  return (
    <div className="App">
      <div>
        <h1 id="app-header">Absence Manager</h1>
      </div>
      <Dashboard
        status={status}
        absences={absences}
        setFilterDate={setDate}
        setFilterStatus={setStatus}
        showLoader={setLoad}
      />
      {load ?
        <Loader /> 
        :
        <>
          <AbsencesTable absences={absencesOnPage} />
          <AppPagination numberPages={numberPages} page={actualPage} pageHandler={setActualPage} />
        </>
      }
    </div>
  );
}

export default App;
