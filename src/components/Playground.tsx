import * as React from 'react';

export interface PlaygroundProps {
}

export interface PlaygroundState {
}

export default class Playground extends React.Component<PlaygroundProps, PlaygroundState> {
  constructor(props: PlaygroundProps) {
    super(props);

        this.state = {
    }
  }

  render() {
    return (
      <div>
        Playground page
      </div>
    );
  }
}
