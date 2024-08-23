import { Component } from "react";
import { Container, Row, Col, Spinner} from 'react-bootstrap'


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
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({
                    movies: data,
                    isLoading: false,
                })
            } else {
                throw new Error ('Errore nella ricerca')
            }

        } catch(err) {
            alert(err)
            this.setState({
                isErr: true,
                isLoading: false,
            })
        }

    }
    render() {
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
                <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
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
                    {
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
                </Row>
            </Container>
        )
    }
}

export default Movieflix