import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
    station: -1,
    isWatched: false,
};

const listeners = new Set();

function updateComponents() {
    for (const cb of listeners.values()) {
        cb();
    }
}

export function setStation(value) {
    State.station = value;
    updateComponents();
}

export function setWatched(value) {
    State.isWatched = value;
    updateComponents();
}

export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            station: State.station,
            isWatched: State.isWatched,
        };

        _listener = () => {
            this.setState({
                station: State.station,
                isWatched: State.isWatched,
            });
        };

        componentDidMount() {
            listeners.add(this._listener);
            console.log("mounted");
        }

        componentWillUnmount() {
            listeners.delete(this._listener);
            console.log("unmounted");
        }

        render() {
            return (
                <Component
                    {...this.props}
                    station={this.state.station}
                    isWatched={this.state.isWatched}
                />
            );
        }
    };
}