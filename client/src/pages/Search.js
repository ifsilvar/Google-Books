import axios from "axios"
import React, { useEffect, useState } from "react";
import API from "../utils/API.js"
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

export default function Search() {
        // Setting our component's initial state
        const [books, setBooks] = useState([])
        const [formObject, setFormObject] = useState({})
      
        // Load all books and store them with setBooks
        useEffect(() => {
            loadBooks()
        }, [])

        function loadBooks() {
            // console.log(events)
            // const inputValue = events.srcElement
            API.searchBook().then((data) => {
                console.log(data.data.items)
                setBooks(data.data.items)
            })
            .catch(err => console.log(err));

            // const handleChange = events => {
                //     const inputValue = events.target.value
                //     API.searchBook(inputValue).then((data) => {
                    //         console.log(data)
                    //     })
                    // }
                }
        function handleInputChange(event) {
            const { name, value } = event.target;
            setFormObject({...formObject, [name]: value})
            };

    return (
        <div>

                <h1>Search Page</h1>
                <input name="title" onChange={handleInputChange}/>
                {/* <button type="submit" onClick={Search}></button> */}

        </div>
    )}