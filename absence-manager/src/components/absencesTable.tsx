import { IAbsences } from "../App"
import AbsenceRow from "./absenceRow"
import { Table } from "react-bootstrap"


export const AbsencesTable = ({ absences }: { absences: Array<IAbsences> }) => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>type</th>
                        <th>startDate</th>
                        <th>endDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        absences.map((absence, i) => {
                            return <AbsenceRow
                                key={i}
                                name={absence.name}
                                type={absence.type}
                                startDate={absence.startDate}
                                endDate={absence.endDate}
                                memberNote={absence.memberNote}
                                confirmedAt={absence.confirmedAt}
                                rejectedAt={absence.rejectedAt}
                                admitternote={absence.admitternote}
                            />
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}