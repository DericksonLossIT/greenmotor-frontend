import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class FunFacts extends Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <>
                <section className="fun-facts-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                            >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 150
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>SKUs Analisados</p>
                                    <div className="back-text">S</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 75
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">%</span>
                                    </h3>
                                    <p>Redução de perdas</p>
                                    <div className="back-text">C</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 15
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                    </h3>
                                    <p>Cases de sucesso</p>
                                    <div className="back-text">A</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 160
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">%</span>
                                    </h3>
                                    <p>Retorno do Investimento</p>
                                    <div className="back-text">E</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FunFacts;