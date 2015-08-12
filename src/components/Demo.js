import React from 'react';
import Radium from 'radium';
import Markdown from './Markdown';
import * as gs from './../../lib/';
import { Link } from 'react-router';
import README from './../../README.md';

console.log(gs)

@Radium
export default class Demo extends React.Component {
  render () {
    return (
        <div style={[gs.ff.sanSerif, gs.p._b4]}>
            <Markdown>
                {README}
            </Markdown>
        </div>
    )
  }
}
