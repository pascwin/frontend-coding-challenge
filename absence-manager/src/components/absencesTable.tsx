import { IAbsences } from "../App"
import AbsenceRow from "./absenceRow"
import { Table } from "react-bootstrap"


export const AbsencesTable = ({ absences }: { absences: Array<IAbsences> }) => {
    return (
        <div className="table">
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>type</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>status</th>
                        <th>Member Note</th>
                        <th>Admitter Note</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        absences.map((absence, i) => {
                            return <AbsenceRow
                                key={i}
                                name={absence.name}
                                type={absence.type}
                                status={absence.status}
                                startDate={absence.startDate}
                                endDate={absence.endDate}
                                memberNote={absence.memberNote}
                                admitterNote={absence.admitterNote}
                            />
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}