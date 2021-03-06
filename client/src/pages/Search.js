import axios from "axios"
import React, { useEffect, useState } from "react";
import API from "../utils/API.js"
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

export default function Search() {
        // Setting our component's initial state
        const [books, setBooks] = useState([])
        const [bookSearch, setBookSearch] = useState("")
        const [bookObject, setBookObject] = useState({
            title: "",
            authors: "",
            description: "",
            link: "",
            image: ""
          })

        const handleInputChange = event => {
            const { value } = event.target;
            setBookSearch(value);
            };

        const handleFormSubmit = event => {
            // When the form is submitted, prevent its default behavior, get recipes update the recipes state
            event.preventDefault();
            API.searchBook(bookSearch)
                .then((data) => {
                    console.log(data.data.items)
                    setBooks(data.data.items)
                })
            //   .then(res => setBooks(data.data.items))
            .catch(err => console.log(err));
        };

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

        //function to save book to db
        function saveBook(){

            API.saveBook({
              title: books.volumeInfo.title,
              authors: books.volumeInfo.authors,
              description: books.volumeInfo.title,
              link: books.volumeInfo.infoLink,
              image: books.volumeInfo.imageLinks.smallThumbnail
            })
            .then(res => loadBooks())
            .catch(err => console.log(err));
          }

            // const handleChange = events => {
                //     const inputValue = events.target.value
                //     API.searchBook(inputValue).then((data) => {
                    //         console.log(data)
                    //     })
                    // }
                // }

    return (
        <div>
            <Container>
            <h1 style={{textAlign: "center"}}>Search Page</h1>
                    <div >
                        <input 
                        name="search" 
                        value={bookSearch}
                        onChange={handleInputChange}
                        placeholder="search"
                        />

                        <button
                            onClick={handleFormSubmit}
                            type="success"
                            className="btn btn-success"
                            >Search
                        </button>
                    </div>
                <div>
                    {books.map(book => {
                    return (
                        <ListItem key={book.id}>
                            <hr />
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="thumbnail" value={bookObject.image} />
                            <strong value={bookObject.title} style={{paddingLeft: "5px"}}>{book.volumeInfo.title}</strong> by 
                            <strong value={bookObject.authors} style={{paddingLeft: "5px"}}>{book.volumeInfo.authors}</strong>

                            <a href={book.volumeInfo.infoLink} target="_blank" value={bookObject.link} style={{paddingLeft: "5px"}}>More Info
                            </a>

                            <SaveBtn onClick={() => saveBook(book.id), console.log(book.volumeInfo.imageLinks.smallThumbnail)} />
                        </ListItem>
                    );
                    })}
                </div>
            </Container>
        </div>
    )}