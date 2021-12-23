import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { Signup } from "./Signup";
import { configure, shallow } from "enzyme";


configure({ adapter: new Adapter() });

describe("Signup Component", () => {
    const appMock = {};

    it("should render the Signup Component", () => {
        const wrapper = shallow(
            <Signup
                theme={{ background: '#fff', textColor: "black" }}
            />
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

});
