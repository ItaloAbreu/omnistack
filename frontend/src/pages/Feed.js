import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>User Name</span>
                            <span className="place">Local</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/511812.jpg" alt="Imagem do Post"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like"/>
                            <img src={comment} alt="comment"/>
                            <img src={send} alt="send"/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>Um post muito massa!
                            <span>#react #omnstack #top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>User Name</span>
                            <span className="place">Local</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/511812.jpg" alt="Imagem do Post"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like"/>
                            <img src={comment} alt="comment"/>
                            <img src={send} alt="send"/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>Um post muito massa!
                            <span>#react #omnstack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;