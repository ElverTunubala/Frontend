import React, { useEffect, useState } from 'react'
import { Modal } from 'reactstrap'
import { Tarjetas, ModalHeader, ModalBody, ModalBodyOverview, ModalBodyImg, InputClose, BtnTrailer, BtnDespues, Badge, ImgCard } from '../Styled/Styles'
import ModalVideo from './ModalVideo';


const Cards = ({ personaje }) => {

    const poster = `https://image.tmdb.org/t/p/w500/${personaje.poster_path}`

    const [modal, setModal] = useState(false)
    const [modalVideo, setModalVideo] = useState(false)

    const openOverview = () => { setModal(!modal) }
    const openVideo = () => {
        setModalVideo(!modalVideo)
        setModal(!modal)
    }



    return (
        <Tarjetas onClick={openOverview} >
            <div className="tarjetas">
                <Badge style={(personaje.vote_average >= 8)?({"border": "1px solid green", "borderLeftStyle": "none"}):(personaje.vote_average > 5)?({"border": "1px solid red", "borderLeftStyle": "none"}):({"border": "1px solid red", "borderLeftStyle": "none"})}>⭐{personaje.vote_average.toFixed(1)}</Badge>
                <ImgCard src={poster} className="card-img-top" height="340px" alt={personaje.title} />
            </div>

            <Modal isOpen={modal} size={'lg'} contentClassName="bg-dark bg-opacity-50"  >
                <ModalHeader>
                    <InputClose
                        type="button"
                        value="X"
                        onClick={openOverview}

                    />
                </ModalHeader>
                <ModalBody>
                    <ModalBodyImg src={poster} alt="" />
                    <ModalBodyOverview>
                        <div className="overview">
                            <h3>{personaje.title}</h3>
                            <span>{personaje.overview}</span>
                        </div>
                        <div className="buttons">
                            <BtnTrailer type="button" value="Ver trailer" onClick={openVideo} />
                            <BtnDespues type="button" value="+ Ver despues" onClick={openVideo} />
                        </div>
                    </ModalBodyOverview>

                </ModalBody>
            </Modal>

            {/* MODAL VIDEO */}
            <Modal isOpen={modalVideo} size="xl" contentClassName="bg-dark bg-opacity-10" >
                <ModalHeader>
                    <InputClose
                        type="button"
                        value="X"
                        onClick={openVideo}
                    />
                </ModalHeader>
                <ModalBody>
                    <ModalVideo item={personaje} />
                </ModalBody>

            </Modal>



        </Tarjetas>

    )
}

export default Cards
