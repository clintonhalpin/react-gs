import React from 'react';
import marked from 'marked';

let renderer = new marked.Renderer()

export default class Marked extends React.Component{
    render(){
        var html = marked(this.props.children.toString(), { renderer: renderer })
        return <div dangerouslySetInnerHTML={{ __html: html }} />
    }
}
