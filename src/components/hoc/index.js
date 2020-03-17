import React from 'react';

const withStorage = (WrappedComponent) => {
    return class HOC extends React.Component {

        get(key) {
            return localStorage.getItem(key); 
        }

        save(key, data) {
            localStorage.setItem(key, data);
        }

        render() {
            return (
                <WrappedComponent 
                    get={this.get}
                    save={this.save}
                    {...this.props}
                />
            )
        }
    }
}

export default withStorage;