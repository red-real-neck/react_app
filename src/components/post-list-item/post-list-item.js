import './post-list-item.css';
import React, { Component } from 'react'

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            liked: false
        }
        this.onImportant = () => {
            this.setState(({ important }) => ({
                important: !important
            }));
        }
        this.onLiked = () => {
            this.setState(({ liked }) => ({
                liked: !liked
            }));
        }
    }
    render() {
        const { message, onDelete, id } = this.props;
        const { important, liked } = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important'
        }
        if (liked) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={this.onLiked}>
                    {message}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        onClick={() => {onDelete(id)}}
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>);
    }
}

// function PostListItem({message, important = false}) {

    // let classNames = 'app-list-item d-flex justify-content-between';
    // if (important) {
    //     classNames += ' important'
    // }

//     return (
//         <div className={classNames}>
//             <span className="app-list-item-label">
//                 {message}
//             </span>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button type ="button" className="btn-star btn-sm">
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button type ="button" className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o"></i>                    
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     );
// }

// export default PostListItem;