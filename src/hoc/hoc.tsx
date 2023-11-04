import React from 'react';

interface HOCProps {
  loading: boolean;
}

const HoC = <P extends object>(Component: React.ComponentType<P>) =>
  class HOC extends React.Component<P & HOCProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <h1>Loading</h1> : <Component {...(props as P)} />;
    }
  };

export default HoC;
