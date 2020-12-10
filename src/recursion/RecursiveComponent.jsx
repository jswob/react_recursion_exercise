import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

	// write recursive method here
  renderChildrenRecursively(components) {
    // If the list of component is empty return nothing
    if(!components.length) return;

    // Get current tag name
    const TagName = components[0];

    // If there is only one component passed, return it without content
    if(components.length === 1) return <TagName />

    // Creates version of components for child (without parent)
    const componentsForChild = components.slice(1, components.length)

    return <TagName 
              // It passes rendering function to a content of a current component with componentsForChild as an argument
              content={this.renderChildrenRecursively(componentsForChild)} 
            />
  }

  render() {
    return (
      <div>
        {this.renderChildrenRecursively(this.props.components)}
      </div>
    );
  }
};
