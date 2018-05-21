import * as React from 'react';

export interface AboutProps {
}

export interface AboutState {
}

export default class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);

        this.state = {
    }
  }

  render() {
    return (
      <div>
        About page
      </div>
    );
  }
}
