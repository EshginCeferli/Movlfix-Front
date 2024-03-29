import React from 'react'

function TvBanner() {
    return (
        <div><section
            className="breadcrumb-area breadcrumb-bg"
            style={{ backgroundImage: "url(/images/bg/breadcrumb_bg.jpg)" }}
        // data-background="img/bg/breadcrumb_bg.jpg"
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            <h2 className="title">
                                Our <span>Movie</span>
                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Movie
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default TvBanner