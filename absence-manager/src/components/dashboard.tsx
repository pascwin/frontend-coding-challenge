import React from "react"
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap"

interface IDashboard {
    setFilterDate: (date: string) => void,
    setFilterStatus: (status: string) => void,
    showLoader: (load: boolean) => void,
    absences: Array<any>,
    status: string,
}

export const Dashboard = (props: IDashboard) => {
    const { status, absences, setFilterStatus, setFilterDate, showLoader } = props

    const filterStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
        showLoader(true)
        const status = (event.target as HTMLElement).innerHTML
        setFilterStatus(status)
    }

    const filterDate = (event: React.MouseEvent<HTMLButtonElement>) => {
        showLoader(true)
        const startDate = (document.getElementById("date") as HTMLInputElement).value
        setFilterDate(startDate)
    }

    return (
        <div>
            <div className="absences-container">
                <h2>Total number of absences: {absences.length}</h2>
            </div>
            <div className="filter-container">
                <h2 className="filter-title">Filters:</h2>
                <DropdownButton id="dropdown-basic-button" title={status} className="filter-dropdown">
                    <Dropdown.Item id="default-dropdown-value" onClick={filterStatus}>no status filter</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>confirmed</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>rejected</Dropdown.Item>
                    <Dropdown.Item onClick={filterStatus}>requested</Dropdown.Item>
                </DropdownButton>
                <Form.Group className="datepicker-container">
                    <Form.Control id="date" className="datepicker" type="date" name="dob" placeholder="Date" />
                    <Button variant="primary" className="datepicker-button" onClick={filterDate}>Filter Start Date</Button>
                </Form.Group>
            </div>
        </div>
    )
}