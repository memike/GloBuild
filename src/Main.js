import React from 'react';
import './Main.css';
import Navbar from './navbar/Navbar';
import FirstContent from './content/FirstContent';
import Why from './content/Why';


class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <div className="container-fluid p-0">
                    <Navbar />
                    <div className="bgimg-1 parallax">
                        <FirstContent />
                    </div>
                    <div className="container-fluid">
                        <Why />
                    </div>
                    <div className="bgimg-2 parallax4">
                        <div className="container">
                            <div className="row">
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main