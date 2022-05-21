import { Button, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //initialStat 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    //2 
    const handleTitle=(e)=>{
        setTitle(e.target.value) }
    const handleDescription=(e)=>{
        setDescription(e.target.value) }
    const handleRate=(e)=>{
        setRate(e.target.value) }
    const handlePoster=(e)=>{
        setPosterUrl(e.target.value) }
    
    // 3
    const handleMovie=()=>{
        let newMovie={title, description, rate, posterUrl }
        add(newMovie)
        handleClose()
    }

    return (
        <div>
                <Button variant="primary" onClick={handleShow}>
                    Add movie 
                </Button>

                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Movie title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleTitle} />
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" value={description} onChange={handleDescription} />
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={handleRate} />
                    <Form.Label>PosterUrl </Form.Label>
                    <Form.Control type="url" placeholder="Enter poster url" value={posterUrl} onChange={handlePoster} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>handleMovie() }>
                    Save Changes
                </Button>
                </Modal.Footer>
                </Modal>
        </div>
    )
    }

export default AddMovie