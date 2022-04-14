import React, { useEffect, useState } from "react"
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap"

interface IDashboard {
    changeAbsences: (absences: Array<any>) => void,
    allAbsences: Array<any>,
}

export const Dashboard = (props: IDashboard) => {
    const { changeAbsences, allAbsences } = props
    const [status, setStatus] = useState("filter by status")
    const [buttonTitle, setButtonTitle] = useState<string>("filter by status")

    const filterStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filter = (event.target as HTMLElement).innerHTML
        setButtonTitle(filter)
        setStatus(filter)
    }
 
    const filterDate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const startDate = (document.getElementById("date") as HTMLInputElement).value
        const filteredAbsences: Array<any> = []
        allAbsences.forEach(absence => {
            absence.startDate > startDate && filteredAbsences.push(absence)
        })
        changeAbsences(filteredAbsences)
        setButtonTitle("filter by status")
    }

    useEffect(() => {
        const filteredAbsences: Array<any> = []
        allAbsences.forEach(absence => {
            absence.status === status && filteredAbsences.push(absence);
        });
        status === "no status filter" ? changeAbsences(allAbsences) : changeAbsences(filteredAbsences)
    }, [status])

    return (
        <div>
            <div>
                <h1>Absences</h1>
            </div>
            <div className="absences-container">
                <h2>Total number of absences: {allAbsences.length}</h2>
            </div>
            <div className="filter-container">
                <h2 className="filter-title">Filters:</h2>
                <DropdownButton id="dropdown-basic-button" title={buttonTitle} className="filter-dropdown">
                    <Dropdown.Item id="default-dropdown-value" onClick={filterStatus}>no status filter</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>confirmed</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>rejected</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>requested</Dropdown.Item>
                </DropdownButton>
                <Form.Group  className="datepicker-container">
                    <Form.Control id="date" className="datepicker" type="date" name="dob" placeholder="Date" />
                    <Button variant="primary" className="datepicker-button" onClick={filterDate}>Filter Start Date</Button>
                </Form.Group>
            </div>
        </div>
    )
}