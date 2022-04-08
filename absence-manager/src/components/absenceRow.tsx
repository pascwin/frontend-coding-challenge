interface IProps {
    name: string,
    type: string,
    startDate: string,
    endDate: string,
    memberNote: string,
    confirmedAt: string,
    rejectedAt: string,
    admitternote: string,
}

const AbsenceRow: React.FunctionComponent<IProps> = ({ name, type, startDate, endDate, memberNote, confirmedAt, rejectedAt, admitternote }) => {
    return (
        <tr>
            <td>{name}</td>
            <td >{type}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
        </tr>
    )
}

export default AbsenceRow;