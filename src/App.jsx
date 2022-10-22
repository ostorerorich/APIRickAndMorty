import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaAngleUp } from 'react-icons/fa'

function App() {
    const [character, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [toTopVisible, setToTopVisible] = useState(false)
    const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`

    //Fetching data from the API
    const getData = async () => {
        try {
            const res = await fetch(API_URL)
            const data = await res.json()
            setCharacters(data.results)
        } catch (error) {
            console.log(error)
        }
    }
    //Loading data when api url change
    useEffect(() => {
        getData()
    }, [API_URL])

    //
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setToTopVisible(true)
            } else {
                setToTopVisible(false)
            }
        })
    }, [])

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const nextPage = () => {
        if (page >= 41) return
        setPage((x) => x + 1)
    }

    const prevPage = () => {
        if (page === 1) return
        setPage((x) => x - 1)
    }

    return (
        <div className='App'>
            <Header />

            <div className='page_pagination'>
                <button className='page_btn' onClick={prevPage}>
                    <FiChevronLeft />
                    <FiChevronLeft />
                </button>
                <input
                    type='text'
                    placeholder='Search character...'
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setPage(1)
                    }}
                />
                <button className='page_btn' onClick={nextPage}>
                    <FiChevronRight />
                    <FiChevronRight />
                </button>
            </div>

            <div className='main_container'>
                {character == undefined ? (
                    <p className='character_notfound'>No characters found</p>
                ) : (
                    character.map((character) => (
                        <Card character={character} key={character.id} />
                    ))
                )}
            </div>
            <div className='btn-to-top'>
                {' '}
                {toTopVisible && (
                    <FaAngleUp
                        className='btn-position btn-style'
                        onClick={toTop}
                    />
                )}{' '}
            </div>
        </div>
    )
}

export default App
