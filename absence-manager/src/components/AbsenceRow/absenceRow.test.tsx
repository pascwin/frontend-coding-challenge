import Enzyme from "enzyme";
import AbsenceRow from "./absenceRow";

const { shallow } = Enzyme; //whatever you want to use here

it('renders without crashing', () => {
    expect(shallow(<AbsenceRow
        key={1}
        name={"Peter"}
        type={"sickness"}
        status={"confirmed"}
        startDate={"2022-02-02"}
        endDate={"2022-02-10"}
        memberNote={"Thank you"}
        admitterNote={"Peter is sick"}
    />)).toMatchSnapshot();
});