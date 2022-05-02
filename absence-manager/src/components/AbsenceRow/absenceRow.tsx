interface IProps {
    name: string,
    type: string,
    startDate: string,
    endDate: string,
    memberNote: string,
    admitterNote: string,
    status: string,
}

const AbsenceRow: React.FunctionComponent<IProps> = ({ name, type, startDate, endDate, status, memberNote, admitterNote }) => {
    return (
        <tr>
            <td className="table-cell">{name}</td>
            <td className="table-cell">{type}</td>
            <td className="table-cell">{startDate}</td>
            <td className="table-cell">{endDate}</td>
            <td className="table-cell">{status}</td>
            <td className="table-cell">{memberNote}</td>
            <td className="table-cell">{admitterNote}</td>
        </tr>
    )
}

export default AbsenceRow;