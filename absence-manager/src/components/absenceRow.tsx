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
            <td>{name}</td>
            <td >{type}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{status}</td>
            <td>{memberNote}</td>
            <td>{admitterNote}</td>
        </tr>
    )
}

export default AbsenceRow;