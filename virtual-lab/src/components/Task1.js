import { List } from 'react-virtualized';
import { ListPost } from './ListPost';
import React, { useState, useEffect } from 'react';
export function Task1(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    function rowRenderer({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible, // This row is visible within the List (eg it is not an overscanned row)
        style, // Style object to be applied to row (to position it)
    }) {
        return (
            <div>
                {items.map((item) => {
                    if (item.title.split(' ').length <= 7) {
                        return (
                            <ListPost block={item}/>
                        )
                    }
                    else return null;
                })}
            </div>
        );
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
                <List
                    width={800}
                    height={800}
                    rowCount={items.length}
                    rowHeight={150}
                    rowRenderer={rowRenderer}
                />
        );
    }
}
