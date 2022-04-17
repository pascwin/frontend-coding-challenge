import React from 'react';
import { shallow } from 'enzyme';
import { AbsencesTable } from './absencesTable';
const mockedAbsences = [{
    name: "Martin",
    status: 'confirmed',
    type: "sickness",
    startDate: "2021-01-13",
    endDate: "2021-01-13",
    memberNote: "Sorry",
    admitterNote: "Martin is sick",
}]

it('renders without crashing', () => {
    expect(shallow(<AbsencesTable absences={mockedAbsences} />)).toMatchSnapshot();
});