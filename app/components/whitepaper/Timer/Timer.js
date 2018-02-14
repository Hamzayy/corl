import React from 'react';
import "./timer.css";

class Timer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="et_pb_section-time">
                <div className="timer-container">
                    <div className="et_pb_column et_pb_column_4_4  et_pb_column_0 et-last-child">
                        <div className="et_pb_module et_pb_countdown_timer et_pb_bg_layout_light  et_pb_countdown_timer_0 et_pb_no_bg">
                            <div className="et_pb_countdown_timer_container clearfix">
                                <h3 className="title">Corl Token Sale</h3>
                                <div className="days section values" data-short="Day" data-full="Day(s)">
                                    <p className="value">046</p>
                                    <p className="label">Day(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="hours section values" data-short="Hrs" data-full="Hour(s)">
                                    <p className="value">16</p>
                                    <p className="label">Hour(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="minutes section values" data-short="Min" data-full="Minute(s)">
                                    <p className="value">42</p>
                                    <p className="label">Minute(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="seconds section values" data-short="Sec" data-full="Second(s)">
                                    <p className="value">14</p>
                                    <p className="label">Second(s)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Timer;