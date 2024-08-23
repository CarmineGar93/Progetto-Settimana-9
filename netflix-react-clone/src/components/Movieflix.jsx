import { Component } from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Slider from "react-slick";


class Movieflix extends Component {
    state = {
        isLoading: true,
        isErr: false,
        searched: this.props.searched,
        movies: {
            Search: []
        }
    }

    componentDidMount = () => {
        this.retrieveMovies()
    }

    retrieveMovies = async () => {
        try {
            const Url = 'https://www.omdbapi.com/?apikey=dc4b59b5&s='
            const response = await fetch(Url + this.state.searched)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({
                    movies: data,
                    isLoading: false,
                })
            } else {
                throw new Error('Errore nella ricerca')
            }

        } catch (err) {
            console.log('Errore')
            this.setState({
                isErr: true,
                isLoading: false,
            })
        }

    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };
        const spinners = []
        for (let i = 0; i < 6; i++) {
            spinners.push(<Spinner animation="grow" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
        }
        return (

            <Container fluid className="mb-3">
                <Row className="mb-3">
                    <Col>
                        <h2 className="text-light">Results for {this.props.searched}</h2>
                    </Col>
                </Row>
                {
                    this.state.isLoading && (
                        <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                            {spinners.map(((spinner, i) => {
                                return (

                                    <Col key={i} className="text-center">
                                        {spinner}
                                    </Col>

                                )
                            }))
                            }
                        </Row>
                    )
                }
                {this.state.isErr ? <h3 className="text-light custom-margin">Server Error - Try Later</h3> :
                    !this.state.isLoading && this.state.movies.Response === 'False' ? <h3 className="text-light custom-margin">No results found</h3> :
                        this.state.movies.Search.length < 6 ? (
                            <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                                {
                                    this.state.movies.Search.map((movie) => {
                                        if (movie.Poster !== 'N/A') {
                                            return (

                                                <Col key={movie.imdbID} className="text-center">
                                                    <img src={movie.Poster} alt="" className="img-fluid customized" />
                                                </Col>

                                            )

                                        } else {
                                            return <></>
                                        }
                                    })
                                }
                            </Row>
                        ) : (
                            <Slider {...settings}>
                                {
                                    this.state.movies.Search.map((movie) => {
                                        if (movie.Poster !== 'N/A') {
                                            return (
                                                <div key={movie.imdbID}>
                                                    <img src={movie.Poster} alt="" className="w-100 customized" />
                                                </div>
                                            )
                                        } else {
                                            return <></>
                                        }
                                    })
                                }
                            </Slider>
                        )
                }
                {/*  <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                    {
                        this.state.isLoading && (
                            spinners.map(((spinner, i) => {
                                return (
                                    
                                    <Col key={i} className="text-center">
                                        {spinner}
                                    </Col>
                                    
                                )
                            }))
                        )
                    }
                    {   this.state.isErr ? <h3 className="text-light custom-margin">Server Error - Try Later</h3> :
                        !this.state.isLoading && this.state.movies.Response === 'False' ? <h3 className="text-light custom-margin">No results found</h3> : (
                            this.state.movies.Search.slice(0, 6).map((movie) => {
                                if(movie.Poster !== 'N/A') {
                                    return (
                                        
                                        <Col key={movie.imdbID} className="text-center">
                                            <img src={movie.Poster} alt="" className="img-fluid customized"/>
                                        </Col>
                                        
                                    )

                                } else {
                                    return <></>
                                }
                            })    
                        )
                    }
                </Row> */}
            </Container>
        )
    }
}

export default Movieflix