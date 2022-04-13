import React, { useEffect, useState } from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"

interface IDashboard {
    changeAbsences: (absences: Array<any>) => void,
    allAbsences: Array<any>,
}

export const Dashboard = (props: IDashboard) => {
    const {changeAbsences, allAbsences} = props
    const [status, setStatus] = useState("by status")

    const filterStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStatus((event.target as HTMLElement).innerHTML)
    }

    useEffect(() => {
        const filteredAbsences: Array<any> = []
        allAbsences.forEach(absence => {
            absence.status === status && filteredAbsences.push(absence);
        });
        status === "by status" ? changeAbsences(allAbsences) : changeAbsences(filteredAbsences)
    }, [status])

    return (
        <div>
            <div>
                <h1>Absences</h1>
            </div>
            <div className="filter-container">
                <h2 className="filter-title">Filter</h2>
                <DropdownButton id="dropdown-basic-button" title={status}>
                    <Dropdown.Item onClick={filterStatus}>by status</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>confirmed</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>rejected</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>requested</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>

    )
}