import { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap'

class Movieflix extends Component {
    state = {
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
                    movies: data
                })
            } else {
                throw new Error ('Aiuttooooo')
            }

        } catch(err) {
            alert(err)
        }

    }
    render() {
        return (
            <Container fluid className="mb-3">
                <Row className="mb-3">
                    <Col>
                        <h4 className="text-light">{this.props.searched}</h4>
                    </Col>
                </Row>
                <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                    {
                        this.state.movies.Search.slice(0, 6).map((movie) => {
                            return (
                                <Col key={movie.imdbID} className="text-center">
                                    <img src={movie.Poster} alt="" className="img-fluid customized"/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default Movieflix