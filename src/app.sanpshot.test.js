import React from "react";
import App from "./App";
import renderer from 'react-test-renderer';

it('Snapshot testing on App component',()=>{
    const tree=renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
})